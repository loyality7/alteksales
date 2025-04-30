import { motion } from "motion/react";
import { Link } from "react-router";
import { childVariants } from "../../constants/motionVarients";

export const CategoryCard = ({
  subcategory,
  image,
}: {
  category: string;
  subcategory: string;
  image: string;
}) => (
  <motion.div
    variants={childVariants}
    className="w-full h-52 md:h-60"
  >
    <Link
      to={`/brands/${subcategory}`}
      className="text-center p-6 group rounded-xl bg-white/20 shadow-[inset_-5px_-5px_15px_0px_rgba(255,255,255)] backdrop-blur-md block transition-all duration-500 h-full w-full"
    >
      <div className="h-32 mb-4">
        <img
          src={image}
          alt={subcategory}
          className="w-full h-full object-contain group-hover:-translate-y-2 transition-all duration-500"
        />
      </div>
      <p className="font-medium capitalize group-hover:-translate-y-1 transition-all duration-500">
        {subcategory}
      </p>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <Link
          to={`/brands/${subcategory}`}
          className="text-sm text-center text-slate-900 rounded inline-block"
        >
          View Details
        </Link>
      </div>
    </Link>
  </motion.div>
);
