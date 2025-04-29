import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: '🔍 Search',
          items: [
            {
              type: 'doc',
              id: 'search/search-overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'search/search-homes',
              label: 'Search Homes',
            },
            {
              type: 'doc',
              id: 'search/monitor-listings',
              label: 'Monitor Listings',
            },
            {
              type: 'doc',
              id: 'search/analyze-properties',
              label: 'Analyze Properties',
            },
          ],
        },
        {
          type: 'category',
          label: '📅 Plan',
          items: [
            {
              type: 'doc',
              id: 'plan/plan-overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'plan/listing-calendar',
              label: 'Listing Calendar',
            },
            {
              type: 'doc',
              id: 'plan/auto-planning',
              label: 'Auto Planning',
            },
            {
              type: 'doc',
              id: 'plan/auto-scheduling',
              label: 'Auto Scheduling',
            },
          ],
        },
        {
          type: 'category',
          label: '🏠 Show',
          items: [
            {
              type: 'doc',
              id: 'show/show-overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'show/showing-geo-fence',
              label: 'Showing Geo-Fence',
            },
            {
              type: 'doc',
              id: 'show/showing-feedback',
              label: 'Showing Feedback',
            },
            {
              type: 'doc',
              id: 'show/showing-performance',
              label: 'Showing Performance',
            },
          ],
        },
      ],
    },
  ],
  developer: [
    {type: 'doc', id: 'developer/intro', label: 'Overview'},
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'doc',
          id: 'developer/authentication',
          label: 'Authentication',
        },
        {
          type: 'doc',
          id: 'developer/webhooks',
          label: 'Webhooks',
        },
        {
          type: 'doc',
          id: 'developer/api-reference',
          label: 'API Reference',
        },
      ],
    },
  ],
  'product-guides': [
    {
      type: 'doc',
      id: 'product-guides/intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'product-guides/quick-start',
      label: 'Quick Start Guide',
    },
    {
      type: 'doc',
      id: 'product-guides/core-features',
      label: 'Core Features',
    }
  ],
  'ux-flow': [
    {
      type: 'doc',
      id: 'ux-flow/intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'ux-flow/home-search-flow',
      label: 'Home Search Flow',
    },
    {
      type: 'doc',
      id: 'ux-flow/property-viewing-flow',
      label: 'Property Viewing Flow',
    }
  ],
};

export default sidebars;
