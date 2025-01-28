interface OptionsProps {
  isVegan: boolean;
  onVeganChange: (checked: boolean) => void;
}

export function Options({ isVegan, onVeganChange }: OptionsProps) {
  return (
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
            onChange={(e) => onVeganChange(e.target.checked)}
            className="w-6 h-6 rounded-md border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}