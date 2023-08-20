import dynamic from "next/dynamic";

export const Reviews = dynamic(import("./Reviews").then((e) => e.default));
