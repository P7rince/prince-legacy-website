import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const HERO_VIDEO = "/hero.mp4"; // replace with your uploaded hero video or leave empty

// Replace these with your real images / video thumbnails
const media = {
  heroFallback: "/hero-photo.jpg",
  portfolio: {
    food: ["/portfolio/food1.jpg", "/portfolio/food2.jpg", "/portfolio/food3.jpg"],
    lifestyle: ["/portfolio/life1.jpg", "/portfolio/life2.jpg", "/portfolio/life3.jpg"],
    commercial: ["/portfolio/com1.jpg", "/portfolio/com2.jpg", "/portfolio/com3.jpg"]
  },
  clients: ["/clients/muggandbean.jpg", "/clients/picknpay.jpg"]
};

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      <header className="bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg">
              <span className="font-bold text-white">PL</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight">PRINCE LEGACY</h1>
              <p className="text-sm text-gray-600">Visual storytelling from Zimbabwe — based in Johannesburg.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#work" className="hover:text-amber-700">Our Work</a>
            <a href="#about" className="hover:text-amber-700">About</a>
            <a href="#clients" className="hover:text-amber-700">Clients</a>
            <a href="#contact" className="text-white bg-amber-600 px-4 py-2 rounded-lg shadow hover:bg-amber-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {HERO_VIDEO ? (
          <video
            className="w-full h-[60vh] object-cover brightness-75"
            autoPlay
            loop
            muted
            playsInline
            src={HERO_VIDEO}
          />
        ) : (
          <div
            className="w-full h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${media.heroFallback})` }}
            aria-hidden
          />
        )}

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="w-full md:w-2/3 bg-gradient-to-r from-black/40 via-transparent p-6 rounded-lg">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Capturing Africa’s Essence — One Frame at a Time</h2>
              <p className="mt-3 text-white/90 max-w-xl">PRINCE LEGACY is a AFRICAN-born creative studio based in Johannesburg. We craft bold, warm, and authentic imagery for brands and restaurants — from Mugg & Bean to Pick n Pay.</p>
              <div className="mt-5 flex items-center space-x-3">
                <a href="#work" className="inline-block bg-amber-500 text-white px-5 py-2 rounded-md font-semibold shadow">View Our Work</a>
                <a href="#contact" className="inline-block bg-white/90 px-5 py-2 rounded-md font-semibold">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <main className="max-w-6xl mx-auto px-6 -mt-16">
        <section id="work" className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h3 className="text-2xl font-bold">Our Work</h3>
          <p className="mt-2 text-gray-600">Selected projects across food, lifestyle and commercial — designed to connect people with brands.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Food & Lifestyle Column */}
            <CategoryCard title="Food & Lifestyle" subtitle="Restaurant campaigns and product photography" images={media.portfolio.food} />

            {/* People & Portraits */}
            <CategoryCard title="People & Portraits" subtitle="Human-led storytelling and portraits" images={media.portfolio.lifestyle} />

            {/* Commercial */}
            <CategoryCard title="Brand & Commercial" subtitle="Product campaigns and short reels" images={media.portfolio.commercial} />
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-semibold">Featured Reel</h4>
            <p className="text-sm text-gray-600 mt-1">A short highlight reel (add your MP4 here).</p>
            <div className="mt-3 bg-gray-100 rounded-lg p-4">
              {/* Placeholder: replace with actual embedded video or reel */}
              <div className="h-56 bg-cover bg-center rounded-md flex items-center justify-center text-gray-500" style={{ backgroundImage: `url(${media.portfolio.commercial[0]})` }}>
                <span className="bg-white/80 px-3 py-1 rounded">Replace with reel</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold">About PRINCE LEGACY</h3>
            <p className="mt-3 text-gray-700">PRINCE LEGACY is a AFRICAN-born creative studio now based in Johannesburg, South Africa. We specialise in photography and film that celebrates African culture — bold color palettes, cinematic lighting, and human-first storytelling. Our team blends commercial polish with cultural authenticity to create imagery that performs on social and sells in-store.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Stat label="Years of Experience" value="—" />
              <Stat label="Brands Worked With" value="Mugg & Bean, Pick n Pay" />
              <Stat label="Services" value="Photography, Videography, Social Reels, Editing" />
              <Stat label="Based In" value="Johannesburg, South Africa" />
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Mission</h4>
              <p className="text-gray-600 mt-1">To bring strong African narratives to brands through images that feel local, look modern, and travel well globally.</p>
            </div>
          </div>

          {/* TEAM / BTS placeholder */}
          <aside className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200">
              <img src={media.heroFallback} alt="Team / BTS" className="w-full h-full object-cover" />
            </div>
            <h4 className="mt-4 font-bold">Prince & Prince</h4>
            <p className="text-sm text-gray-600">Founder & Creative Director</p>
            <p className="mt-3 text-sm text-gray-500 text-center">Zimbabwean-born, crafting visuals for African brands with global appeal.</p>
          </aside>
        </section>

        {/* CLIENTS */}
        <section id="clients" className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold">Clients & Collaborations</h3>
          <p className="mt-2 text-gray-600">Proud to collaborate with established brands and local businesses.</p>

          <div className="mt-6 flex items-center gap-6">
            {media.clients.map((c, i) => (
              <div key={i} className="w-40 h-24 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src={c} alt={`client-${i}`} className="object-contain w-full h-full p-2" />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600">Want your brand featured here? We offer campaign packages, one-day shoots, and long-term social content retainers.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h3 className="text-2xl font-bold">Let’s Work Together</h3>
          <p className="mt-2 text-gray-600">For bookings, media kits, or to see the latest reel, get in touch.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ContactCard />
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500 pb-12">© {new Date().getFullYear()} PRINCE LEGACY — Visual storytelling by Prince M. Dube</footer>
      </main>
    </div>
  );
}

/* -------------------- Reusable components -------------------- */
function CategoryCard({ title, subtitle, images = [] }) {
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-4 shadow-md">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((src, idx) => (
          <div key={idx} className="h-24 rounded-lg overflow-hidden bg-gray-100">
            <img src={src} alt={`${title}-${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <a href="#contact" className="inline-block text-sm font-semibold text-amber-700 hover:underline">Book a shoot</a>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border p-3 rounded-lg bg-white">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 font-bold">{value}</div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="rounded-xl border p-6 h-full flex flex-col justify-between">
      <div>
        <h4 className="font-semibold">Get in touch</h4>
        <p className="text-sm text-gray-600 mt-1">Book a shoot, request a media kit, or send a brief — we’re ready.</p>

        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-600" />
            <a href="mailto:princelegacycreations@gmail.com" className="text-sm">princelegacycreations@gmail.com</a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-amber-600" />
            <div className="text-sm">067 937 0938 | 081 098 1471</div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-600" />
            <div className="text-sm">Johannesburg, South Africa</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <a href="https://www.instagram.com/prince_legacy_creations" target="_blank" rel="noreferrer" className="inline-block text-sm font-semibold text-amber-700 hover:underline">@prince_legacy_creations</a>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="rounded-xl border p-6 bg-white">
      <div className="grid grid-cols-1 gap-3">
        <input placeholder="Your name" className="border rounded-md p-3" />
        <input placeholder="Email" className="border rounded-md p-3" />
        <input placeholder="Phone (optional)" className="border rounded-md p-3" />
        <textarea placeholder="Tell us about your project" className="border rounded-md p-3 h-32" />
        <div className="flex items-center justify-end">
          <button type="button" className="bg-amber-600 text-white px-4 py-2 rounded-md">Send Message</button>
        </div>
      </div>
    </form>
  );
}

export default App;