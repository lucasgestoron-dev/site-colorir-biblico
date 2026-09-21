export function MissingAsset({ name, className }: { name: string; className?: string }) {
  return (
    <div className={`border-2 border-red-500 border-dashed bg-red-100/50 text-red-600 font-bold p-4 flex flex-col items-center justify-center text-center text-xs min-h-[100px] ${className || ""}`}>
      <span>FALTA ASSET:</span>
      <span>{name}</span>
    </div>
  );
}
