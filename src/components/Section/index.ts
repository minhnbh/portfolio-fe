import dynamic from "next/dynamic";

export const Section = dynamic(import("./Section").then((e) => e.default));
