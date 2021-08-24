// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Navigation
import internalLink from '../../components/utils/links/InternalLink/InternalLink.schema.js';
import internalLinkWithTitle from '../../components/utils/links/InternalLink/InternalLinkWithTitle.schema.js';
import externalLink from '../../components/utils/links/ExternalLink/ExternalLink.schema.js';
import externalLinkWithTitle from '../../components/utils/links/ExternalLink/ExternalLinkWithTitle.schema.js';

import header from '../../components/navigation/Header/Header.schema.js';

// Settings
import globalMetadata from '../../components/utils/rendering/Metadata/global-metadata-schema';

// Formatted text
import exampleText from '../../components/utils/formatted-text/ExampleText/ExampleText.schema';

// Sections
import exampleSection from '../../components/sections/ExampleSection/ExampleSection.schema';

// Pages
import homePage from '../../components/layouts/HomePage/HomePage.schema';
import page from '../../components/layouts/Page/Page.schema';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Navigation
    internalLink,
    internalLinkWithTitle,
    externalLink,
    externalLinkWithTitle,

    header,

    // Settings
    globalMetadata,

    // Formatted text
    exampleText,

    // Sections
    exampleSection,

    // Pages
    homePage,
    page
  ]),
})
