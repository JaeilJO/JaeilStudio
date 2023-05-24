import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import MainConfig from "@/util/MainConfig";

export default function Home() {
  return (
    <>
      <Header />
      <Main items={MainConfig.items} />
    </>
  );
}
