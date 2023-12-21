function FeaturedCard({ icon, title, desc }) {
  return (
    <div className="dark:border-[#101111] border-white relative z-10 flex-1 rounded-2xl border bg-white dark:bg-[#101111]  shadow-lg shadow-gray-400/50 dark:shadow-black/30">
      <div className="border-black/20 absolute inset-x-0 inset-y-8 z-[-1] border-t dark:border-white/20" />
      <div className="border-black/20 absolute inset-y-0 inset-x-8 z-[-1] border-l dark:border-white/20" />
      <div className="-mt-0.5">
        <div className="mt-4 mr-2 ml-4 flex items-center gap-6 rounded-xl bg-neutral-200 dark:bg-slate-800">
          <div className="-m-2">{icon}</div>
          <div className="truncate py-2 pr-4 text-sm font-bold text-slate-700 dark:text-slate-300">
            {title}
          </div>
        </div>
      </div>
      <div className="p-4 pl-12 text-sm text-left text-slate-600 dark:text-slate-400">
        {desc}
      </div>
    </div>
  );
}

export default FeaturedCard;
