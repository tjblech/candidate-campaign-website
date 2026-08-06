import Image from "next/image";

const priorities = [
  ["Strong Public Schools", "Support well-funded schools and give students and educators the resources they need."],
  ["Independent Thinking", "Prepare students to evaluate information, think critically, and participate thoughtfully."],
  ["Arts and Athletics", "Protect arts, athletics, and extracurricular opportunities as part of a complete education."],
  ["Community First", "Keep students, teachers, families, and residents at the center of every decision."],
];

const experience = [
  ["South Kingstown Public Schools", "Attended Wakefield Elementary, Broad Rock Middle School, Curtis Corner Middle School, and South Kingstown High School."],
  ["United States Army Reserve", "Developed discipline, teamwork, responsibility, and the ability to perform under pressure."],
  ["Rhode Island General Assembly", "Works as a legislative proofreader, carefully reviewing government policy and legislative documents."],
  ["Economic Development Committee", "Serves the South Kingstown community through local government and civic involvement."],
  ["250th Anniversary Committee", "Helped support the town’s celebration of South Kingstown’s history and community."],
  ["New High School", "Tirelessly advocated for the construction of South Kingstown's new high school."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f2] text-[#101b32]">
      <div className="bg-[#b31942] px-4 py-2 text-center text-sm font-semibold tracking-wide text-white">
        Jack Cadman for South Kingstown School Committee
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top">
            <p className="text-xl font-black uppercase leading-none text-[#0a3161]">Jack Cadman</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b31942]">School Committee</p>
          </a>
          <div className="flex items-center gap-5 text-sm font-bold uppercase tracking-wide">
            <a className="hidden sm:block" href="#priorities">Priorities</a>
            <a className="hidden sm:block" href="#about">About</a>
            <a className="hidden sm:block" href="#contact">Contact</a>
            <a className="rounded-md bg-[#b31942] px-5 py-3 text-white" href="https://secure.actblue.com/donate/jack-cadman-1" target="_blank" rel="noopener noreferrer">Donate</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden bg-[#0a3161] text-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden opacity-20 lg:block" aria-hidden="true">
          <div className="absolute -right-24 top-0 h-full w-[120%] rotate-[-8deg]">
            {Array.from({ length: 11 }).map((_, index) => (
              <div key={index} className={`h-[9.1%] ${index % 2 === 0 ? "bg-white" : "bg-[#b31942]"}`} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              South Kingstown, Rhode Island
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Strong schools.<span className="block text-[#ef3340]">Stronger community.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
              Jack Cadman is running for School Committee to put students, teachers, families, and the South Kingstown community first.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#about" className="rounded-md bg-white px-7 py-4 font-bold uppercase text-[#0a3161] shadow-lg">Meet Jack</a>
              <a href="https://secure.actblue.com/donate/jack-cadman-1" target="_blank" rel="noopener noreferrer" className="rounded-md border-2 border-white px-7 py-4 font-bold uppercase text-white">Support the Campaign</a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rotate-2 rounded-2xl bg-[#b31942]" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white bg-slate-200 shadow-2xl">
              <Image
                src="/images/jack-hero.JPG"
                alt="Jack Cadman standing in front of an American flag"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
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

      <section id="priorities" className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">Jack&apos;s Priorities</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-tight md:text-5xl">A complete education for every student</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {priorities.map(([title, description], index) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-black tracking-[0.2em] text-[#b31942]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-black uppercase">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">About Jack</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">Service to country, state, and community</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src="/images/jack-group.jpeg" alt="Jack Cadman with community members at a civic event" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover object-center" />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">Jack participating in the South Kingstown community.</figcaption>
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src="/images/jack-community.jpeg" alt="Jack Cadman with a community leader at a local event" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover object-center" />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">Building relationships through local civic involvement.</figcaption>
              </figure>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {experience.map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-[#f7f7f2] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a3161] text-sm font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 text-xl font-black uppercase text-[#0a3161]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0a3161] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-red-300">Contact the Campaign</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">Connect with Jack</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">Have a question, want to share your thoughts, or want to get involved? Reach out to the campaign.</p>
            <a href="mailto:JackLCadman@gmail.com" className="mt-8 inline-block rounded-md bg-white px-7 py-4 font-bold text-[#0a3161] shadow-lg">JackLCadman@gmail.com</a>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">Follow the Campaign</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href="https://x.com/JackLCadman" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/20 px-5 py-4 font-bold">X</a>
              <a href="https://www.instagram.com/jacklcadman/" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/20 px-5 py-4 font-bold">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#061d3a] text-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-2xl font-black uppercase text-white">Jack Cadman</p>
          <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-red-300">Candidate for South Kingstown School Committee</p>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-blue-300/75 md:flex-row md:justify-between">
            <p>© 2026 Jack Cadman Campaign. All rights reserved.</p>
            <p className="font-semibold uppercase tracking-[0.16em]">Paid for by Friends of Jack Cadman.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
