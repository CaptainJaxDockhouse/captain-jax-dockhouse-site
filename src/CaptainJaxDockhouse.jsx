import React from "react";
import logoImg from "./assets/logo.jpg";

// One-page marketing site for a neighborhood dockhouse bar.
// Tech: React + Tailwind CSS. No external UI deps required.
// Edit the CONTENT block below to customize copy, hours, and menu.

const CONTENT = {
  brand: "Captain Jax Dockhouse",
  tagline: "Ortega River bar • Nautical vibes",
  subtagline: "Neighborhood dockhouse bar at Ortega — cold drinks, live vibes, and weekend hangouts in Jacksonville, FL.",
  ctaPrimary: "View Menu",
  ctaSecondary: "Book an Event",
  phone: "(904) 384-6447",
  email: "info@captainjaxdockhouse.com",
  address: "3326 Lake Shore Blvd, Jacksonville, FL 32210",
  mapEmbed:
    "https://www.google.com/maps?q=3326+Lake+Shore+Blvd,+Jacksonville,+FL+32210&output=embed",
  hours: [
    { day: "Mon", open: "Closed", close: "" },
    { day: "Tue", open: "Closed", close: "" },
    { day: "Wed", open: "Closed", close: "" },
    { day: "Thu", open: "4:00 PM", close: "9:00 PM" },
    { day: "Fri", open: "4:00 PM", close: "9:00 PM" },
    { day: "Sat", open: "2:00 PM", close: "9:00 PM" },
    { day: "Sun", open: "2:00 PM", close: "9:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/Captainjaxdockhouse",
    facebook: "https://facebook.com/CaptainJaxDockhouse",
    tiktok: "https://tiktok.com/@yourhandle",
  },
  highlights: [
    "Cold Brews • River Views • Local Crews",
    "Weekend hours: Thu–Fri 4–9, Sat–Sun 2–9",
    "Live music & game-day watch parties (check Events)",
  ],
  specials: [
    { title: "Happy Hour", desc: "Mon–Fri, 4–6p • $5 drafts & wells" },
    { title: "Dockside Trivia", desc: "Wednesdays • 7p" },
    { title: "Live Music", desc: "Fri & Sat • 8–11p" },
  ],
  menu: {
    drinks: [
      { name: "Captain's Rum Punch", desc: "dark rum • pineapple • lime", price: "$10" },
      { name: "Ortega Old Fashioned", desc: "bourbon • orange • bitters", price: "$12" },
      { name: "Riverwalk Rita", desc: "tequila • triple sec • lime", price: "$11" },
      { name: "Rotating Drafts", desc: "ask about local taps", price: "$6+" },
    ],
    bites: [
      { name: "Dockhouse Wings", desc: "dry rub or buffalo", price: "$12" },
      { name: "Shrimp Tacos", desc: "cabbage • chipotle crema", price: "$13" },
      { name: "Pretzel & Beer Cheese", desc: "shareable", price: "$9" },
      { name: "Fish & Chips", desc: "crispy cod • malt vinegar", price: "$15" },
    ],
  },
  events: [
    { date: "Oct 24", title: "Acoustic on the Dock", desc: "Local duo • 8–11p" },
    { date: "Oct 26", title: "Sunday Fútbol", desc: "$5 mimosas & bloody marys" },
    { date: "Oct 31", title: "Costume Night", desc: "Prizes for best nautical fit" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83",
    "https://images.unsplash.com/photo-1515706265030-41fd2a6362f8",
    "https://images.unsplash.com/photo-1514361892635-6b07e31e77bf",
    "https://images.unsplash.com/photo-1514362545857-3bc16bcb87fb",
    "https://images.unsplash.com/photo-1524594227084-6a282f47c6f5",
    "https://images.unsplash.com/photo-1521017432531-fbd92d3f3c08",
  ],
};

function Anchor({ href, children }) {
  return (
    <a
      href={href}
      className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

function Icon({ name, className = "w-5 h-5" }) {
  // Simple inline SVGs to avoid external deps
  const common = {
    className: `${className} inline-block align-middle`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81 19.86 19.86 0 0 1 .08 1.18 2 2 0 0 1 2.06-.99h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L6.1 6.37a16 16 0 0 0 7.53 7.53l.93-1.11a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6a2 2 0 0 1 1.72 2v3Z" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 4h16v16H4z" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    default:
      return null;
  }
}

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>
);

export default function CaptainJaxDockhouse() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logoImg} alt="Captain Jax Dockhouse logo" className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-700 bg-white" />
            <span className="font-bold text-lg tracking-wide">
              {CONTENT.brand}
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-amber-300">About</a>
            <a href="#menu" className="hover:text-amber-300">Menu</a>
            <a href="#events" className="hover:text-amber-300">Events</a>
            <a href="#gallery" className="hover:text-amber-300">Gallery</a>
            <a href="#visit" className="hover:text-amber-300">Visit</a>
            <a href="#contact" className="hover:text-amber-300">Contact</a>
            <a href="tel:+19045550123" className="bg-amber-500 text-slate-950 px-4 py-2 rounded-xl font-semibold hover:bg-amber-400 transition">Call</a>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-800"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open Menu"
          >
            <Icon name="menu" />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900/90">
            <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3 text-sm">
              {[
                ["About", "#about"],
                ["Menu", "#menu"],
                ["Events", "#events"],
                ["Gallery", "#gallery"],
                ["Visit", "#visit"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="py-2 hover:text-amber-300" onClick={() => setMobileOpen(false)}>
                  {label}
                </a>
              ))}
              <a href={`tel:${CONTENT.phone}`} className="mt-2 bg-amber-500 text-slate-950 px-4 py-2 rounded-xl font-semibold text-center">Call</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <Section id="home" className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-800/30 via-slate-900 to-slate-950" />
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {CONTENT.brand}
            </h1>
            <p className="mt-4 text-teal-200 text-lg md:text-xl">
              {CONTENT.tagline}
            </p>
            <p className="mt-2 text-slate-300 max-w-prose">
              {CONTENT.subtagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="px-5 py-3 rounded-2xl bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition">
                {CONTENT.ctaPrimary}
              </a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-slate-700 hover:border-amber-400">
                {CONTENT.ctaSecondary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><Icon name="phone" /> {CONTENT.phone}</span>
              <span className="flex items-center gap-2"><Icon name="mail" /> {CONTENT.email}</span>
              <span className="flex items-center gap-2"><Icon name="map" /> {CONTENT.address}</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-800">
              <img
                src="https://images.unsplash.com/photo-1497997092403-f091fcf5b6c2"
                alt="Dockside bar vibes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 backdrop-blur shadow-xl">
              <p className="text-sm text-slate-300">Now booking <span className="text-amber-300 font-semibold">private parties</span> &
                <span className="text-amber-300 font-semibold"> game days</span>!</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SPECIALS STRIP */}
      <div className="bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 grid md:grid-cols-3 gap-4">
          {CONTENT.specials.map((s, i) => (
            <div key={i} className="text-center rounded-xl p-3 bg-slate-900/40 ring-1 ring-slate-800">
              <p className="font-semibold text-amber-300">{s.title}</p>
              <p className="text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about">
        <div className="max-w-6xl mx_auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">A neighborhood dockhouse bar</h2>
            <p className="mt-4 text-slate-300">
              Born from Jacksonville's river culture, {CONTENT.brand} pours classic drinks,
              Florida craft beers, and coastal bites—no dress code, just good vibes.
              Pull up by car or after a day on the water and make yourself at home.
            </p>
            <p className="mt-3 text-slate-400">
              Hosting a birthday, watch party, or company social? Reserve our back room or patio.
              Flexible bar packages and catering partners available.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700">Request Event Info</a>
              <a href="#events" className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline">See What's On</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["photo-1514361892635-6b07e31e77bf","photo-1514362545857-3bc16bcb87fb","photo-1528715471579-d1bcf0ba5e83"].map((id) => (
              <img key={id} src={`https://images.unsplash.com/${id}`} alt="Bar scene" className="rounded-2xl h-40 md:h-56 w-full object-cover ring-1 ring-slate-800" />
            ))}
          </div>
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section id="highlights" className="bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Highlights</h2>
          <ul className="mt-6 grid md:grid-cols-3 gap-4">
            {CONTENT.highlights.map((h, i) => (
              <li key={i} className="rounded-xl p-4 bg-slate-900/60 ring-1 ring-slate-800 text-slate-300">{h}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* MENU */}
      <Section id="menu" className="bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Menu</h2>
          <p className="text-slate-400 mt-2">Highlights—ask for the full list at the bar.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-amber-300">Drinks</h3>
              <ul className="mt-4 grid gap-4">
                {CONTENT.menu.drinks.map((d) => (
                  <li key={d.name} className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
                    <div>
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-sm text-slate-400">{d.desc}</p>
                    </div>
                    <span className="text-amber-300 whitespace-nowrap">{d.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-amber-300">Bites</h3>
              <ul className="mt-4 grid gap-4">
                {CONTENT.menu.bites.map((d) => (
                  <li key={d.name} className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
                    <div>
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-sm text-slate-400">{d.desc}</p>
                    </div>
                    <span className="text-amber-300 whitespace-nowrap">{d.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 text-sm text-slate-400">
            Have dietary needs? Ask about NA cocktails, gluten-free, and vegetarian options.
          </div>
        </div>
      </Section>

      {/* EVENTS */}
      <Section id="events">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Events</h2>
          <p className="text-slate-400 mt-2">Weekly entertainment and watch parties.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {CONTENT.events.map((e) => (
              <div key={e.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="text-amber-300 font-semibold">{e.date}</div>
                <div className="mt-1 text-lg font-bold">{e.title}</div>
                <p className="mt-1 text-sm text-slate-400">{e.desc}</p>
                <a href="#contact" className="inline-block mt-4 text-sm px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700">Reserve a Table</a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" className="bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
          <p className="text-slate-400 mt-2">A peek at the vibe.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {CONTENT.gallery.map((src, i) => (
              <img key={i} src={`${src}?auto=format&fit=crop&w=900&q=60`} alt="Bar gallery" className="w-full h-40 md:h-56 object-cover rounded-2xl ring-1 ring-slate-800" />
            )
            )}
          </div>
        </div>
      </Section>

      {/* VISIT */}
      <Section id="visit">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>
            <p className="mt-2 text-slate-300">{CONTENT.address}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {CONTENT.hours.map((h) => (
                <div key={h.day} className="rounded-xl p-3 bg-slate-900/40 ring-1 ring-slate-800 text-sm flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{h.day}</span>
                  <span className="text-slate-300">{h.open} – {h.close}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`tel:${CONTENT.phone}`} className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline">{CONTENT.phone}</a>
              <a href={`mailto:${CONTENT.email}`} className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline">{CONTENT.email}</a>
              <div className="flex gap-4 mt-2">
                <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href={CONTENT.social.instagram}>Instagram</a>
                <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href={CONTENT.social.facebook}>Facebook</a>
                <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href={CONTENT.social.tiktok}>TikTok</a>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-slate-800">
              <iframe
                title="Map"
                src={CONTENT.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-slate-400 mt-2">Questions, group bookings, or brand partnerships—send a note.</p>
          <form className="mt-8 grid md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 outline-none focus:border-amber-400" placeholder="Name" />
            <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 outline-none focus:border-amber-400" placeholder="Email" type="email" />
            <input className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 outline-none focus:border-amber-400 md:col-span-2" placeholder="Subject" />
            <textarea className="px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 outline-none focus:border-amber-400 md:col-span-2" rows={5} placeholder="Tell us about your event or question…" />
            <button type="button" className="mt-2 px-5 py-3 rounded-2xl bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition md:col-span-2">Send Message</button>
          </form>
          <p className="text-xs text-slate-500 mt-3">Form is a demo—hook to your email or POS later.</p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href="#about">About</a>
            <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href="#menu">Menu</a>
            <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href="#events">Events</a>
            <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href="#visit">Visit</a>
            <a className="text-amber-300 hover:text-teal-200 underline-offset-4 hover:underline" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
