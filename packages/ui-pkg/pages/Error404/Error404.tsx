import { useRouter } from "next/router";
import { Error404 as rawError404Props } from "ui-pkg/types/sanity-schema";
import { Footer, FooterProps } from "ui-pkg/navigation/Footer/Footer";
import { Header, HeaderProps } from "ui-pkg/navigation/Header/Header";
import {
  Error404NavCard,
  Error404NavCardProps,
} from "ui-pkg/pages/Error404/components/Error404NavCard/Error404NavCard";
import { Box } from "ui-pkg/base/Box/Box";
import { TbParachute } from "react-icons/tb";

export type Error404Props = {
  page: rawError404Props & {
    cards: Error404NavCardProps[];
  };
  header: HeaderProps["header"];
  footer: FooterProps["footer"];
};

export const Error404 = ({ page, header, footer }: Error404Props) => {
  const router = useRouter();

  return (
    <Box as="div">
      <Header header={header} />

      <div className="bg-white">
        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 pt-16">
            <TbParachute className="mx-auto h-6 w-auto" />
          </div>
          <div className="mx-auto max-w-xl py-12 sm:pb-24 sm:pt-12">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {page?.heading}
              </h1>
              <p className="mt-2 text-lg text-gray-500">{page?.subheading}</p>
            </div>
            <div className="mt-12">
              <ul className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                {page?.cards.map((card, i) => (
                  <Error404NavCard
                    heading={card.heading}
                    description={card.description}
                    link={card.link}
                    key={i}
                  />
                ))}
              </ul>
              {page?.goBackTitle && (
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span aria-hidden="true">&larr; </span>
                    {page?.goBackTitle}
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer footer={footer} />
    </Box>
  );
};
