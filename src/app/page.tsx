import dynamic from "next/dynamic";

const Home = dynamic(() =>
  import("@/components/modules/home").then((module) => module.Home),
);

export default function HomePage() {
  return <Home />;
}
