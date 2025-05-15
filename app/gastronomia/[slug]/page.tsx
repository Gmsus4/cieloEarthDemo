import { Metadata } from "next";
import { notFound } from "next/navigation";
import { gastronomias } from "@/data/gastronomias";
import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { titleToSlug } from "@/components/utils/slugify";
import { TimelineFotografia } from "@/components/TimelineFotografia";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>{
  const { slug } = await params;
  const data = gastronomias.find((exp) => titleToSlug(exp.slug) === slug);
  if (!data) return { title: "No encontrado | Cielo Earth" };

  return {
    title: `${data.title} | Cielo Earth`,
    description: data.description,
  };
}

export default async function CabalgatasPageSlug({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // console.log(slug)
    const data = gastronomias.find((exp) => titleToSlug(exp.slug) === slug);
    if (!data) return notFound();

  return (
    <div className="relative w-full">
      {/* <div className="bg-[url('/cabalgata.jpg')] bg-cover bg-top bg-no-repeat h-screen relative"> */}
      <div className={`h-screen relative`}   
            style={{
            backgroundImage: `url(/gastronomia/${data.slug}.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
        }} 
      >
        <div className="absolute inset-0 bg-black/60" />
        <NavbarComponent />
        <HeroSectionTitle title={data.title} buttonA={data.slugBtnPrimary} urlA="#timelineG" buttonB={data.slugBtnSecundary} urlB="#pricing">
          <h2 className="text-4xl font-bold mb-4 px-10">{data.location}</h2>
          <div className="flex flex-col px-10 items-start md:items-center">
            <h3 className="text-xl text-center">{data.date}</h3>
            <h3 className="text-xl text-center">{data.days}</h3>
          </div>
        </HeroSectionTitle>
      </div>

      <div id="timelineG">
        {data.timeline.map((line, index) => (
          <TimelineFotografia dataTimeline={line.data} title={line.title} key={index} />
        ))}
      </div>

      <div id="pricing" className="px-6 min-h-screen flex items-center justify-center flex-col max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            Explora más por menos
          </h2>
        </div>
        <div className="xl:w-5/12 xl:mx-auto">
          <Pricing pricingInfo={[data.pricing]} />
        </div>
      </div>

      <div id="faq" className="px-10 min-h-screen flex items-center justify-center flex-col max-w-[85rem] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
            ¿Tienes dudas? Aquí las respondemos
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <FAQ FAQInfo={data.faq.items} />
        </div>
      </div>
    </div>
  );
}
