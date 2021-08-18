// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Navigation
import internalLinkWithTitle from '../../components/navigation/raw-links/InternalLink/internal-link-with-title-schema.js';
import internalLinkSansTitle from '../../components/navigation/raw-links/InternalLink/internal-link-sans-title-schema.js';

import externalLinkWithTitle from '../../components/navigation/raw-links/ExternalLink/external-link-with-title-schema.js';
import externalLinkSansTitle from '../../components/navigation/raw-links/ExternalLink/external-link-sans-title-schema.js';

// Sections
import exampleSection from '../../components/sections/ExampleSection/example-section-schema';

// Pages
import homePage from '../../components/layouts/HomePage/home-page-schema';
import page from '../../components/layouts/Page/page-schema';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Navigation
    internalLinkWithTitle,
    internalLinkSansTitle,
    externalLinkWithTitle,
    externalLinkSansTitle,

    // Sections
    exampleSection,

    // Pages
    homePage,
    page
  ]),
})
