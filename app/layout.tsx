import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Jack Cadman is running for South Kingstown School Committee to support strong public schools, independent thinking, arts, athletics, and community-centered leadership.",
};

const campaignUpdates = String.raw`
(() => {
  const applyUpdates = () => {
    document.querySelectorAll("a").forEach((link) => {
      if (link.textContent?.includes("JackCadman@JackLCadman.com")) {
        link.textContent = link.textContent.replace(
          "JackCadman@JackLCadman.com",
          "JackLCadman@gmail.com"
        );
      }

      const href = link.getAttribute("href");
      if (href?.includes("JackCadman@JackLCadman.com")) {
        link.setAttribute(
          "href",
          href.replace("JackCadman@JackLCadman.com", "JackLCadman@gmail.com")
        );
      }
    });

    document.querySelectorAll("h3").forEach((heading) => {
      if (heading.textContent?.trim() !== "Boy Scouts") return;

      heading.textContent = "New High School";
      const card = heading.closest("article");
      const description = card?.querySelector("p.mt-3");

      if (description) {
        description.textContent =
          "Tirelessly advocated for the construction of South Kingstown's new high school.";
      }
    });

    const placeholderTitle = Array.from(document.querySelectorAll("p")).find(
      (element) => element.textContent?.trim() === "About photo goes here"
    );

    if (placeholderTitle) {
      const placeholder = placeholderTitle.parentElement?.parentElement;

      if (placeholder && !document.getElementById("campaign-photo-gallery")) {
        const gallery = document.createElement("div");
        gallery.id = "campaign-photo-gallery";
        gallery.className = "mt-10 space-y-6";
        gallery.innerHTML = [
          '<figure>',
          '<div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">',
          '<img src="/images/jack-group.jpeg" alt="Jack Cadman with community members at a civic event" class="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.02]" />',
          '</div>',
          '<figcaption class="mt-3 text-sm leading-6 text-slate-500">Jack participating in the South Kingstown community.</figcaption>',
          '</figure>',
          '<figure>',
          '<div class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">',
          '<img src="/images/jack-community.jpeg" alt="Jack Cadman with a community leader at a local event" class="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.02]" />',
          '</div>',
          '<figcaption class="mt-3 text-sm leading-6 text-slate-500">Building relationships through local civic involvement.</figcaption>',
          '</figure>'
        ].join("");

        placeholder.replaceWith(gallery);
      }
    }
  };

  applyUpdates();
  window.setTimeout(applyUpdates, 100);
  window.setTimeout(applyUpdates, 500);
  window.setTimeout(applyUpdates, 1500);
})();
`;

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
      <body className="min-h-full flex flex-col">{children}</body>
      <Script id="campaign-content-updates" strategy="afterInteractive">
        {campaignUpdates}
      </Script>
    </html>
  );
}
