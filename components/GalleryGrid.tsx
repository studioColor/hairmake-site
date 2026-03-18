import Image from "next/image";
import type { GalleryImage } from "@/types";

const placeholderImages = (category: string): GalleryImage[] =>
  Array.from({ length: 5 }, (_, i) => ({
    id: `${category}-${i}`,
    url: `/images/placeholder-${category}.svg`,
    alt: `${category === "hair" ? "ヘアスタイル" : "着付け"}サンプル${i + 1}`,
    category: category as "hair" | "kitsuke",
    order: i,
    createdAt: new Date(),
  }));

type Props = {
  title: string;
  images?: GalleryImage[];
  category: "hair" | "kitsuke";
};

export default function GalleryGrid({ title, images, category }: Props) {
  const displayImages = images && images.length > 0 ? images : placeholderImages(category);

  return (
    <div className="mb-12">
      <h3 className="text-xs tracking-widest text-gray-500 mb-4 uppercase">{title}</h3>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {displayImages.map((img) => (
          <div
            key={img.id}
            className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 relative rounded overflow-hidden bg-gray-100"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
