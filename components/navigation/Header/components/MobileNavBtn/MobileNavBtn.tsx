import { RiMenuLine } from 'react-icons/ri';

type MobileNavBtnProps = {
  className?: string;
};

export const MobileNavBtn = ({ className, onClick }: MobileNavBtnProps) => (
  <button
    type="button"
    aria-label="Open mobile navigation"
    onClick={() => onClick()}
    className={className}
  >
    <RiMenuLine />
  </button>
);
