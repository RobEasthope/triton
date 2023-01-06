import { Box } from "ui-pkg/base/Box/Box";
import { AnnouncementsBar as rawAnnouncementsBarProps } from "ui-pkg/types/sanity-schema";
import {
  Announcement,
  AnnouncementProps,
} from "ui-pkg/navigation/AnnouncementsBar/components/Announcement/Announcement";

// TYPES
export interface AnnouncementsBarProps extends rawAnnouncementsBarProps {
  announcements?: AnnouncementProps[];
}

// MARKUP
export const AnnouncementsBar = ({ announcements }: AnnouncementsBarProps) => {
  if (!AnnouncementsBar) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {announcements && (
          <>
            {announcements.map((announcement) => (
              <Announcement
                _type={announcement?._type}
                text={announcement?.text}
                link={announcement?.link}
              />
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default AnnouncementsBar;
