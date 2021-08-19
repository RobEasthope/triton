import { RenderSections } from 'components/utils/RenderSections/RenderSections';

export const HomePage = ({ page, preview }) => (
  <div className="">
    <main className="">
      {page?.sections && (
        <RenderSections sections={page?.sections} preview={preview} />
      )}
    </main>
  </div>
);
