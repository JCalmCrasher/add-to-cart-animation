import { useState, useRef } from "react";

function App() {
 const [quantity, setQuantity] = useState(0);
 const [isVegan, setIsVegan] = useState(false);
 const [isAnimating, setIsAnimating] = useState(false);
 const cartIconRef = useRef<HTMLDivElement>(null);

 const handleCart = (action: "increment" | "decrement") => {
  setIsAnimating(true);
  if (action === "increment") {
   setQuantity((prev) => prev + 1);
  } else if (action === "decrement") {
   setQuantity((prev) => Math.max(0, prev - 1));
  }
  setTimeout(() => setIsAnimating(false), 1000); // Match animation duration
 };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
   <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-lg relative">
    {/* Food Image */}
    <div className="mb-6">
     <img
      src="/ginger-soy.png"
      alt="Ginger-Soy Salmon Fillet"
      className="w-full h-64 object-cover rounded-2xl"
     />
    </div>

    {/* Title and Description */}
    <h2 className="text-2xl font-semibold mb-2">Ginger-Soy Salmon Fillet</h2>
    <p className="text-gray-500 mb-2">
     edamame, cucumber, avocado, herbs, white rice
    </p>
    <p className="text-xl font-semibold mb-6">$9.95</p>

    {/* Options */}
    <div className="mb-6 bg-gray-100 p-3 rounded-md">
     <div className="flex items-center justify-between">
      <h3 className="text-lg">Options</h3>
      <span className="text-gray-400 text-sm">Optional</span>
     </div>
     <div className="mt-2 flex items-center justify-between">
      <span>Vegan</span>
      <div className="relative">
       <input
        type="checkbox"
        checked={isVegan}
        onChange={(e) => setIsVegan(e.target.checked)}
        className="w-6 h-6 rounded-md border-gray-300"
       />
      </div>
     </div>
    </div>

    {/* Floating Cart Animation */}
    {isAnimating && (
     <div className="fixed shadow-md rounded-full flex items-center justify-center animate-add-to-cart">
      <img
       src="/ginger-soy.png"
       alt="Ginger-Soy Salmon Fillet"
       className="size-10 object-cover rounded-2xl"
      />
     </div>
    )}

    {/* Quantity Controls */}
    <div className="flex items-center justify-between">
     {quantity === 0 ? (
      <button
       onClick={() => handleCart("increment")}
       className="bg-slate-700 px-4 py-2 rounded-full text-white"
      >
       Add to Cart
      </button>
     ) : (
      <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
       <button
        onClick={() => handleCart("decrement")}
        className="text-xl font-medium text-gray-500"
       >
        −
       </button>
       <span className="w-8 text-center">{quantity}</span>
       <button
        onClick={() => handleCart("increment")}
        className="text-xl font-medium text-gray-500"
       >
        +
       </button>
      </div>
     )}
     <div
      ref={cartIconRef}
      className="flex gap-2 items-center p-3 bg-gray-100 rounded-full"
     >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6 text-gray-400"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
       />
      </svg>
      <span className="font-bold">{quantity}</span>
     </div>
    </div>
   </div>
  </div>
 );
}

export default App;
