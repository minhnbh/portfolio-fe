import dynamic from "next/dynamic";

export const Services = dynamic(import("./Services").then((e) => e.default));
