import AnimatedSection from "../Components/AnimatedSection";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGithub as SiGithubIcon,
} from "react-icons/si";

import ThemeToggle from "../Components/ThemeToggle";
import ContactForm from "../Components/ContactForm";
import SectionHeading from "../Components/SectionHeading";
import SkillCard from "../Components/SkillCard";
import ProjectCard from "../Components/ProjectCard";
import ServiceCard from "../Components/ServiceCard";

const skills = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Git & GitHub", icon: SiGithubIcon },
];

const projects = [
  {
    title: "E-commerce Web App",
    description:
      "A scalable storefront with secure checkout, inventory management, and performance-first UX built with React, Node.js, and MongoDB.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/nasirnawaz/ecommerce-mern",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A polished personal brand experience for clients and recruiters, featuring responsive layouts, smooth animation, and strong visual hierarchy.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/nasirnawaz/portfolio-nextjs",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative productivity tool with task boards, status tracking, and real-time updates designed for modern teams.",
    stack: ["React", "Express", "MongoDB"],
    github: "https://github.com/nasirnawaz/task-manager",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A CMS-style blog platform with custom admin flow, rich content editing, and SEO-friendly pages for fast publishing.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/nasirnawaz/mern-blog",
    demo: "#",
  },
];

const services = [
  {
    title: "Frontend Development",
    description: "Modern, responsive UI built with React and Next.js for premium web experiences.",
  },
  {
    title: "Full Stack MERN Applications",
    description: "End-to-end MERN development with database, API design, and polished production-ready UI.",
  },
  {
    title: "Bug Fixing & Optimization",
    description: "Performance tuning, accessibility improvements, and code cleanup for stable deployments.",
  },
  {
    title: "API Development",
    description: "REST API design and integration using Express.js, MongoDB, and secure backend architecture.",
  },
];

const socials = [
  { name: "GitHub", icon: FiGithub, href: "https://github.com/nasirnawaz" },
  { name: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com/in/nasirnawaz" },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%)]" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-slate-200/40 bg-slate-50/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-semibold text-slate-950 dark:text-white">Nasir Nawaz</a>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-slate-950 dark:hover:text-white">About</a>
              <a href="#skills" className="transition hover:text-slate-950 dark:hover:text-white">Skills</a>
              <a href="#projects" className="transition hover:text-slate-950 dark:hover:text-white">Projects</a>
              <a href="#services" className="transition hover:text-slate-950 dark:hover:text-white">Services</a>
              <a href="#contact" className="transition hover:text-slate-950 dark:hover:text-white">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section id="hero" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <AnimatedSection className="max-w-2xl" delay={0}>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                MERN Stack Developer
              </span>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                I build fast, scalable and modern web applications using <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">MERN stack tools</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I build fast, scalable and modern web applications using MERN stack. My focus is on performance, interface polish, and clean, maintainable code for freelance clients who need premium web experiences.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-500/20">
                  View Projects
                  <FiArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-slate-100/75 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-cyan-400/30 hover:bg-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                  Contact Me
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-100/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-3xl dark:border-white/10 dark:bg-white/5" delay={0.15}>
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50/80 p-8 dark:border-white/10 dark:bg-slate-950/80">
                <div className="mb-8 flex items-center justify-center overflow-hidden rounded-[1.75rem] bg-slate-200/80 p-2 dark:bg-slate-900/80">
                  <img src="/profile.jpg" alt="Nasir Nawaz" className="h-72 w-72 rounded-[1.5rem] object-cover object-top shadow-2xl shadow-cyan-500/10" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-300">Featured Services</p>
                <h2 className="mt-5 text-3xl font-semibold text-slate-950 dark:text-white">Premium MERN solutions for ambitious brands.</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Freelance-ready development with clean architecture, fast delivery, and polished user experiences for Fiverr and Upwork clients.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200/70 bg-slate-100/80 p-5 dark:border-white/10 dark:bg-slate-950/70">
                    <p className="text-sm text-cyan-500 dark:text-cyan-300">Frontend</p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">React, Next.js, Tailwind CSS</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200/70 bg-slate-100/80 p-5 dark:border-white/10 dark:bg-slate-950/70">
                    <p className="text-sm text-cyan-500 dark:text-cyan-300">Backend</p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Node.js, Express, MongoDB</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Professional Summary" title="About Me" description="Build modern user experiences with MERN stack and a strong focus on usability, performance, and clean code." />
          <AnimatedSection className="glass-card grid gap-8 p-10 lg:grid-cols-[1.2fr_0.8fr]" delay={0.1}>
            <div>
              <h3 className="text-2xl font-semibold text-white">I help businesses launch strong digital products.</h3>
              <p className="mt-5 text-slate-300 leading-7">
                I am a MERN developer passionate about building full-stack applications with excellent UI/UX, fast loading times, and maintainable architecture. I enjoy creating interfaces that feel polished, intuitive, and ready to impress clients.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Focus</p>
                <p className="mt-3 text-slate-300">Performance, modern interfaces, and clean code patterns.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Approach</p>
                <p className="mt-3 text-slate-300">Client-focused development with fast feedback cycles.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Core Skills" title="Technical Stack" description="A modern MERN toolkit for building scalable and polished applications." />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} icon={skill.icon} title={skill.name} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Featured Work" title="Projects" description="Selected work designed to showcase modern MERN development, responsiveness, and polished UI." />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What I Offer" title="Services" description="Flexible freelance services for frontend, full stack, API, and optimization projects." />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Get In Touch" title="Contact Me" description="Ready to get started? Send a message and let’s discuss your next project." />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatedSection className="glass-card p-10" delay={0.1}>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Let’s connect</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">I’m available for freelance work.</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Whether you need a full website, API integration, or performance tuning, I can deliver modern MERN solutions with reliable communication and quick turnarounds.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@nasirnawaz.dev</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Availability</p>
                  <p>Freelance projects, Upwork, Fiverr, and direct client engagement.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-cyan-500/10 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </AnimatedSection>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Nasir Nawaz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  <Icon className="h-5 w-5" aria-label={item.name} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}



