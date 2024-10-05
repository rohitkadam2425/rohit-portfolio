import Image from "next/image";
import Header from "@/app/components/header";
import SkillsSection from "@/app/components/skills/skills"
import Work from '@/app/components/work/work'
import Experience from '@/app/components/Experience/Experience'
import About from '@/app/components/About/About'

export default function Home() {
  return (
    <div>
     <Header/>
     <SkillsSection/>
     <Work/>
     <Experience/>
     <About/>
    </div>
  );
}
