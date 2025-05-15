import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cabalgatas } from "@/data/gastronomias";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { titleToSlug } from "@/components/utils/slugify";
import { TimelineRafting } from "@/components/TimelineFotografia";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = cabalgatas.find((c) => c.slug === params.slug);

  if (!data) return { title: "No encontrado | Cielo Earth" };

  return {
    title: `${data.title} | Cielo Earth`,
    description: data.description,
  };
}

export default async function CabalgatasPageSlug({ params }: Props) {
    const slug = params.slug;

    const data = cabalgatas.find((c) => c.slug === slug);

    if (!data) {
        notFound();
    }

  return (
    <div className="relative w-full">
      <div className="bg-[url('/cabalgata.jpg')] bg-cover bg-top bg-no-repeat h-screen relative">
        <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />
        <HeroSectionTitle
          title={data.title}
          buttonA="Ver recorrido"
          urlA="#timelineCabalgata"
          buttonB="¿Qué incluye?"
          urlB="#pricing"
        >
          <h2 className="text-4xl font-bold mb-4">{data.location}</h2>
          <div className="flex flex-col">
            <h3 className="text-xl text-center">{data.date}</h3>
            <h3 className="text-xl text-center">{data.days}</h3>
          </div>
        </HeroSectionTitle>
      </div>

      <div id="timelineCabalgata">
        {data.timeline.map((line, index) => (
          <TimelineRafting dataTimeline={line.data} title={line.title} key={index} />
        ))}
      </div>

      <div
        id="pricing"
        className="px-6 min-h-screen flex items-center justify-center flex-col max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            Explora más por menos
          </h2>
        </div>
        <div className="xl:w-5/12 xl:mx-auto">
          <Pricing pricingInfo={data.pricing} />
        </div>
      </div>

      <div
        id="faq"
        className="px-10 min-h-screen flex items-center justify-center flex-col max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            ¿Tienes dudas? Aquí las respondemos
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <FAQ FAQInfo={data.faq} />
        </div>
      </div>
    </div>
  );
}
