import dynamic from "next/dynamic";

export const Banner = dynamic(import("./Banner").then((e) => e.default));
