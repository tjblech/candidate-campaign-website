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

const experience = [
  "Graduate of South Kingstown public schools",
  "Accounting student at the University of Rhode Island, graduating in 2027",
  "Member of the United States Army Reserve",
  "Legislative proofreader for the Rhode Island General Assembly",
  "Member of the South Kingstown Economic Development Committee",
  "Former member of the South Kingstown 250th Anniversary Committee",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#101b32]">
      {/* Announcement bar */}
      <div className="bg-[#b31942] px-4 py-2 text-center text-sm font-semibold tracking-wide text-white">
        Jack Cadman for South Kingstown School Committee
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="group">
            <p className="text-xl font-black uppercase leading-none tracking-tight text-[#0a3161]">
              Jack Cadman
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b31942]">
              School Committee
            </p>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
            <a className="transition hover:text-[#b31942]" href="#priorities">
              Priorities
            </a>
            <a className="transition hover:text-[#b31942]" href="#about">
              About
            </a>
            <a
              href="https://secure.actblue.com/donate/jack-cadman-1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#b31942] px-6 py-3 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8f1434] hover:shadow-lg"
            >
              Donate
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a3161] text-white">
        {/* Decorative stripes */}
        <div className="absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden opacity-20 lg:block">
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
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#ef3340]" />
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
              <a
                href="#about"
                className="rounded-md bg-white px-7 py-4 font-bold uppercase tracking-wide text-[#0a3161] transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Meet Jack
              </a>

              <a
                href="https://secure.actblue.com/donate/jack-cadman-1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-white px-7 py-4 font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0a3161]"
              >
                Support the Campaign
              </a>
            </div>
          </div>

          {/* Candidate photo */}
          <div className="relative">
            <div className="absolute -inset-4 rotate-2 rounded-2xl bg-[#b31942]" />

            <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-slate-200 text-center text-slate-600 shadow-2xl">
              <div className="px-10">
                <p className="text-lg font-bold">Candidate photo goes here</p>
                <p className="mt-2 text-sm">
                  We will replace this box when you have a good portrait.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-md bg-white px-5 py-4 text-[#0a3161] shadow-xl">
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

      {/* Intro */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
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
      <section id="priorities" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
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
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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

      {/* Quote */}
      <section className="bg-[#b31942] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
            A campaign rooted in service
          </p>

          <blockquote className="mt-6 text-3xl font-black leading-tight md:text-5xl">
            “South Kingstown&apos;s students and educators deserve leaders who
            listen, show up, and put the community first.”
          </blockquote>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-[#b31942]">
              About Jack
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Service to country, state, and community
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Jack Cadman is a graduate of South Kingstown public schools and
                an accounting student at the University of Rhode Island,
                graduating in 2027.
              </p>

              <p>
                He serves in the United States Army Reserve and works as a
                legislative proofreader for the Rhode Island General Assembly.
              </p>

              <p>
                Jack believes public service means listening to the community,
                giving back, and making decisions that create opportunity for
                every student.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0a3161] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-200">
              Experience
            </p>

            <ul className="mt-7 space-y-5">
              {experience.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b31942] text-xs font-bold">
                    ✓
                  </span>
                  <span className="leading-7 text-blue-50">{item}</span>
                </li>
              ))}
            </ul>
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
            className="shrink-0 rounded-md bg-[#b31942] px-9 py-4 text-lg font-black uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8f1434] hover:shadow-xl"
          >
            Donate Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061d3a] text-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-2xl font-black uppercase text-white">
                Jack Cadman
              </p>

              <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
                Candidate for South Kingstown School Committee
              </p>
            </div>

            <div className="text-sm text-blue-200 md:text-right">
              <p>© 2026 Jack Cadman Campaign. All rights reserved.</p>
              <p className="mt-2">
                South Kingstown, Rhode Island
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center text-xs uppercase tracking-[0.18em] text-blue-300/75">
              Paid for by Jack Cadman.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}