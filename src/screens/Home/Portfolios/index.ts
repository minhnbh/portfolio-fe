import dynamic from "next/dynamic";

export const Portfolios = dynamic(import("./Portfolios").then((e) => e.default));
