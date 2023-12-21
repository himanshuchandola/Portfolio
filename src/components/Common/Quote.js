import { QuoteIcon } from "./Icons";

function Quote() {
  return (
    <div className="flex duration-300">
      <blockquote className="flex gap-2 pt-2 text-2xl text-slate-800 md:text-3xl lg:pt-5 lg:text-5xl dark:text-slate-400">
        <QuoteIcon className="-mt-1 h-10 text-amber-600 md:-mt-3 md:h-16 lg:h-24 dark:text-amber-400" />
        <span className="flex flex-col">
          <span className="leading-[1.15] text-left">
            <em>Beautiful</em>{" "}
          </span>
          <span className="flex items-center gap-2 leading-[1.15] lg:gap-4">
            <span className="mt-1 h-0.5 w-8 rounded-full bg-slate-800 lg:h-1 lg:w-24 dark:bg-slate-400" />
            <span>
              <strong className="font-extrabold text-amber-600 dark:text-amber-300">
                inside
              </strong>{" "}
              and{" "}
              <strong className="font-extrabold text-amber-600 dark:text-amber-300">
                out{" "}
              </strong>
            </span>
            <span className="mt-1 h-0.5 w-6 rounded-full bg-slate-800 lg:h-1 lg:w-14 dark:bg-slate-400" />
          </span>
          <span className="leading-[1.15]">
            is a{" "}
            <strong className="relative font-extrabold text-amber-600 dark:text-amber-300">
              <span className="absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md bg-amber-100 px-1 lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0" />
              must.
            </strong>
          </span>
        </span>
      </blockquote>
    </div>
  );
}

export default Quote;
