import dynamic from "next/dynamic";

export const Quote = dynamic(import("./Quote").then((e) => e.default));
