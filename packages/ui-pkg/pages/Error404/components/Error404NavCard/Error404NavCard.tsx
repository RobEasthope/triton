import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Error404NavCard as rawError404NavCard } from "ui-pkg/types/sanity-schema";
import {
  InternalLink,
  InternalLinkWithTitleSchemaProps,
} from "ui-pkg/base/InternalLink/InternalLink";

export type Error404NavCardProps = Pick<rawError404NavCard, "heading" | "description"> & {
  link: InternalLinkWithTitleSchemaProps;
};

export const Error404NavCard = ({ heading, description, link }: Error404NavCardProps) => (
  <li className="relative flex items-start space-x-4 py-6">
    <div className="min-w-0 flex-1">
      <h3 className="text-base font-medium text-gray-900">
        <span className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
          <InternalLink
            href={link?.to?.slug?.current || null}
            className="focus:outline-none"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {heading}
          </InternalLink>
        </span>
      </h3>
      <p className="text-base text-gray-500">{description}</p>
    </div>
    <div className="flex-shrink-0 self-center">
      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </div>
  </li>
);
