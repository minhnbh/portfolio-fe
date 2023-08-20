import dynamic from "next/dynamic";

export const Blog = dynamic(import("./Blog").then((e) => e.default));
