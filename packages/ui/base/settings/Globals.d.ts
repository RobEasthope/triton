import { GlobalMetadata, Settings } from '@/UI/types/sanity-schema';
import { HeaderProps } from '@/UI/navigation/Header/Header';

export type AppGlobalsProps = {
  header: HeaderProps;
  metadata: GlobalMetadata;
  settings: Settings;
};
