import dynamic from "next/dynamic";

export const Layout = dynamic(import("./Layout").then((e) => e.default));
