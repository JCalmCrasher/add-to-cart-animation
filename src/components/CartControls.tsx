import { RefObject } from "react";

interface CartControlsProps {
 quantity: number;
 onIncrement: () => void;
 onDecrement: () => void;
 cartIconRef: RefObject<HTMLDivElement>;
}

export function CartControls({
 quantity,
 onIncrement,
 onDecrement,
 cartIconRef
}: CartControlsProps) {
 return (
  <div className="flex items-center justify-between">
   {quantity === 0 ? (
    <button
     onClick={onIncrement}
     className="bg-slate-700 px-4 py-2 rounded-full text-white"
    >
     Add to Cart
    </button>
   ) : (
    <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
     <button
      onClick={onDecrement}
      className="text-xl font-medium text-gray-500"
     >
      −
     </button>
     <span className="w-8 text-center">{quantity}</span>
     <button
      onClick={onIncrement}
      className="text-xl font-medium text-gray-500"
     >
      +
     </button>
    </div>
   )}
   <div
    ref={cartIconRef}
    className="flex justify-center gap-2 items-center p-3 bg-gray-100 rounded-full lg:w-fit w-36"
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
 );
}
