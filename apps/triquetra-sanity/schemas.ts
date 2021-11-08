// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

//Links
import internalLink from '../../packages/components/base/links/InternalLink/InternalLink.schema.js';
import internalLinkWithTitle from '../../packages/components/base/links/InternalLink/InternalLinkWithTitle.schema.js';
import externalLink from '../../packages/components/base/links/ExternalLink/ExternalLink.schema.js';
import externalLinkWithTitle from '../../packages/components/base/links/ExternalLink/ExternalLinkWithTitle.schema.js';

// Navigation

import header from '../../packages/components/navigation/Header/Header.schema.js';

// Formatted text
import exampleText from '../../packages/components/base/text/ExampleFormattedText/ExampleFormattedText.schema';

// Settings
import globalMetadata from '../../packages/components/base/app/Metadata/GlobalMetadata.schema';



// Content
import exampleSection from '../../packages/components/content/ExampleSection/ExampleSection.schema';

// Pages
import Home from '../../packages/components/pages/Home/Home.schema';
import page from '../../packages/components/pages/Page/Page.schema';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Links
    internalLink,
    internalLinkWithTitle,
    externalLink,
    externalLinkWithTitle,

    // Navigation
    header,

    // Formatted text
    exampleText,

    // Settings
    globalMetadata,

    // Content
    exampleSection,

    // Pages
    Home,
    page
  ]),
})
