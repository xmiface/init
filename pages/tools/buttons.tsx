import Link from "next/link";
import { ClearTinyLayout } from "../../layouts/ClearTinyLayout";

const links = [
  {
    title: "buttons",
    path: "/tools/buttons",
  },
];

export default function Buttons() {
  return <ClearTinyLayout links={links}>
    
  </ClearTinyLayout>;
}
