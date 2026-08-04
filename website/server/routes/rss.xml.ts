/**
 * Server route to generate the site's RSS feed.
 *
 * This handler dynamically queries all the document, ordered by publication
 * date from the "contents" source (managed by the `@nuxt/content` module).
 * After a successful document query, the data is serialised in to an RSS 2.0
 * feed.
 */

import { queryCollection } from "@nuxt/content/server";
import { version } from "nuxt/package.json";
import { Feed } from "rivu";

export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().public.baseURL;

  // Fetch all the posts from the Nuxt Content "collection" based on specified
  // metadata and order them in descending order of their publication date.
  const posts = await queryCollection(event, "content")
    .select("id", "path", "title", "publishedOn", "description")
    .order("publishedOn", "DESC")
    .all();

  // Create a the `Feed` instance to generate the RSS feed with.
  const feed = new Feed({
    title: "jarmos.dev",
    link: baseURL,
    description:
      "I'm Jarmos - CTO at Weburz, Senior Engineer by title, " +
      "open-source hacker by heart. I design systems, mentor devs and " +
      "occasionally tame misbehaving servers.",
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      guid: post.id,
      pubDate: new Date(post.publishedOn),
      link: baseURL + post.path,
      author: "Somraj Saha <contact@jarmos.dev>",
    })),
    language: "en-US",
    copyright: "Somraj Saha © 2016-" + new Date().getFullYear(),
    managingEditor: "Somraj Saha <contact@jarmos.dev>",
    webMaster: "Somraj Saha <contact@jarmos.dev>",
    pubDate: new Date(),
    lastBuildDate: new Date(),
    category: "Technology",
    generator: `Nuxt.js ${version} (Node.js ${process.version})`,
    docs: "https://www.rssboard.org/rss-specification",
    ttl: 1440,
  });

  // Set the response header and return the data as an appropriate XML data
  // response.
  event.node.res.setHeader("Content-Type", "application/xml");

  return feed.generate();
});
