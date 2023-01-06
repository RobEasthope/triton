import { Spacer as rawSpacerProps } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";

// TYPES
export type SpacerProps = Pick<rawSpacerProps, "height">;

// MARKUP
export const Spacer = ({ height }: SpacerProps) => <Box as="div">{/* Spacer */}</Box>;

export default Spacer;
