import dynamic from "next/dynamic";

export const AboutMe = dynamic(import("./AboutMe").then((e) => e.default));
