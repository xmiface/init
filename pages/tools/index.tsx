import Link from "next/link";
import { FC } from "react";
import { ClearTinyLayout } from "../../layouts/ClearTinyLayout";

interface IToolsProps {}

const Tools: FC<IToolsProps> = ({}) => {
  const links = [
    {
      title: "socket",
      path: "/tools/socket",
    },
  ];
  return (
    <ClearTinyLayout links={[{ title: "tools", path: "/tools" }]}>
      {links.map((el) => (
        <Link href={el.path}>{el.title}</Link>
      ))}
    </ClearTinyLayout>
  );
};

export default Tools;
