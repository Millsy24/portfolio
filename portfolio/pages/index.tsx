import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import {Experience, PageInfo, Project, Skill, Social} from "../typings"
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className= "scroll-smooth bg-[#040404] text-[#2272FF] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2272FF]">
      <Head>
        <title>{pageInfo.name} Portfolio</title>
        
      </Head>


      <Header socials={socials}/>


      <section id = "hero" className="snap-start">
        <Hero pageInfo = {pageInfo}/>
      </section>
      <section id = "about" className = "snap-center">
        <About pageInfo = {pageInfo}/>
      </section>

      <section id = "experience" className = "snap-center">
        <WorkExperience experiences = {experiences}/>
      </section>

      <section id = "skills" className = "snap-start">
        <Skills skills={skills}/>
      </section>

      <section id = "projects" className = "snap-start">
        <Projects projects ={projects}/>
      </section>

      <section id = "contact" className = "snap-start">
        <ContactMe/>
      </section>

      
      

    
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps<Props> =async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();


  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
}
}