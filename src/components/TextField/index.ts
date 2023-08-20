import dynamic from "next/dynamic";

export const TextField = dynamic(import("./TextField").then((e) => e.default));
