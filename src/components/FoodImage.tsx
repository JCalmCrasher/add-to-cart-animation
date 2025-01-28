interface FoodImageProps {
 src: string;
 alt: string;
}

export function FoodImage({ src, alt }: FoodImageProps) {
 return (
  <div className="mb-6">
   <img src={src} alt={alt} className="w-full h-64 object-cover rounded-2xl" />
  </div>
 );
}
