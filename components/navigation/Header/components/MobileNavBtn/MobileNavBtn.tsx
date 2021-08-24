import { useDispatch } from 'react-redux';
import { RiMenuLine } from 'react-icons/ri';
import { openMobileNav } from 'components/navigation/MobileNav/mobileNav.slice';

type MobileNavBtnProps = {
  className?: string;
};

export const MobileNavBtn = ({ className }: MobileNavBtnProps) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      aria-label="Open mobile navigation"
      onClick={() => dispatch(openMobileNav())}
      className={className}
    >
      <RiMenuLine />
    </button>
  );
};
