import dynamic from "next/dynamic";

export const Resume = dynamic(import("./Resume").then((e) => e.default));
