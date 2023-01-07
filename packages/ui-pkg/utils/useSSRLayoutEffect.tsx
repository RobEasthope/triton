import * as React from "react";

export const useSSRLayoutEffect =
  typeof window === "undefined" ? () => {} : React.useLayoutEffect;
