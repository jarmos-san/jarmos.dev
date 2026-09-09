/**
 * @description Server route to generate the site's RSS feed. This handler queries all the
 * documents, ordered by publication date from the "contents" source (managed by
 * the `@nuxt/content` module). After a successful document query, the data is
 * serialised in to an RSS 2.0 feed.
 */

import { queryCollection } from "@nuxt/content/server";
import { version } from "nuxt/package.json";
import { Feed } from "rivu";

import {
  defineEventHandler,
  setResponseHeader,
  useRuntimeConfig,
} from "#imports";

// oxlint-disable-next-line typescript/prefer-readonly-parameter-types
export default defineEventHandler(async (event) => {
  // oxlint-disable-next-line typescript/no-unsafe-assignment typescript/no-unsafe-call typescript/no-unsafe-member-access
  const { baseURL } = useRuntimeConfig().public;

  // Fetch all the posts from the Nuxt Content "collection" based on specified
  // Metadata and order them in descending order of their publication date.
  const posts = await queryCollection(event, "content")
    .select("id", "path", "title", "publishedOn", "description")
    .order("publishedOn", "DESC")
    .all();

  // Create a the `Feed` instance to generate the RSS feed with.
  const feed = new Feed({
    category: "Technology",
    copyright: "Somraj Saha © 2016-" + new Date().getFullYear(),
    description:
      "I'm Jarmos - CTO at Weburz, Senior Engineer by title, " +
      "open-source hacker by heart. I design systems, mentor devs and " +
      "occasionally tame misbehaving servers.",
    docs: "https://www.rssboard.org/rss-specification",
    generator: `Nuxt.js ${version} (Node.js ${process.version})`,
    items: posts.map((post) => ({
      author: "Somraj Saha <contact@jarmos.dev>",
      description: post.description,
      guid: post.id,
      link: baseURL + post.path,
      pubDate: new Date(post.publishedOn),
      title: post.title,
    })),
    language: "en-US",
    lastBuildDate: new Date(),
    // oxlint-disable-next-line typescript/no-unsafe-assignment
    link: baseURL,
    managingEditor: "Somraj Saha <contact@jarmos.dev>",
    pubDate: new Date(),
    title: "jarmos.dev",
    ttl: 1440,
    webMaster: "Somraj Saha <contact@jarmos.dev>",
  });

  // Set the response header and return the data as an appropriate XML data
  // Response.
  setResponseHeader(event, "Content-Type", "application/xml");

  return feed.generate();
});
