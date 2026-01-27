import Link from "next/link";
import Image from "next/image";

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M37.9281 17C38.4298 21.2545 40.825 23.7941 45 24.0658V28.8451C42.5859 29.0794 40.4652 28.3016 38.0038 26.821V35.7423C38.0038 47.147 25.4788 50.7361 20.4233 42.5457C17.1856 37.3073 19.1642 28.1048 29.5496 27.73V32.781C28.7296 32.9058 27.9219 33.1002 27.1355 33.362C24.835 34.1398 23.5191 35.583 23.8883 38.1413C24.5889 43.033 33.6584 44.4856 32.901 34.9176V17H37.9091H37.9281Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z" />
    </svg>
  );
}

function RedditIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M47.8,30.7c0-2.1-1.7-3.8-3.8-3.8c-0.9,0-1.7,0.3-2.4,0.9c-2.3-1.4-5.2-2.4-8.5-2.5l1.7-5.3 l4.6,1.1c0.1,1.6,1.5,3,3.2,3c1.8,0,3.2-1.4,3.2-3.2s-1.4-3.2-3.2-3.2c-1.2,0-2.3,0.7-2.8,1.7l-5.3-1.2c-0.4-0.1-0.9,0.1-1,0.6 l-2.1,6.5c-3.5,0.1-6.7,1-9.1,2.6c-0.7-0.5-1.5-0.9-2.4-0.9c-2.1,0-3.8,1.7-3.8,3.8c0,1.3,0.7,2.5,1.7,3.1c0,0.3-0.1,0.6-0.1,0.9 c0,5.3,6.4,9.6,14.2,9.6s14.2-4.3,14.2-9.6c0-0.3,0-0.6-0.1-0.9C47.2,33.2,47.8,32,47.8,30.7z M42.6,19.4c0.8,0,1.5,0.7,1.5,1.5 c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5C41.1,20,41.8,19.4,42.6,19.4z M17.8,30.7c0-1.2,0.9-2.1,2.1-2.1c0.3,0,0.6,0.1,0.9,0.2 c-1.1,0.9-2,2-2.5,3.2C18.1,31.7,17.8,31.2,17.8,30.7z M32,42.6c-6.9,0-12.5-3.5-12.5-7.9s5.6-7.9,12.5-7.9s12.5,3.5,12.5,7.9 S38.9,42.6,32,42.6z M45.6,32.1c-0.5-1.2-1.4-2.3-2.5-3.2c0.3-0.1,0.6-0.2,0.9-0.2c1.2,0,2.1,0.9,2.1,2.1 C46.2,31.2,45.9,31.7,45.6,32.1z M29.4,33.1c0-1.2-1-2.1-2.1-2.1s-2.1,1-2.1,2.1s1,2.2,2.1,2.2S29.4,34.2,29.4,33.1z M36.7,30.9 c-1.2,0-2.1,1-2.1,2.1s1,2.2,2.1,2.2c1.2,0,2.1-1,2.1-2.2S37.9,30.9,36.7,30.9z M36,38.2c-0.8,0.8-2.1,1.1-4,1.1 c-1.9,0-3.2-0.4-4-1.1c-0.3-0.3-0.9-0.3-1.2,0c-0.3,0.3-0.3,0.9,0,1.2c1.1,1.1,2.8,1.6,5.2,1.6c2.4,0,4.1-0.5,5.2-1.6 c0.3-0.3,0.3-0.9,0-1.2C36.9,37.8,36.3,37.8,36,38.2z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" />
    </svg>
  );
}

function Marquee({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden select-none">
      <div className={`flex shrink-0 items-center gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {children}
        {children}
      </div>
      <div className={`flex shrink-0 items-center gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} aria-hidden="true">
        {children}
        {children}
      </div>
    </div>
  );
}

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/talkshopify", icon: InstagramIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@talkshopify", icon: TikTokIcon },
  { name: "YouTube", href: "https://www.youtube.com/@TalkShopify", icon: YouTubeIcon },
  { name: "Reddit", href: "https://www.reddit.com/r/talkshopify/", icon: RedditIcon },
  { name: "Discord", href: "https://discord.gg/talk-shop", icon: DiscordIcon },
  { name: "Facebook", href: "https://www.facebook.com/letstalkshopify", icon: FacebookIcon },
];

