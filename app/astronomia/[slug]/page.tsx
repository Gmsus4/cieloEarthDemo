import { lugaresAstronomia } from "@/data/astronomia";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSectionTitle } from '../../../components/HeroSectionTitle';
import { NavbarComponent } from "@/components/NavbarComponent";
import { TitleSections } from "@/components/TitleSections";
import { CarouselSlide } from "@/components/CarouselSlide";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AstronomiaPagination } from "@/components/AstronomiaPagination";
import { titleToSlug } from "@/components/utils/slugify";

// Generar metadata dinámica
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>{
  const { slug } = await params;
  const data = lugaresAstronomia.find((exp) => titleToSlug(exp.title) === slug);
  if (!data) return { title: "No encontrado | Cielo Earth" };

  return {
    title: `${data.title} | Cielo Earth`,
    description: data.description,
  };
}

export default async function LugaresPageSlug({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // console.log(slug)
    const data = lugaresAstronomia.find((exp) => titleToSlug(exp.title) === slug);
    if (!data) return notFound();
  
  let slideDataSlug = [] as any;

  data.images.map((image, index) => {
    slideDataSlug.push({
      title: "",
      button: "",
      date: "",
      place: "",
      src: image,
    })
  })

  // console.log(slideDataSlug)

  return (
    <div className="relative w-full">
        <div className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${data.image})` }}>
            <div className="absolute inset-0 bg-black/60" />
            <NavbarComponent />
            {/* <HeroSectionTitle title={data.title} buttonA="Ver imágenes" urlA="#images" buttonB="Ver Ubicación" urlB={data.locationUrl}/> */}
            <HeroSectionTitle title={data.title} buttonA="Ver imágenes" urlA="#images" buttonB="Ver Ubicación" urlB={data.locationUrl}>
              {/* Description */}
              <p className="text-lg mb-6 px-10">{data.description}</p>

              {/* Features */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {data.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex flex-col items-center gap-2 bg-black/30 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                      <span className="text-white">
                        {feature.qty} {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div> */}

              {/* Location */}
              {/* <div className="flex justify-center">
                <div className="mt-6 inline-block bg-black/30 px-4 py-2 rounded-full">
                  <p className="text-white">📍 {data.location}</p>
                </div>
              </div> */}
            </HeroSectionTitle>
        </div>

        <div id="images" className="w-full h-auto flex flex-col items-center justify-start pb-10 pt-16 sm:py-20">
          {/* <TitleSections title="Galería de Imágenes"/> */}
          <CarouselSlide slides={slideDataSlug}/>
        </div>

        {/* Amenities Section */}
        <div className="py-12 mt-12">
          <div className="max-w-6xl mx-auto px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Amenidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div key={index} className="flex items-center h-full w-full justify-start gap-4 p-3 bg-black rounded-md shadow-sm relative">
                    <div className="rounded-md">
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                    </div>
                    <IconComponent className="w-8 h-8 text-white" />
                    <span className="mt-0.5">{amenity.title}</span>
                  </div>  
                );
              })}
            </div>
          </div>
        </div>

        <div className="py-12 mt-12">
          <div className="max-w-6xl mx-auto px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Características</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.features.map((feacture, index) => {
                const Icon = feacture.icon;
                return (
                  <div key={index} className="flex items-center h-full w-full justify-start gap-4 p-3 bg-black rounded-md shadow-sm relative">
                    <div className="rounded-md">
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full absolute -top-2 -right-2">
                      <span className="font-bold text-black">{feacture.qty}</span>
                    </div>
                    <Icon className="w-8 h-8 text-white" />
                    <span className="mt-0.5">{feacture.title}</span>
                  </div>  
                );
              })}
            </div>
          </div>
        </div>

        <AstronomiaPagination slug={slug}/>
    </div>
  );
}