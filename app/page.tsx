import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Benefits />
      <Urgency />
      <FAQ />
      <section id="consultation-form" className="px-5 pb-20 pt-6 sm:px-6 lg:px-8">
        <CTAForm />
      </section>
    </main>
  );
}
