import { TripIndex as rawTripIndexProps, Trip } from "ui-pkg/types/sanity-schema";
import { Box } from "ui-pkg/base/Box/Box";
import { TripCard } from "ui-pkg/blocks/TripIndex/components/TripCard/TripCard";

// TYPES
export interface TripIndexProps extends rawTripIndexProps {
  upcomingTrips?: Trip[] | null;
  courseName: string;
  courseType: string;
}

// MARKUP
export const TripIndex = ({
  heading,
  upcomingTrips,
  courseName,
  courseType,
}: TripIndexProps) => {
  if (!heading && !upcomingTrips && !courseName && !courseType) {
    return null;
  }

  return (
    <Box as="section">
      <Box as="div">
        {heading && <h2>{heading}</h2>}

        {upcomingTrips && upcomingTrips?.length > 0 && (
          <div>
            {upcomingTrips?.map((trip) => (
              <TripCard
                key={trip?._id}
                startDate={trip?.startDate}
                endDate={trip?.endDate}
                spacesTaken={trip?.spacesTaken}
                totalSpaces={trip?.totalSpaces}
                courseName={courseName}
                courseType={courseType}
              />
            ))}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default TripIndex;
