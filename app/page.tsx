"use client";

import { useState } from "react";

const priorities = [
  {
    number: "01",
    title: "Strong Public Schools",
    description:
      "Supporting well-funded public schools and giving students and educators the resources they need to succeed.",
  },
  {
    number: "02",
    title: "Independent Thinking",
    description:
      "Preparing students to evaluate information, think critically, and participate thoughtfully in their community.",
  },
  {
    number: "03",
    title: "Arts and Athletics",
    description:
      "Protecting arts, athletics, and extracurricular opportunities as essential parts of a complete education.",
  },
  {
    number: "04",
    title: "Community First",
    description:
      "Keeping students, teachers, families, and South Kingstown residents at the center of every decision.",
  },
];

const quickFacts = [
  {
    title: "South Kingstown Graduate",
    description: "Educated in South Kingstown public schools",
  },
  {
    title: "Army Reserve",
    description: "Serving in the United States Army Reserve",
  },
  {
    title: "URI Student",
    description: "Studying accounting and graduating in 2027",
  },
  {
    title: "Public Service",
    description: "Experience in local and state government",
  },
];

const experience = [
  {
    title: "South Kingstown Public Schools",
    description:
      "Attended Wakefield Elementary School, Broad Rock Middle School, Curtis Corner Middle School, and South Kingstown High School.",
  },
  {
    title: "United States Army Reserve",
    description:
      "Developed discipline, teamwork, responsibility, and the ability to perform under pressure.",
  },
  {
    title: "Rhode Island General Assembly",
    description:
      "Works as a legislative proofreader, carefully reviewing government policy and legislative documents.",
  },
  {
    title: "Economic Development Committee",
    description:
      "Serves the South Kingstown community through local government and civic involvement.",
  },
  {
    title: "250th Anniversary Committee",
    description:
      "Helped support the town’s celebration of South Kingstown’s history and community.",
  },
  {
    title: "Boy Scouts",
    description:
      "Participated in Boy Scouts with Troop 1 in Wakefield while growing up in South Kingstown.",
  },
];

