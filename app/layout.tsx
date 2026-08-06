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
        <Script id="restore-campaign-photos" strategy="afterInteractive">
          {`
            (() => {
              const restorePhotos = () => {
                const hero = document.querySelector('img[alt="Jack Cadman standing in front of an American flag"]');
                if (hero) {
                  hero.removeAttribute('srcset');
                  hero.setAttribute('src', '/images/jack-portrait.jpg');
                  hero.style.width = '100%';
                  hero.style.height = '500px';
                  hero.style.objectFit = 'cover';
                  hero.style.objectPosition = 'center';
                }

                const placeholderText = Array.from(document.querySelectorAll('p')).find(
                  (element) => element.textContent?.trim() === 'About photo goes here'
                );

                const placeholder = placeholderText?.closest('.mt-10');
                if (placeholder && !placeholder.querySelector('img')) {
                  placeholder.className = 'mt-10 space-y-6';
                  placeholder.innerHTML = \`
                    <figure>
                      <div style="overflow:hidden;border-radius:1rem;border:1px solid #e2e8f0;background:#f1f5f9;box-shadow:0 4px 12px rgba(15,23,42,.12)">
                        <img src="/images/jack-group.jpeg" alt="Jack Cadman with community members at a civic event" style="display:block;width:100%;height:auto;object-fit:cover" />
                      </div>
                    </figure>
                    <figure>
                      <div style="overflow:hidden;border-radius:1rem;border:1px solid #e2e8f0;background:#f1f5f9;box-shadow:0 4px 12px rgba(15,23,42,.12)">
                        <img src="/images/jack-community.jpeg" alt="Jack Cadman with a community leader at a local event" style="display:block;width:100%;height:auto;object-fit:cover" />
                      </div>
                    </figure>
                  \`;
                }
              };

              restorePhotos();
              window.addEventListener('load', restorePhotos, { once: true });
              setTimeout(restorePhotos, 500);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
