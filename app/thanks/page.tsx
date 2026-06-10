import Image from "next/image";
import { PlayCircle } from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Thanks | Watch This Before Your Consultation",
  description: "Watch the short next-step video before your free consultation call."
};

const vimeoUrl =
  process.env.NEXT_PUBLIC_VIMEO_URL ??
  "https://vimeo.com/1199837844?share=copy&fl=sv&fe=ci";
const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "";

function getVimeoEmbedUrl(url: string) {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : "";
}

export default function ThanksPage() {
  const embedUrl = getVimeoEmbedUrl(vimeoUrl);

  return (
    <main className="min-h-screen px-5 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/shalini-gupta-logo-sharp.png"
          alt="Shalini Gupta Digital Marketing Expert"
          width={1436}
          height={344}
          priority
          className="h-auto w-60 drop-shadow-sm sm:w-80"
        />

        <h1 className="mt-12 text-4xl font-extrabold leading-tight tracking-normal text-ink sm:text-5xl">
          Wait... watch the video before you go
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
          Before your consultation, please watch this short video so you know what to do
          next.
        </p>

        <div className="mt-9 w-full overflow-hidden rounded-[8px] border border-zinc-200 bg-ink shadow-glow">
          <div className="aspect-video w-full">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Consultation next steps video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-white">
                <PlayCircle className="h-14 w-14 text-gold" aria-hidden="true" />
                <p className="mt-4 text-lg font-bold">Video will be added here.</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/72">
                  Add your Vimeo link later with `NEXT_PUBLIC_VIMEO_URL`.
                </p>
              </div>
            )}
          </div>
        </div>

        <WhatsAppCTA whatsappUrl={whatsappUrl || undefined} />
      </section>
    </main>
  );
}
