import { ClipboardCheck, FileText, Mail, PhoneCall, Send } from "lucide-react";

const steps = [
  {
    title: "Fill up the form",
    icon: FileText
  },
  {
    title: "Receive an email with the appointment link",
    icon: Mail
  },
  {
    title: "Fill the appointment form",
    icon: ClipboardCheck
  },
  {
    title: "Join the 1:1 consultation call",
    icon: PhoneCall
  },
  {
    title: "Get your customized digital marketing plan for FREE",
    icon: Send
  }
];

export default function Benefits() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-ruby">
            How The Free Consultation Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            A simple process from form to clear marketing plan.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            You do not need to prepare anything complicated. Just share your business
            details and I will guide you through the next steps.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-[8px] border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-ink text-sm font-bold text-white">
                  {index + 1}
                </span>
                <Icon className="mt-5 h-6 w-6 text-ruby" aria-hidden="true" />
                <p className="mt-4 text-sm font-bold leading-6 text-ink">{step.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
