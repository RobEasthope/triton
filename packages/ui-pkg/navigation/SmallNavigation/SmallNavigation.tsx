import { RiMenuLine } from "react-icons/ri";
import * as Dialog from "@radix-ui/react-dialog";
import { Header as rawHeaderProps } from "ui-pkg/types/sanity-schema";
import { SuperLink } from "ui-pkg/base/SuperLink/SuperLink";
import { ExternalLinkWithTitleSchemaProps } from "ui-pkg/base/ExternalLink/ExternalLink";
import { InternalLinkWithTitleSchemaProps } from "ui-pkg/base/InternalLink/InternalLink";

// TYPES
export interface SmallNavigationProps extends rawHeaderProps {
  primaryNavigation?: [
    ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps
  ];
  secondaryNavigation?: [
    ExternalLinkWithTitleSchemaProps | InternalLinkWithTitleSchemaProps
  ];
}

// MARKUP
export const SmallNavigation = ({
  primaryNavigation,
  secondaryNavigation,
}: Pick<SmallNavigationProps, "primaryNavigation" | "secondaryNavigation">) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <RiMenuLine />
    </Dialog.Trigger>

    <Dialog.Overlay />

    <Dialog.Content>
      <Dialog.Close>Close</Dialog.Close>

      <nav>
        <ul>
          {primaryNavigation?.map((nav) => (
            <li key={nav?._key}>
              <SuperLink link={nav}>{nav.title}</SuperLink>
            </li>
          ))}
        </ul>

        {/* {secondaryNavigation && secondaryNavigation?.length > 0 && (
          <ul>
            {secondaryNavigation.map((nav) => (
              <li key={nav?._key}>
                <SuperLink link={nav}>{nav.title}</SuperLink>
              </li>
            ))}
          </ul>
        )} */}
      </nav>
    </Dialog.Content>
  </Dialog.Root>
);
