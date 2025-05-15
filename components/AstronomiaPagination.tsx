import { lugaresAstronomia } from "@/data/astronomia";
import { titleToSlug } from "@/components/utils/slugify";
import { Button } from './Button';

interface AstronomiaPaginationProps {
  slug?: string;
}

export const AstronomiaPagination = ({ slug }: AstronomiaPaginationProps) => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Explora otros destinos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {lugaresAstronomia.map((lugar, index) => {
            const lugarSlug = titleToSlug(lugar.title);
            if (slug !== lugarSlug) {
              return (
                <Button
                  title={lugar.title}
                  url={`${lugarSlug}`}
                  key={index}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