export default function Home() {
  const features = [
    {
      icon: "{ }",
      title: "Shopify Collective",
      description:
        "Connect with Shopify builders, eComm architects, and digital nomads for raw insights on online business.",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      icon: "//",
      title: "Burn the Rulebook",
      description:
        "No blueprints here. We build, break, and rebuild. Share ideas and see them transformed by collective knowledge.",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: "⚡",
      title: "The Algorithm Never Sleeps",
      description:
        "Shopify evolves. Trends shift. Yesterday's success can become obsolete. We adapt—strategy, tech, and growth.",
      gradient: "from-shopify/20 to-lime/20",
    },
  ];

  return (
    <div className="min-h-screen bg-midnight font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-shopify/20 bg-gradient-to-br from-shopify/10 to-transparent transition-all group-hover:border-shopify/40">
                <Image
                  src="/logo.webp"
                  alt="Talk Shop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-base font-semibold text-white/90 tracking-tight">
                Talk Shop
              </span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#learn-more"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Learn More
              </a>
              <a
                href="#about-us"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                About Us
              </a>
              <Link
                href="/community"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Community
              </Link>
              <a
                href="#follow-us"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                Follow Us
              </a>
            </div>
            <a
              href="https://discord.gg/talk-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-shopify px-5 py-2.5 text-sm font-semibold text-midnight transition-all hover:bg-lime"
            >
              <DiscordIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Join Discord</span>
              <span className="sm:hidden">Join</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute top-20 left-1/4 h-[600px] w-[600px] rounded-full bg-shopify/8 blur-[180px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-lime/5 blur-[150px] animate-pulse-glow delay-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-cyan-500/3 blur-[200px]"></div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-[5%] hidden lg:block">
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">{"{"}</span>
        </div>
        <div className="absolute bottom-40 right-[5%] hidden lg:block">
          <span className="font-mono text-8xl font-bold text-shopify/5 select-none">{"}"}</span>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-40">
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow badge */}
            <div className="animate-slide-up animate-on-load mb-10 inline-flex items-center gap-3 rounded-full border border-shopify/30 bg-shopify/5 px-5 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopify opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-shopify"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-widest text-shopify uppercase">
                Shopify Community
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-slide-up animate-on-load delay-100 mb-10 max-w-5xl">
              <span className="block text-5xl font-bold tracking-tight text-white lg:text-7xl">
                The Shopify Discord
              </span>
              <span className="relative block mt-2">
                <span className="font-serif text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-shopify via-lime to-shopify lg:text-8xl">
                  Server
                </span>
                {/* Underline accent */}
                <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 lg:w-64" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none">
                  <path d="M0 8 Q50 2, 100 8 T200 8" stroke="url(#hero-gradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#95BF47"/>
                      <stop offset="50%" stopColor="#C4E456"/>
                      <stop offset="100%" stopColor="#95BF47"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-slide-up animate-on-load delay-200 mb-14 max-w-2xl text-lg leading-relaxed text-gray-400 lg:text-xl">
              Welcome to our Shopify Discord server. Connect with merchants, experts, and eCommerce pros to share insights, solve problems, and level up your store. Whether you&apos;re just starting or scaling to the moon—we&apos;re here as a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white font-medium">community</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-shopify/20 -z-0"></span>
              </span>{" "}
              to help.
            </p>

            {/* CTA group */}
            <div className="animate-slide-up animate-on-load delay-300 flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://discord.gg/talk-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-shopify to-shopify-dark px-10 py-5 text-lg font-bold text-midnight transition-all hover:scale-105 hover:shadow-2xl hover:shadow-shopify/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-lime to-shopify opacity-0 transition-opacity group-hover:opacity-100"></span>
                <DiscordIcon className="relative h-6 w-6" />
                <span className="relative">Join the Community</span>
                <span className="relative transition-transform group-hover:translate-x-1">→</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-midnight bg-gradient-to-br from-carbon to-slate ring-2 ring-shopify/10"
                      style={{ zIndex: 5 - i }}
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-left">
                  <div className="font-semibold text-white">500+ members</div>
                  <div className="text-gray-500">already joined</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Angled section divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
            <path d="M0 96V48L720 0L1440 48V96H0Z" fill="#161B22"/>
          </svg>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="relative overflow-hidden bg-slate py-6 border-y border-white/5">
        <Marquee>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
          <span className="text-2xl font-bold text-white/10 lg:text-4xl">LET&apos;S TALK SHOP</span>
          <span className="text-shopify">•</span>
        </Marquee>
      </section>

      {/* Features Section */}
      <section id="learn-more" className="relative bg-slate py-32">
        <div className="absolute inset-0 diagonal-stripes opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
                Why Join Us
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                Enter the Shopify{" "}
                <span className="font-serif italic text-lime">Mindstream</span>
              </h2>
            </div>
            <div className="hidden lg:block">
              <div className="h-px w-64 bg-gradient-to-r from-shopify/50 to-transparent"></div>
            </div>
          </div>

          {/* Feature cards - Bento grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-carbon/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:scale-[1.02] ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[100px]"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 font-mono text-2xl text-shopify transition-all duration-300 group-hover:bg-shopify/20 group-hover:border-shopify/30 group-hover:scale-110">
                    {feature.icon}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                    {feature.description}
                  </p>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-shopify text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Build Grow Marquee */}
      <section id="about-us" className="relative overflow-hidden bg-midnight py-8 border-y border-white/5">
        <Marquee reverse>
          <span className="font-serif text-3xl italic text-lime/30 lg:text-5xl">Dream it</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-3xl italic text-shopify/30 lg:text-5xl">Build it</span>
          <span className="text-white/20">•</span>
          <span className="font-serif text-3xl italic text-lime/30 lg:text-5xl">Grow it</span>
          <span className="text-white/20">•</span>
        </Marquee>
      </section>

      {/* Experience Section */}
      <section className="relative bg-midnight py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-shopify/5 blur-[180px]"></div>

        {/* Decorative vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-shopify/20 to-transparent hidden lg:block"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
                Our Experience
              </span>
              <h2 className="mb-8 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                With 20 years in eCommerce,{" "}
                <span className="block font-serif italic text-lime mt-2">We stand out</span>
              </h2>

              <p className="text-lg leading-relaxed text-gray-400 mb-8">
                We&apos;ve witnessed it all—platform changes, Shopify updates, trends shifting, and strategies rising and falling. This is battle-tested insight from years in the trenches. Join us to stay ahead of the chaos.
              </p>

              {/* Value props */}
              <div className="space-y-4">
                {[
                  { label: "Battle-tested", desc: "Two decades of eCommerce evolution" },
                  { label: "Always adapting", desc: "Staying ahead of platform changes" },
                  { label: "Community-driven", desc: "Real insights from real builders" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shopify/20 text-shopify shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.label}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="relative lg:pl-12">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-shopify/10 to-transparent blur-xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years Experience", color: "text-shopify" },
                  { value: "24/7", label: "Community Active", color: "text-lime" },
                  { value: "500+", label: "Members", color: "text-white" },
                  { value: "∞", label: "Ideas Shared", color: "text-shopify" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/10 bg-carbon/50 p-8 backdrop-blur-sm transition-all hover:border-shopify/30 hover:bg-carbon"
                  >
                    <div className={`text-4xl font-bold lg:text-5xl ${stat.color} transition-transform group-hover:scale-110`}>
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Discord CTA Section */}
      <section id="join-discord" className="relative overflow-hidden py-32">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-gradient-to-br from-shopify via-shopify-dark to-shopify"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="grain absolute inset-0"></div>

        {/* Animated orbs */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
        <div className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-midnight/30 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-64 w-[600px] rounded-full bg-lime/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-midnight/20 px-6 py-3 backdrop-blur-sm border border-white/10">
            <DiscordIcon className="h-5 w-5 text-midnight" />
            <span className="font-mono text-sm font-medium text-midnight tracking-wide">
              Join on Discord
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-bold tracking-tight text-midnight lg:text-6xl">
            Join our Shopify{" "}
            <span className="font-serif italic">Discord Collective</span>
          </h2>

          <div className="mb-10 space-y-4 text-lg">
            <p className="font-semibold text-midnight text-2xl">Free to Join</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-midnight/80">
              <span>A community built to test, learn, and grow</span>
              <span className="hidden sm:inline text-midnight/40">•</span>
              <span>We experiment. We adapt. We share.</span>
            </div>
          </div>

          <a
            href="https://discord.gg/talk-shop"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-midnight px-12 py-6 text-xl font-bold text-white transition-all duration-300 hover:bg-slate hover:scale-105 hover:shadow-2xl"
          >
            <DiscordIcon className="h-7 w-7" />
            <span>Click to Join</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="relative bg-slate py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-shopify mb-4 block">
            Stay Connected
          </span>
          <h3 className="mb-10 text-3xl font-bold text-white">Follow our journey</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-carbon/50 transition-all hover:border-shopify/50 hover:bg-shopify/10 hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6 text-gray-400 transition-colors group-hover:text-shopify" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-midnight py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">
            {/* Location */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Location</h4>
              <p className="text-gray-400">
                123 Mars, Crater City, Red Planet
              </p>
              <p className="mt-1 text-sm text-gray-600">(WiFi may be spotty)</p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Hours</h4>
              <p className="text-gray-400">
                Who has time for breaks? We&apos;re here 24/7!
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
              <p className="text-gray-400">
                <a href="mailto:email@example.com" className="hover:text-white transition-colors">email@example.com</a>
              </p>
              <p className="text-gray-400">
                <a href="tel:5555555555" className="hover:text-white transition-colors">(555) 555-5555</a>
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/5 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-shopify/20">
                  <Image
                    src="/logo.webp"
                    alt="Talk Shop"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-white/60">Talk Shop</span>
              </div>
              <p className="font-mono text-xs text-gray-600">
                Built for real builders. Not affiliated with Shopify Inc.
              </p>
              <div className="flex gap-6">
                <Link href="/community" className="text-xs text-gray-500 hover:text-white transition-colors">
                  Community
                </Link>
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
