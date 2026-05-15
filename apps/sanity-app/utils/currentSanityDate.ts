import * as dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

// Get and format date
dayjs.extend(advancedFormat);
const now = new Date();

export const currentSanityDate = dayjs.default(now).format("YYYY-MM-DD");
