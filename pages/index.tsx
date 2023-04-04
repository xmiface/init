import axios from "axios";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { Loader } from "../components/Loader";
import { IDBRouteDto } from "../types/dto";
import { ClearTinyLayout } from "../layouts/ClearTinyLayout";

interface Props {
  data: IDBRouteDto[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const getRoutes = await axios.get("http://localhost:3000/api/ping");
  const data = await getRoutes.data;
  return { props: { data } };
};

export default function Home({ data }: Props) {
  return (
    <div className="min-h-[100vh] bg-slate-900">
      <Head>
        <title>Vahui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClearTinyLayout links={[]}>
        {!data && (
          <div>
            Routes <Loader />
          </div>
        )}
      </ClearTinyLayout>
    </div>
  );
}
