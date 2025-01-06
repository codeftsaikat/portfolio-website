"use client";
import Clients from "@/components/clients/Clients";
import Experience from "@/components/experience/Experience";
import Grid from "@/components/grid/Grid";
import Hero from "@/components/hero/Hero";
import MyApproach from "@/components/my-approach/MyApproach";
import RecentProject from "@/components/recent-project/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <MyApproach />
      </div>
    </main>
  );
}
