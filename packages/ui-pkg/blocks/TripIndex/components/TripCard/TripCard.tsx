import { STATIC_TEXT } from "ui-pkg/constants/STATIC_TEXT";
import { Trip } from "ui-pkg/types/sanity-schema";

// TYPES
export type PartialTripCardProps = Pick<
  Trip,
  "startDate" | "endDate" | "totalSpaces" | "spacesTaken"
>;
export interface TripCardProps extends PartialTripCardProps {
  courseName: string;
  courseType: string;
}

// MARKUP
export const TripCard = ({
  startDate,
  endDate,
  totalSpaces,
  spacesTaken,
  courseName,
  courseType,
}: TripCardProps) => {
  if (!startDate && !endDate) {
    return null;
  }

  const remainingSpaces = totalSpaces - spacesTaken;

  return (
    <article>
      {startDate && endDate && (
        <div>
          {startDate} - {endDate}
        </div>
      )}
      <div>
        {remainingSpaces > 0 && <>Spaces: {remainingSpaces}</>}
        {remainingSpaces === 0 && <>Sold out</>}
      </div>

      <div>
        {remainingSpaces > 0 && (
          <a
            href={`mailto:lee@freeflightacademy.com?subject=${encodeURIComponent(
              `${courseName} ${courseType}: ${startDate} - ${endDate}`
            )}`}
          >
            {STATIC_TEXT.BOOK_NOW}
          </a>
        )}
      </div>
    </article>
  );
};
