import { Clock3 } from "lucide-react";

export default function Urgency() {
  return (
    <section className="px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[8px] bg-gradient-to-r from-ruby via-blush to-royal p-6 text-white shadow-glow sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-white/15">
            <Clock3 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-normal">
              Get clear before you spend more on ads.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/86">
              If you are boosting posts, creating content, or running ads without a plan,
              this free call will help you understand what to fix first.
            </p>
          </div>
        </div>
        <a
          href="#consultation-form"
          className="focus-ring inline-flex h-12 shrink-0 items-center justify-center rounded-[8px] bg-white px-5 text-sm font-bold text-ruby transition hover:bg-porcelain"
        >
          Book your FREE call
        </a>
      </div>
    </section>
  );
}
