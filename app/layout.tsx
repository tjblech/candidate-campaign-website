import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack Cadman for South Kingstown School Committee",
  description:
    "Official campaign website of Jack Cadman, candidate for South Kingstown School Committee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Script id="campaign-content-updates" strategy="afterInteractive">
          {`
            (() => {
              const applyUpdates = () => {
                const heroPlaceholder = Array.from(document.querySelectorAll('p')).find(
                  (el) => el.textContent?.trim() === 'Candidate photo goes here'
                );

                const heroContainer = heroPlaceholder?.closest('.relative.flex');
                if (heroContainer) {
                  heroContainer.innerHTML = '<img src="/images/jack-hero.JPG" alt="Jack Cadman standing in front of an American flag" style="display:block;width:100%;height:500px;object-fit:cover;object-position:center" />';
                  heroContainer.className = 'relative overflow-hidden rounded-2xl border-4 border-white bg-slate-200 shadow-2xl';
                }

                const aboutPlaceholder = Array.from(document.querySelectorAll('p')).find(
                  (el) => el.textContent?.trim() === 'About photo goes here'
                );

                const aboutBlock = aboutPlaceholder?.closest('.mt-10');
                if (aboutBlock) {
                  aboutBlock.className = 'mt-10 grid gap-5 sm:grid-cols-2';
                  aboutBlock.innerHTML = \`
                    <figure>
                      <div style="overflow:hidden;border-radius:1rem;border:1px solid #e2e8f0;background:#f1f5f9;box-shadow:0 4px 12px rgba(15,23,42,.12)">
                        <img src="/images/jack-group.jpeg" alt="Jack Cadman with community members at a civic event" style="display:block;width:100%;aspect-ratio:4/3;object-fit:cover" />
                      </div>
                      <figcaption style="margin-top:.75rem;font-size:.875rem;line-height:1.5rem;color:#64748b">Jack with community members at a local civic event.</figcaption>
                    </figure>
                    <figure>
                      <div style="overflow:hidden;border-radius:1rem;border:1px solid #e2e8f0;background:#f1f5f9;box-shadow:0 4px 12px rgba(15,23,42,.12)">
                        <img src="/images/jack-community.jpeg" alt="Jack Cadman with a community leader at a local event" style="display:block;width:100%;aspect-ratio:4/3;object-fit:cover;object-position:center 30%" />
                      </div>
                      <figcaption style="margin-top:.75rem;font-size:.875rem;line-height:1.5rem;color:#64748b">Jack connecting with local leaders in the community.</figcaption>
                    </figure>
                  \`;
                }

                document.querySelectorAll('h3').forEach((heading) => {
                  if (heading.textContent?.trim() === 'Boy Scouts') {
                    heading.textContent = 'New High School';
                    const description = heading.nextElementSibling;
                    if (description) {
                      description.textContent = "Tirelessly advocated for the construction of South Kingstown's new high school.";
                    }
                  }
                });

                document.querySelectorAll('a').forEach((link) => {
                  if (link.textContent?.includes('JackCadman@JackLCadman.com')) {
                    link.textContent = 'JackLCadman@gmail.com';
                    link.setAttribute('href', 'mailto:JackLCadman@gmail.com');
                  }
                });
              };

              applyUpdates();
              window.addEventListener('load', applyUpdates, { once: true });
              setTimeout(applyUpdates, 300);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
