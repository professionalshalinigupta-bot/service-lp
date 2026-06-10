import Image from "next/image";
import { ArrowDown, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-5 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <header className="flex w-full justify-center py-3">
          <Image
            src="/shalini-gupta-logo-sharp.png"
            alt="Shalini Gupta Digital Marketing Expert"
            width={1436}
            height={344}
            priority
            className="h-auto w-60 drop-shadow-sm sm:w-80"
          />
        </header>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm">
            <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
            For Nepal-based business owners
          </div>
          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Struggling to grow your business?
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl font-bold leading-8 text-royal sm:text-2xl">
            Book a FREE 1:1 marketing consultation call with me
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            In this consultation call, I&apos;ll understand your business and give you a simple
            customized digital marketing plan that you can immediately implement in your
            business after the call for FREE.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#consultation-form"
              className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-[8px] bg-ruby px-7 text-base font-bold text-white shadow-glow transition hover:bg-[#a80f30]"
            >
              Book your FREE call now
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 text-sm font-medium text-zinc-600">
            No guesswork. No confusing advice. Just a clear plan for more leads, customers,
            and sales.
          </p>
        </div>
      </div>
    </section>
  );
}
