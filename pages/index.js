import Head from "next/head";
import Header from "../components/Header";
import SideBar from '../components/SideBar';
import Widgets from '../components/Widgets'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main>
        <SideBar />
        <Widgets />
      </main>
    </div>
  );
}
