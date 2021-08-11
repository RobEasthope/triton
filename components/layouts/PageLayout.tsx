import { ReactNode } from 'react';
import { hero } from './PageLayout.styles';

export const PageLayout = (): ReactNode => (
  <div>
    <h1 className={hero}>Welcome to Triquetra</h1>
  </div>
);
