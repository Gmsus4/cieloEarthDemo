import { HeroSectionTitle } from "@/components/HeroSectionTitle";
import { NavbarComponent } from "@/components/NavbarComponent";
import { team } from "@/data/team"

export default function NosotrosPage() {
    return (
        <div className="relative w-full">
            <div className="bg-[url('/nosotros.webp')] bg-cover bg-center bg-no-repeat h-screen relative">
                <div className="absolute inset-0 bg-black/60" />
                <NavbarComponent />
                <HeroSectionTitle title="Un poquito de nosotros: cada destino, una sonrisa compartida" buttonA="Ver nuestra historia" urlA="#nosotros" buttonB="Conoce nuestro equipo" urlB="#team"/>   
            </div>
            <div id="nosotros" className="px-10 sm:px-14 md:px-20 lg:px-0 py-10 md:py-28 lg:py-0 min-h-screen flex items-center justify-center flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col lg:pl-20">
                    <div className="lg:px-0 flex justify-center lg:max-w-lg flex-col">
                        <p className="text-5xl md:text-6xl lg:text-7xl">YoureTalent</p>
                        <p className="mt-6 text-lg/8 text-gray-200">Creemos que el conocimiento debe ser libre, práctico y transformador. Por eso diseñamos experiencias de aprendizaje en distintas áreas como astronomía, fotografía, cocina tradicional, herbolaria, arte popular, escritura creativa, conexión con la naturaleza y mucho más.</p>
                        <p>Cada curso es una invitación a descubrir nuevas habilidades, reconectar contigo mismo y ampliar tu forma de ver el mundo.</p>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/3182784/pexels-photo-3182784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-auto lg:h-screen w-full lg:w-1/2 rounded-2xl lg:rounded-none object-cover object-center"/>
            </div>
            <div id="team" className="min-h-screen flex items-center justify-center flex-col">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Nuestro Equipo</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">Creative people</p>
                </div>
                <div className="px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                    {
                        team.map((item, index) => {
                            return (                             
                                <div key={index}>
                                    <div className="text-center">
                                        <img className="rounded-full size-24 mx-auto" src={item.avatarUrl} alt="Avatar" />
                                        <div className="mt-2 sm:mt-4">
                                            <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                                            {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}