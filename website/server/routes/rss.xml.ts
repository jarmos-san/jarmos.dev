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

  // Fetch all the posts from the Nuxt Content collection
  const posts = await queryCollection(event, "content")
    .select("id", "path", "title", "description", "timestamps")
    .all();

  // Sort posts descending by publication date
  posts.sort((firstTimestamp, secondTimestamp) => {
    const timeA = new Date(firstTimestamp.timestamps.publishedOn).getTime();
    const timeB = new Date(secondTimestamp.timestamps.publishedOn).getTime();
    return timeB - timeA;
  });

  // Create the `Feed` instance to generate the RSS feed with.
  const feed = new Feed({
    category: "Technology",
    copyright: "Somraj Saha c 2016-" + new Date().getFullYear(),
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
      pubDate: new Date(post.timestamps.publishedOn),
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

  // Set the response header and return the data as an appropriate XML data response.
  setResponseHeader(event, "Content-Type", "application/xml");

  return feed.generate();
});
