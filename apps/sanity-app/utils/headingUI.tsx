import React from "react";

export function headingUI(title: string) {
  return {
    inputComponent: (field: {
      type: {
        title: string;
      };
    }) => (
      <div
        style={{
          borderBottom: "1px solid rgba(0,0,0,.1)",
          fontSize: "0.9rem",
          marginTop: "1em",
          paddingBottom: "0.33em",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {field.type.title}
      </div>
    ),
    name: `heading${title
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")}`,
    title,
    type: "string",
  };
}