const values = [
  {
    title: "Service",
    description:
      "Approaching public office as a responsibility to listen, contribute, and serve the community.",
  },
  {
    title: "Integrity",
    description:
      "Making thoughtful decisions with honesty, transparency, and attention to detail.",
  },
  {
    title: "Opportunity",
    description:
      "Supporting academics, arts, athletics, and programs that help every student find a path to success.",
  },
  {
    title: "Community",
    description:
      "Keeping students, educators, families, and residents involved in the decisions that affect them.",
  },
];

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:ring-offset-2";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f2] text-[#101b32]">
      {/* Announcement bar */}
      <div className="bg-[#b31942] px-4 py-2 text-center text-sm font-semibold tracking-wide text-white">
        Jack Cadman for South Kingstown School Committee
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <nav
          className="mx-auto max-w-7xl px-6"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between py-4">
            <a
              href="#top"
              className={`group rounded-sm ${focusClasses}`}
              onClick={closeMenu}
            >
              <p className="text-xl font-black uppercase leading-none tracking-tight text-[#0a3161]">
                Jack Cadman
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b31942]">
                School Committee
              </p>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
              <a
                className={`rounded-sm transition hover:text-[#b31942] ${focusClasses}`}
                href="#priorities"
              >
                Priorities
              </a>

              <a
                className={`rounded-sm transition hover:text-[#b31942] ${focusClasses}`}
                href="#about"
              >
                About
              </a>

              <a
                className={`rounded-sm transition hover:text-[#b31942] ${focusClasses}`}
                href="#contact"
              >
                Contact
              </a>

              <a
                href="https://secure.actblue.com/donate/jack-cadman-1"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-md bg-[#b31942] px-6 py-3 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8f1434] hover:shadow-lg ${focusClasses}`}
              >
                Donate
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-[#0a3161] transition hover:bg-slate-100 md:hidden ${focusClasses}`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>

              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full bg-current transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <div className="border-t border-slate-200 pb-5 pt-3 md:hidden">
              <div className="flex flex-col gap-2 text-sm font-bold uppercase tracking-wide">
                <a
                  href="#priorities"
                  onClick={closeMenu}
                  className={`rounded-md px-4 py-3 transition hover:bg-slate-100 hover:text-[#b31942] ${focusClasses}`}
                >
                  Priorities
                </a>

                <a
                  href="#about"
                  onClick={closeMenu}
                  className={`rounded-md px-4 py-3 transition hover:bg-slate-100 hover:text-[#b31942] ${focusClasses}`}
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className={`rounded-md px-4 py-3 transition hover:bg-slate-100 hover:text-[#b31942] ${focusClasses}`}
                >
                  Contact
                </a>

                <a
                  href="https://secure.actblue.com/donate/jack-cadman-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className={`mt-2 rounded-md bg-[#b31942] px-4 py-3 text-center text-white transition hover:bg-[#8f1434] ${focusClasses}`}
                >
                  Donate
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative scroll-mt-28 overflow-hidden bg-[#0a3161] text-white"
      >
        {/* Decorative stars */}
        <div
          className="pointer-events-none absolute left-0 top-0 grid grid-cols-4 gap-8 p-8 text-xl text-white/10"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>

        {/* Decorative stripes */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden opacity-20 lg:block"
          aria-hidden="true"
        >
          <div className="absolute -right-24 top-0 h-full w-[120%] rotate-[-8deg]">
            {Array.from({ length: 11 }).map((_, index) => (
              <div
                key={index}
                className={`h-[9.1%] ${
                  index % 2 === 0 ? "bg-white" : "bg-[#b31942]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-rise">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#ef3340]" />
              South Kingstown, Rhode Island
            </div>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Strong schools.
              <span className="block text-[#ef3340]">
                Stronger community.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
              Jack Cadman is running for School Committee to put students,
              teachers, families, and the South Kingstown community first.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className={`rounded-md bg-white px-7 py-4 font-bold uppercase tracking-wide text-[#0a3161] shadow-lg transition hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl ${focusClasses}`}
              >
                Meet Jack
              </a>

              <a
                href="https://secure.actblue.com/donate/jack-cadman-1"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-md border-2 border-white px-7 py-4 font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0a3161] ${focusClasses}`}
              >
                Support the Campaign
              </a>
            </div>
          </div>

          {/* Candidate photo */}
          <div className="relative animate-rise-delayed">
            <div
              className="absolute -inset-4 rotate-2 rounded-2xl bg-[#b31942]"
              aria-hidden="true"
            />

            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-slate-200 text-center text-slate-600 shadow-2xl">
              <div className="px-10">
                <p className="text-lg font-bold">Candidate photo goes here</p>

                <p className="mt-2 text-sm">
                  Replace this box when you have a campaign portrait.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-md bg-white px-5 py-4 text-[#0a3161] shadow-xl sm:-left-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b31942]">
                Candidate for
              </p>

              <p className="mt-1 text-lg font-black uppercase">
                School Committee
              </p>
            </div>
          </div>
        </div>

        <div className="h-3 bg-[#b31942]" />
      </section>

      {/* Quick facts */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact, index) => (
            <article
              key={fact.title}
              className="group bg-white px-6 py-9 text-center transition hover:bg-slate-50"
            >
              <p className="text-sm font-black tracking-[0.2em] text-[#b31942]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="mt-4 text-sm font-black uppercase tracking-[0.15em] text-[#0a3161]">
                {fact.title}
              </h2>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-600">
                {fact.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-slate-200 bg-[#f7f7f2]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
          <div className="border-l-4 border-[#b31942] pl-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b31942]">
              Public Education
            </p>

            <p className="mt-2 font-semibold">
              Strong schools create strong communities.
            </p>
          </div>

          <div className="border-l-4 border-[#0a3161] pl-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0a3161]">
              Opportunity
            </p>

            <p className="mt-2 font-semibold">
              Academics, arts, athletics, and extracurriculars matter.
            </p>
          </div>

          <div className="border-l-4 border-[#b31942] pl-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b31942]">
              Community
            </p>

            <p className="mt-2 font-semibold">
              Students, educators, and families deserve a voice.
            </p>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section
        id="priorities"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">
              Jack&apos;s Priorities
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              A complete education for every student
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              South Kingstown schools should help students achieve
              academically, explore their interests, think independently, and
              become engaged members of their community.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {priorities.map((priority) => (
              <article
                key={priority.title}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b31942] transition-all group-hover:w-2" />

                <p className="text-sm font-black tracking-[0.2em] text-[#b31942]">
                  {priority.number}
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                  {priority.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {priority.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign statement */}
      <section className="bg-[#b31942] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
            A campaign rooted in service
          </p>

          <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
            South Kingstown&apos;s students and educators deserve leaders who
            listen, show up, and put the community first.
          </h2>
        </div>
      </section>

      {/* Why Jack is running */}
      <section className="bg-[#061d3a] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-red-300">
              Why I&apos;m Running
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Giving back to the schools and community that shaped me
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-blue-100">
            <p>
              South Kingstown&apos;s public schools gave Jack the foundation
              to pursue higher education, serve his country, and become
              involved in state and local government.
            </p>

            <p>
              He is running for School Committee because he believes every
              student deserves a strong academic education as well as access
              to arts, athletics, extracurricular activities, and opportunities
              to develop independent judgment.
            </p>

            <p>
              Jack wants to bring a careful, service-oriented approach to the
              committee while ensuring that students, educators, families, and
              community members are heard.
            </p>

            <p className="text-sm font-semibold italic text-blue-300">
              Jack should review and approve this section before the site goes
              live so it reflects his voice and reasons for running.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">
              About Jack
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Service to country, state, and community
            </h2>

            {/* About photo placeholder */}
            <div className="mt-10 flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-center text-slate-500 shadow-sm">
              <div className="px-8">
                <p className="font-bold text-[#0a3161]">About photo goes here</p>
                <p className="mt-2 text-sm">
                  Use a local, military, community-service, or casual campaign photo.
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Jack&apos;s background connects local education, military service,
              higher education, and hands-on experience in government.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {experience.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-[#f7f7f2] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0a3161]/30 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a3161] text-sm font-black text-white transition group-hover:bg-[#b31942]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-black uppercase leading-tight text-[#0a3161]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f1f3f5]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">
              Guiding Values
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
              A thoughtful approach to public service
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border-t-4 border-[#b31942] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-black uppercase text-[#0a3161]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#0a3161] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-red-300">
              Contact the Campaign
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Connect with Jack
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
              Have a question, want to share your thoughts about South
              Kingstown schools, or want to get involved? Reach out to the
              campaign.
            </p>

            <a
              href="mailto:JackCadman@JackLCadman.com"
              className={`mt-8 inline-block break-all rounded-md bg-white px-7 py-4 font-bold text-[#0a3161] shadow-lg transition hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl ${focusClasses}`}
            >
              JackCadman@JackLCadman.com
            </a>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">
              Follow the Campaign
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="https://x.com/JackLCadman"
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-md border border-white/20 px-5 py-4 font-bold transition hover:-translate-y-1 hover:bg-white hover:text-[#0a3161] ${focusClasses}`}
              >
                <span className="flex items-center justify-between">
                  X
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </span>
              </a>

              <a
                href="https://www.instagram.com/jacklcadman/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-md border border-white/20 px-5 py-4 font-bold transition hover:-translate-y-1 hover:bg-white hover:text-[#0a3161] ${focusClasses}`}
              >
                <span className="flex items-center justify-between">
                  Instagram
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </span>
              </a>

              <a
                href="mailto:JackCadman@JackLCadman.com?subject=Volunteer%20with%20the%20Jack%20Cadman%20Campaign"
                className={`group rounded-md border border-white/20 px-5 py-4 font-bold transition hover:-translate-y-1 hover:bg-white hover:text-[#0a3161] sm:col-span-2 ${focusClasses}`}
              >
                <span className="flex items-center justify-between">
                  Volunteer with the Campaign
                  <span
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="relative overflow-hidden bg-[#f1f3f5]">
        <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-[#b31942] via-white to-[#0a3161]" />

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-20 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">
              Join the Campaign
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Help build a stronger future for South Kingstown
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Your support helps Jack reach more voters and share his vision
              for strong, community-centered public schools.
            </p>
          </div>

          <a
            href="https://secure.actblue.com/donate/jack-cadman-1"
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 rounded-md bg-[#b31942] px-9 py-4 text-lg font-black uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8f1434] hover:shadow-xl ${focusClasses}`}
          >
            Donate Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061d3a] text-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-2xl font-black uppercase text-white">
                Jack Cadman
              </p>

              <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
                Candidate for South Kingstown School Committee
              </p>

              <p className="mt-5 max-w-md text-sm leading-6 text-blue-200">
                Supporting strong public schools, educational opportunity, and
                community-centered leadership.
              </p>
            </div>

            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"
              aria-label="Footer navigation"
            >
              <a
                href="#priorities"
                className={`rounded-sm transition hover:text-white ${focusClasses}`}
              >
                Priorities
              </a>

              <a
                href="#about"
                className={`rounded-sm transition hover:text-white ${focusClasses}`}
              >
                About
              </a>

              <a
                href="#contact"
                className={`rounded-sm transition hover:text-white ${focusClasses}`}
              >
                Contact
              </a>

              <a
                href="https://secure.actblue.com/donate/jack-cadman-1"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-sm transition hover:text-white ${focusClasses}`}
              >
                Donate
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-blue-300/75 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Jack Cadman Campaign. All rights reserved.</p>

            <p className="font-semibold uppercase tracking-[0.16em]">
              Paid for by Friends of Jack Cadman.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}