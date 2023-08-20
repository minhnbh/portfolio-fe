import dynamic from "next/dynamic";

export const ContactMe = dynamic(import("./ContactMe").then((e) => e.default));
