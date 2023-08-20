import dynamic from "next/dynamic";

export const Button = dynamic(import("./Button").then((e) => e.default));
