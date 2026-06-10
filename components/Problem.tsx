import { AlertCircle, CheckCircle2 } from "lucide-react";

const painPoints = [
  "You post on Facebook and Instagram, but inquiries are still slow.",
  "You boost posts, but the sales do not feel real or consistent.",
  "You are not sure which marketing strategy your business should use.",
  "You get random leads, but not enough serious customers.",
  "You still depend mostly on referrals or word of mouth.",
  "Ads, content, landing pages, and follow-up all feel confusing."
];

export default function Problem() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] bg-royal text-white">
            <AlertCircle className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            If digital marketing feels confusing, you are not alone.
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-700">
            Many business owners in Nepal are working hard online but still do not know
            what is actually bringing customers. The problem is usually not your product
            or your effort. The problem is not having a clear plan.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point}
              className="rounded-[8px] border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 text-ruby" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold leading-6 text-ink">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[8px] border border-gold/30 bg-white p-6 shadow-glow sm:p-8">
          <p className="text-lg font-bold leading-8 text-ink">
            In this free consultation call, I will understand your business, identify what
            is not working, and give you a clear digital marketing plan you can start
            implementing immediately.
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-700">
            You will leave with more clarity about where to focus, which channels to use,
            and how to turn attention into real inquiries, customers, and sales.
          </p>
        </div>
      </div>
    </section>
  );
}
