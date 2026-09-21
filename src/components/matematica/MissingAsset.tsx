type MissingAssetProps = {
  name?: string;
  label?: string;
  type?: string;
  className?: string;
};

export function MissingAsset({ name, label, className }: MissingAssetProps) {
  const assetName = label || name || "asset não informado";

  return (
    <div
      className={`w-full h-full border-2 border-red-500 border-dashed bg-red-100/50 text-red-600 font-bold p-4 flex flex-col items-center justify-center text-center text-xs min-h-[100px] ${className || ""}`}
    >
      <span>FALTA ASSET:</span>
      <span>{assetName}</span>
    </div>
  );
}
