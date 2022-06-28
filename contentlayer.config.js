import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string', required: true },
    color: { type: 'string' }
  },
}))

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  bodyType: 'mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields
}));


const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  bodyType: 'mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    isPublished: { type: 'string', required: true },
    color: { type: 'string' },
  },
  computedFields
}));


const Changelog = defineDocumentType(() => ({
  name: 'Changelog',
  filePathPattern: 'changelogs/*.mdx',
  bodyType: 'mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields
}));

const Uses = defineDocumentType(() => ({
  name: 'Uses',
  filePathPattern: 'uses.mdx',
  bodyType: 'mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields
}));



const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Changelog, Project, Uses],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
