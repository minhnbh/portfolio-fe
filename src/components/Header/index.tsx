import dynamic from "next/dynamic";
import { HeaderProps } from "./Header";

export const Header = dynamic<HeaderProps>(
  import("./Header").then((comp) => comp.Header)
);
