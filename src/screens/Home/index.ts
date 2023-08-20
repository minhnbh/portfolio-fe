import dynamic from "next/dynamic";

export const HomeScreen = dynamic(import("./Home").then((e) => e.default));
