import Link from "next/link";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function ({ text, href }: { text: string; href: string }) {
  return <Link href={href}>{text}</Link>;
}
