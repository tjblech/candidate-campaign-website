const issues = [
  {
    title: "Strong Public Schools",
    description:
      "Supporting well-funded public schools and ensuring students and educators have the resources they need to succeed.",
  },
  {
    title: "Critical & Independent Thinking",
    description:
      "Preparing students to evaluate information, think independently, and participate thoughtfully in their communities.",
  },
  {
    title: "A Complete Education",
    description:
      "Protecting arts, athletics, and extracurricular opportunities alongside strong academic programs.",
  },
  {
    title: "Community First",
    description:
      "Keeping students, teachers, families, and community members at the center of every decision.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            Jack Cadman
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#issues" className="hover:text-blue-700">
              Priorities
            </a>
            <a
              href="https://secure.actblue.com/donate/jack-cadman-1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800"
            >
              Donate
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-blue-300">
              Candidate for South Kingstown School Committee
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Jack Cadman
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">
              Putting students, teachers, families, and the South Kingstown
              community first.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Meet Jack
              </a>

              <a
                href="https://secure.actblue.com/donate/jack-cadman-1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
              >
                Support the Campaign
              </a>
            </div>
          </div>

          {/* Candidate photo placeholder */}
          <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-slate-700 bg-slate-900 px-8 text-center text-slate-400">
            Candidate photo will go here
          </div>
        </div>
      </section>

      {/* Issues */}
      <section id="issues" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
            Priorities
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Building stronger schools together
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Jack believes every student deserves an education that supports
            academic achievement, creativity, personal growth, and community
            involvement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {issues.map((issue) => (
            <article
              key={issue.title}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">{issue.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">
                {issue.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">
              About Jack
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              A commitment to service and community
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Jack Cadman is a graduate of South Kingstown public schools and
              an accounting student at the University of Rhode Island,
              graduating in 2027.
            </p>

            <p>
              He serves as a member of the United States Army Reserve and works
              as a legislative proofreader for the Rhode Island General
              Assembly.
            </p>

            <p>
              Jack has also served South Kingstown as a member of the Economic
              Development Committee and the town&apos;s 250th Anniversary
              Committee. His campaign is rooted in service, giving back, and
              ensuring community voices are heard.
            </p>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-blue-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Help support Jack’s campaign</h2>
            <p className="mt-3 text-lg text-blue-100">
              Join the effort to put students, educators, and the South
              Kingstown community first.
            </p>
          </div>

          <a
            href="https://secure.actblue.com/donate/jack-cadman-1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Donate
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
          <p>© 2026 Friends of Jack Cadman. All rights reserved.</p>

          <p className="mt-4 inline-block border border-slate-500 px-4 py-2 text-xs uppercase tracking-wide text-slate-300">
            Paid for by Friends of Jack Cadman
          </p>
        </div>
      </footer>
    </main>
  );
}