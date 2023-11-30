import Image from "next/image";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/Section-Divider";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
