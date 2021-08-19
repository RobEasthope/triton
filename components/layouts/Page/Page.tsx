/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/prop-types */
import { Footer } from 'components/navigation/Footer/Footer';
import { FixedFooterLayout } from 'components/structural/FixedFooterLayout';
import { MainContentLayout } from 'components/structural/MainContentLayout';
import { RenderSections } from 'components/utils/structural/RenderSections/RenderSections';

export const Page = ({
  page,
  preview,
}: {
  page: Record<string, unknown>;
  preview: boolean;
}) => (
  <>
    <FixedFooterLayout>
      <MainContentLayout as="main">
        {page?.sections && (
          <RenderSections sections={page?.sections} preview={preview} />
        )}
      </MainContentLayout>
      <Footer />
    </FixedFooterLayout>
  </>
);
