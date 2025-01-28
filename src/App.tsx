import { useState, useRef, useCallback } from "react";
import { type FoodItem } from "./types";
import { Options } from "./components/Options";
import { FoodImage } from "./components/FoodImage";
import { CartControls } from "./components/CartControls";

interface AnimationItem {
 id: number;
 action: "increment" | "decrement";
}

const ANIMATION_DURATION = 1000;
const DEFAULT_FOOD_ITEM: FoodItem = {
 id: 1,
 name: "Ginger-Soy Salmon Fillet",
 description: "edamame, cucumber, avocado, herbs, white rice",
 price: 9.95,
 image: "/ginger-soy.png"
};

function App() {
 const [quantity, setQuantity] = useState(0);
 const [isVegan, setIsVegan] = useState(false);
 const [animations, setAnimations] = useState<AnimationItem[]>([]);
 const cartIconRef = useRef<HTMLDivElement>(null);

 const handleCart = useCallback((action: "increment" | "decrement") => {
  const newAnimationId = Date.now();

  setAnimations((prev) => [...prev, { id: newAnimationId, action }]);
  setQuantity((prev) =>
   action === "increment" ? prev + 1 : Math.max(0, prev - 1)
  );

  const timeoutId = setTimeout(() => {
   setAnimations((prev) => prev.filter((item) => item.id !== newAnimationId));
  }, ANIMATION_DURATION);

  return () => clearTimeout(timeoutId);
 }, []);

 const handleVeganOption = useCallback((checked: boolean) => {
  setIsVegan(checked);
 }, []);

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
   <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-lg relative">
    <FoodImage src={DEFAULT_FOOD_ITEM.image} alt={DEFAULT_FOOD_ITEM.name} />

    <div className="space-y-2 mb-6">
     <h2 className="text-2xl font-semibold">{DEFAULT_FOOD_ITEM.name}</h2>
     <p className="text-gray-500">{DEFAULT_FOOD_ITEM.description}</p>
     <p className="text-xl font-semibold">
      ${DEFAULT_FOOD_ITEM.price.toFixed(2)}
     </p>
    </div>

    <Options isVegan={isVegan} onVeganChange={handleVeganOption} />

    {/* Animation Elements */}
    {animations.map(({ id, action }) => (
     <div
      key={id}
      className={`fixed shadow-md rounded-full flex items-center 
              justify-center ${
               action === "decrement"
                ? "animate-remove-from-cart"
                : "animate-add-to-cart"
              }`}
     >
      <img
       src={DEFAULT_FOOD_ITEM.image}
       alt={DEFAULT_FOOD_ITEM.name}
       className="size-10 object-cover rounded-2xl"
      />
     </div>
    ))}

    <CartControls
     quantity={quantity}
     onIncrement={() => handleCart("increment")}
     onDecrement={() => handleCart("decrement")}
     cartIconRef={cartIconRef}
    />
   </div>
  </div>
 );
}

export default App;
