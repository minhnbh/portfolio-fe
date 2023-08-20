import dynamic from "next/dynamic";

export const MySkills = dynamic(import("./MySkills").then((e) => e.default));
