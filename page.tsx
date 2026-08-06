"use client";

import Image from "next/image";
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
    title: "New High School",
    description:
      "Tirelessly advocated for the construction of South Kingstown's new high school.",
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
      <div className="bg-[#b31942] px-4 py-2 text-center text-sm font-semibold tracking-wide text-white">
        Jack Cadman for South Kingstown School Committee
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto max-w-7xl px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between py-4">
            <a href="#top" className={`rounded-sm ${focusClasses}`} onClick={closeMenu}>
              <p className="text-xl font-black uppercase leading-none tracking-tight text-[#0a3161]">
                Jack Cadman
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b31942]">
                School Committee
              </p>
            </a>

            <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
              <a href="#priorities" className={`rounded-sm transition hover:text-[#b31942] ${focusClasses}`}>
                Priorities
              </a>
              <a href="#about" className={`rounded-sm transition hover:text-[#b31942] ${focusClasses}`}>
                About
              </a>
              <a href="#contact" className={`rounded-sm transition hover:text-[#b31942] ${focusClasses}`}>
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

            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-[#0a3161] md:hidden ${focusClasses}`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span className={`h-0.5 w-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-slate-200 pb-5 pt-3 md:hidden">
              <div className="flex flex-col gap-2 text-sm font-bold uppercase tracking-wide">
                <a href="#priorities" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-slate-100">
                  Priorities
                </a>
                <a href="#about" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-slate-100">
                  About
                </a>
                <a href="#contact" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-slate-100">
                  Contact
                </a>
                <a
                  href="https://secure.actblue.com/donate/jack-cadman-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-2 rounded-md bg-[#b31942] px-4 py-3 text-center text-white"
                >
                  Donate
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="top" className="relative scroll-mt-28 overflow-hidden bg-[#0a3161] text-white">
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              South Kingstown, Rhode Island
            </div>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Strong schools.
              <span className="block text-[#ef3340]">Stronger community.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
              Jack Cadman is running for School Committee to put students,
              teachers, families, and the South Kingstown community first.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#about" className="rounded-md bg-white px-7 py-4 font-bold uppercase tracking-wide text-[#0a3161] shadow-lg">
                Meet Jack
              </a>
              <a
                href="https://secure.actblue.com/donate/jack-cadman-1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-white px-7 py-4 font-bold uppercase tracking-wide text-white"
              >
                Support the Campaign
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rotate-2 rounded-2xl bg-[#b31942]" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-200 shadow-2xl">
              <Image
                src="/images/jack-community.jpeg"
                alt="Jack Cadman at a community event"
                width={1200}
                height={1500}
                priority
                className="h-[500px] w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-md bg-white px-5 py-4 text-[#0a3161] shadow-xl sm:-left-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b31942]">Candidate for</p>
              <p className="mt-1 text-lg font-black uppercase">School Committee</p>
            </div>
          </div>
        </div>
        <div className="h-3 bg-[#b31942]" />
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact, index) => (
            <article key={fact.title} className="bg-white px-6 py-9 text-center">
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

      <section id="priorities" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">Jack&apos;s Priorities</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              A complete education for every student
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              South Kingstown schools should help students achieve academically,
              explore their interests, think independently, and become engaged
              members of their community.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {priorities.map((priority) => (
              <article key={priority.title} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b31942]" />
                <p className="text-sm font-black tracking-[0.2em] text-[#b31942]">{priority.number}</p>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">{priority.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{priority.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section id="about" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">About Jack</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Service to country, state, and community
            </h2>

            <div className="mt-10 space-y-6">
              <figure>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/images/jack-group.jpeg"
                    alt="Jack Cadman with community members at a civic event"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </figure>

              <figure>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src="/images/jack-community.jpeg"
                    alt="Jack Cadman with a community leader at a local event"
                    width={1200}
                    height={1500}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </figure>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Jack&apos;s background connects local education, military service,
              higher education, and hands-on experience in government.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {experience.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-[#f7f7f2] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a3161] text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-black uppercase leading-tight text-[#0a3161]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f3f5]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">Guiding Values</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
              A thoughtful approach to public service
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border-t-4 border-[#b31942] bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black uppercase text-[#0a3161]">{value.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#0a3161] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-red-300">Contact the Campaign</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">Connect with Jack</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
              Have a question, want to share your thoughts about South Kingstown
              schools, or want to get involved? Reach out to the campaign.
            </p>
            <a
              href="mailto:JackLCadman@gmail.com"
              className="mt-8 inline-block break-all rounded-md bg-white px-7 py-4 font-bold text-[#0a3161] shadow-lg"
            >
              JackLCadman@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">Follow the Campaign</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href="https://x.com/JackLCadman" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/20 px-5 py-4 font-bold">
                X
              </a>
              <a href="https://www.instagram.com/jacklcadman/" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/20 px-5 py-4 font-bold">
                Instagram
              </a>
              <a
                href="mailto:JackLCadman@gmail.com?subject=Volunteer%20with%20the%20Jack%20Cadman%20Campaign"
                className="rounded-md border border-white/20 px-5 py-4 font-bold sm:col-span-2"
              >
                Volunteer with the Campaign
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#061d3a] text-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-2xl font-black uppercase text-white">Jack Cadman</p>
          <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
            Candidate for South Kingstown School Committee
          </p>
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
