"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes, the 1:1 consultation is free. The goal is to understand your business and give you clear direction before you spend more money on marketing."
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, sales, and clarity from digital marketing."
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get a simple customized digital marketing plan based on your business, your current challenges, and your growth goals."
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is designed to be around 1 hour, so there is enough time to understand your business and discuss a practical plan."
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you already have a website or Facebook page, you can share it. If not, we can still talk about what your business needs next."
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After you submit the form, you will be redirected to the next page. You will also receive the next steps for booking your appointment."
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The main purpose of the call is to give you a clear marketing plan you can start using immediately."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-ruby">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
            Questions before you book?
          </h2>
        </div>

        <div className="mt-8 divide-y divide-zinc-200 overflow-hidden rounded-[8px] border border-zinc-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-ink">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ruby transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-zinc-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
