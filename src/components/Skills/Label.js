export default function Label({ indicator, children }) {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <span className="relative overflow-hidden rounded-md bg-gray-100 px-3 py-1 pb-1.5 text-[13px] font-semibold dark:bg-neutral-800">
      {children}
      <span
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-amber-500 dark:bg-amber-500"
        style={{ width: `${percentage}%` }}
      />
    </span>
  );
}
