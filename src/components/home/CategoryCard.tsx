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
    className="relative h-52 md:h-60 max-w-full w-48"
  >
    <Link
      // to={`/category/${category}?subcategory=${subcategory}`}
      to={`/brands/${subcategory}`}
      className="text-center p-6 group rounded-xl bg-white/20 shadow-[inset_-5px_-5px_15px_0px_rgba(255,255,255)] backdrop-blur-md block transition-all duration-500 h-full w-full absolute hover:h-64 z-20 translate-z-0 hover:translate-z-10"
    >
      <div className="">
        <img
          src={image}
          alt={subcategory}
          className="w-full h-32 object-contain group-hover:-translate-y-20 transition-all duration-500"
        />
      </div>
      <p className="mt-2 font-medium capitalize group-hover:-translate-y-20 transition-all duration-500">
        {subcategory}
      </p>
      <div className="gap-2 pt-6 grid opacity-0 group-hover:opacity-100 group-hover:-translate-y-20 transition-all duration-500">
        <Link
          to={`/brands/${subcategory}`}
          className="text-sm  text-center self-center text-slate-900 rounded"
        >
          View Details
        </Link>
        {/* <Link
          to={`/brands/${subcategory}`}
          className="text-sm  text-center self-center text-slate-900 rounded"
        >
          View Details
        </Link>
        <Link
          to={`/brands/${subcategory}`}
          className="text-sm  text-center self-center text-slate-900 rounded"
        >
          View Details
        </Link> */}
      </div>
    </Link>
  </motion.div>
);
