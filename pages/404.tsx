import { useRouter } from "next/router";
import { ColoredButton } from "../components/coingecko/controlledComponents";
import { MainLayout } from "../layouts/MainLayout";

export default function () {
  const router = useRouter();
  return (
    <MainLayout>
      <div className=" absolute left-1/2  -translate-x-1/2 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-50 ">
        <ColoredButton title={"Wrong door"} href="" />
        <ColoredButton title={"Two blocks down"}  onClick={() => router.back()} />
      </div>
      <div className=" absolute left-1/2  -translate-x-1/2 top-1/2 transform -translate-y-1/2  text-[40rem] font-bold blur-xl max-h-[100%] overflow-hidden">
        404
      </div>
    </MainLayout>
  );
}
