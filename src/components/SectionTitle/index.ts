import dynamic from "next/dynamic";

export const SectionTitle = dynamic(
  import("./SectionTitle").then((e) => e.default)
);
