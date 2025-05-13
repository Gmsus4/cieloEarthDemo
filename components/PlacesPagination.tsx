import { lugares } from "@/data/lugares";
import { titleToSlug } from "@/components/utils/slugify";
import { Button } from './Button';

interface PlacesPaginationProps {
  slug?: string;
}

export const PlacesPagination = ({ slug }: PlacesPaginationProps) => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Explora otros destinos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {lugares.map((lugar, index) => {
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
