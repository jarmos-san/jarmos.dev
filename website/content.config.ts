import {
  type CollectionSource,
  type CollectionType,
  defineCollection,
  defineContentConfig,
  z,
} from "@nuxt/content";
import { defineSitemapSchema } from "@nuxtjs/seo/content";

// The URL of the repository, the directory and the GitHub access token to fetch
// The blogposts from
const REPOSITORY = "https://github.com/Jarmos-san/blogposts";
const DIR = "blogs/**.md";

// The publication date of the blog post
const utcDateTime = z.date().or(z.string().datetime({ offset: true }));
const timestamps = z.object({
  publishedOn: utcDateTime,
  updatedOn: utcDateTime.optional(),
});

// The URL path (or slug) of the blog post
const path = z.string();

// The title of the blog post (also used for SEO purposes)
const title = z.string();

// The description of the blog post (also used for SEO purposes)
const description = z.string();

// The content of the blog post
const body = z.object({
  children: z.any(),
  toc: z.any(),
  type: z.string(),
});

// The internal navigation of the blog post (used to render the sidebar)
const navigation = z
  .union([
    z.boolean(),
    z.object({
      description: z.string(),
      icon: z.string(),
      title: z.string(),
    }),
  ])
  .default(true);

// The SEO metadata of a blog post
const seo = z
  .intersection(
    z.object({
      description: z.string().optional(),
      // oxlint-disable-next-line unicorn/max-nested-calls
      link: z.array(z.record(z.string(), z.any())).optional(),
      // oxlint-disable-next-line unicorn/max-nested-calls
      meta: z.array(z.record(z.string(), z.any())).optional(),
      title: z.string().optional(),
    }),
    z.record(z.string(), z.any()),
  )
  .optional()
  .default({});

// The details of the cover image to render for a blog post
const coverImage = z.object({
  alt: z.string().optional(),
  url: z.string(),
});

// The sitemap configuration and shape to pass on to Nuxt for server-side
// Generation.
const sitemap = defineSitemapSchema();

// The fields and schema defined for each individual blog post
const schema = z.object({
  body,
  coverImage,
  description,
  navigation,
  path,
  seo,
  sitemap,
  timestamps,
  title,
});

// The configuration of the source to fetch the articles from
const source: CollectionSource | undefined =
  process.env.NODE_ENV === "test"
    ? undefined
    : {
        include: DIR,
        repository: REPOSITORY,
      };

// The type of the collection.
const type: CollectionType = "page";

// The "content" (basically the blogposts) collection and its configurations
const content = defineCollection({ schema, source, type });

// Define the collection of the blog post content
const collections = { content };

// Export the configurations
export default defineContentConfig({ collections });
