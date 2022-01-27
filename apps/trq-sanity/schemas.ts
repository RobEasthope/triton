// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

//Links
import internalLink from '../../packages/ui/base/links/InternalLink/InternalLink.schema.js';
import internalLinkWithTitle from '../../packages/ui/base/links/InternalLink/InternalLinkWithTitle.schema.js';
import externalLink from '../../packages/ui/base/links/ExternalLink/ExternalLink.schema.js';
import externalLinkWithTitle from '../../packages/ui/base/links/ExternalLink/ExternalLinkWithTitle.schema.js';

// Navigation
import Header from '../../packages/ui/navigation/Header/Header.schema.js';

// Formatted text
import ExampleText from '../../packages/ui/base/formatted-text/ExampleFormattedText/ExampleFormattedText.schema';

// Settings
import GlobalMetadata from '../../packages/ui/base/app/Metadata/GlobalMetadata.schema';

// Blocks
import ExampleSection from '../../packages/ui/blocks/ExampleSection/ExampleSection.schema';

// Pages
import Home from '../../packages/ui/pages/Home/Home.schema';
import page from '../../packages/ui/pages/Page/Page.schema';

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
    Header,

    // Formatted text
    ExampleText,

    // Settings
    GlobalMetadata,

    // Content
    ExampleSection,

    // Pages
    Home,
    page
  ]),
})
