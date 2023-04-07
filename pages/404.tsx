import { useRouter } from "next/router";
import { ClearTinyLayout } from "../layouts/ClearTinyLayout";

export default function () {
  const router = useRouter();
  return (
    <ClearTinyLayout links={[]}>
     404 lul
    </ClearTinyLayout>
  );
}
