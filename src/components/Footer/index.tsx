import dynamic from "next/dynamic";
import { FooterProps } from "./Footer";

export const Footer = dynamic<FooterProps>(
  import("./Footer").then((comp) => comp.Footer)
);
