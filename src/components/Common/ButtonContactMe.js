import { Link } from "react-scroll";


function ButtonContactMe() {
  return (
    <div className="mt-5">
      <Link
        to="contact"
        className="bg-gradient-to-r border-2 hover:border-transparent border-amber-500 bg-transparent transition-colors hover:from-amber-600 hover:to-amber-500 py-2 rounded-xl z-0 font-semibold tracking-[1px] hover:text-black shadow-lg shadow-gray-400/30 dark:shadow-black/30 px-4"
      >
        Get in Touch
      </Link>
    </div>
  );
}

export default ButtonContactMe;
