import dynamic from "next/dynamic";

export const Post = dynamic(import("./Post").then((e) => e.default));
