import { AnimatePresence, motion } from "motion/react";
import { Phone } from "react-feather";
import { Link, ScrollRestoration } from "react-router";
import { images } from "../assets/images";
import { Gallery } from "../components/Gallery";
import HeadingWithLabel from "../components/HeadingWithLabel";
import { CategoryCard } from "../components/home/CategoryCard";
import Navbar from "../components/home/Navbar";
import { SectionWrapper } from "../components/home/SectionWrapper";
import { MotionLink } from "../components/MotionLink";
import { ProductCard } from "../components/ProductCard";
import { featuredProducts } from "../constants/featuredProducts";
import { childVariants, parentVariants } from "../constants/motionVarients";
import { allProducts } from "../constants/productDataR";
import HowItWorks from "../components/home/HowItWorks";

const Accessories = allProducts.accessories
  .sort((a, b) => {
    return b.products.length - a.products.length;
  })
  .map((item) => ({
    id: item.id,
    subcategory: item.subcategory,
    image: "/" + item.subcategory.toLowerCase() + ".png",
  }));

console.log(Accessories);

const HomePage = () => {
  const laptopTypes = [
    {
      category: "laptop-types",
      subcategory: "workstation",
      image: images.laptopTypes[0],
      type: "laptop",
    },
    // {
    //   category: "laptop-types",
    //   subcategory: "gaming",
    //   image: images.laptopTypes[1],
    //   type: "laptop",
    // },
    {
      category: "laptop-types",
      subcategory: "programming",
      image: images.laptopTypes[2],
      type: "laptop",
    },
  ];

  const laptopSpares = [
    {
      category: "spares",
      subcategory: "Screen",
      image: images.spares[0],
    },
    {
      category: "spares",
      subcategory: "Battery",
      image: images.spares[1],
    },
    {
      category: "spares",
      subcategory: "Charger",
      image: images.spares[2],
    },
    {
      category: "spares",
      subcategory: "Screen Protector",
      image: images.spares[3],
    },
    {
      category: "spares",
      subcategory: "Keyboard",
      image: images.spares[4],
    },
    {
      category: "spares",
      subcategory: "Touchpad",
      image: images.spares[5],
    },
    {
      category: "spares",
      subcategory: "Ram",
      image: images.spares[6],
    },
  ];

  return (
    <div className="font-sans">
      <div className="md:mt-16 hidden md:block">
      
      </div>
      <div>
        <Navbar />
      </div>
      {/* Banner */}
      <div className=" min-h-[200px]  mx-4 bg-white neu text-slate-900 my-6 md:mt-8 py-8 gap-4 relative rounded-3xl  flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold rounded-xl text-center max-w-72 md:max-w-full">
          Big Discounts on{" "}
          <span className="bg-gradient-to-l from-orange-700 via-red-500 to-red-700 block bg-clip-text text-transparent">
            Used Branded Laptops
          </span>
        </h2>
        <img src="/hero.png" alt="" className="w-full max-w-64" />
        <img
          src="/hero2.png"
          alt=""
          className="w-full absolute object-contain md:object-cover h-full md:h-auto top-0 bottom-0 md:max-w-[60%]"
        />
        <div className="flex gap-2 flex-col items-center">
          <p className="text-xl rounded-xl  text-shadow">upto 35% off</p>
          <p className="text-2xl rounded-xl text-emerald-500 text-shadow">
            Hurry
          </p>
        </div>
      </div>
      <ScrollRestoration />

      {/* Featured Products */}
      <section
        id={"bulk-order"}
        className="mt-10 scroll-mt-24 rounded neu bg-gray-50 pt-4 mx-4"
      >
        <HeadingWithLabel title={"Bulk Orders"} />
        <div className="p-6 pb-0 flex flex-col gap-2">
          <p className="text-slate-800 text-center">For bulk orders.</p>
          <div className="flex gap-6 divide-x-4 justify-center">
            <div className="flex gap-2 items-center">
              <p className="text-slate-800">Chat</p>
              <Link
                to="https://api.whatsapp.com/send?phone=919019926904"
                className="size-7 bg-emerald-600 p-2 rounded-full text-white flex justify-center items-center before:bg-emerald-500/40 before:animate-ping before:animation-delay-[500ms]"
              >
                {/* <MessageSquare size={16} /> */}
                <img src="/whatsapp1.svg" />
              </Link>
            </div>
            <div className="flex gap-2 items-center pl-6">
              <p className="text-slate-800">Call</p>
              <Link
                to="tel:9019926904"
                className="size-7 bg-emerald-600 p-2 rounded-full text-white flex justify-center items-center relative  before:bg-emerald-500/40 before:animate-ping"
              >
                <Phone size={16} />
              </Link>
            </div>
          </div>
        </div>
        <Gallery />
      </section>

      {/* Featured Products */}
      <SectionWrapper id="laptop-gallery" title="Laptop & Desktop Gallery">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="h-24 flex justify-center col-span-2 items-center w-full flex-col">
            <p>Stock will be added shortly. Visit Again.</p>
            <p>Thank You...</p>
          </div>
        )}
      </SectionWrapper>

      {/* Laptop Types */}
      <section
        id={"laptop-types"}
        className="mt-10 scroll-mt-24 md:p-8 p-4 rounded-3xl neumorphism mx-4 bg-gradient-2 preserve-3d "
      >
        <HeadingWithLabel title="Laptop Types" />
        <motion.div
          variants={parentVariants}
          initial="animate"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gamd:p-8 p-4 justify-items-center"
        >
          {laptopTypes.map((category, index) => (
            <MotionLink
              variants={childVariants}
              initial="animate"
              key={category.subcategory + index}
              to={`/category/${category.category}?subcategory=${category.subcategory}`}
              className="text-center p-6 shadow group rounded-xl"
            >
              <img
                loading="eager"
                src={category.image}
                alt={category.subcategory}
                className="w-full h-32 object-contain group-hover:scale-105 transition-all duration-500"
              />
              <p className="mt-2 font-medium capitalize">
                {category.subcategory}
              </p>
            </MotionLink>
          ))}
        </motion.div>
      </section>

      {/* New Accessories */}
      <section
        id="new-accessories"
        className="mt-10 scroll-mt-24 md:p-8 p-4 rounded-3xl neu mx-4  preserve-3d "
      >
        <HeadingWithLabel title="New Accessories" />

        <motion.div
          variants={parentVariants}
          initial="animate"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gamd:p-8 p-4 justify-items-center"
        >
          {Accessories.map((category, index) => (
            <motion.div
              variants={childVariants}
              initial="animate"
              key={index + category.subcategory}
              className="relative h-52 md:h-60 max-w-full w-48"
            >
              <Link
                to={`/brands/${category.subcategory}`}
                className="text-center p-6 group rounded-xl bg-gradient-to-b from-[#ffffff] to-[#f65e47] backdrop-blur-md block transition-all duration-500 h-full w-full absolute hover:h-64 z-20 translate-z-0 hover:translate-z-10 shadow-[inset_-0px_-10px_10.px_0px_rgb(246,94,71,1)]"
              >
                <div className="">
                  <img
                    loading="eager"
                    src={category.image}
                    alt={category.subcategory}
                    className="w-full h-32 object-contain group-hover:-translate-y-20 transition-all duration-500"
                  />
                </div>
                <p className="mt-2 font-medium capitalize group-hover:-translate-y-20 transition-all duration-500">
                  {category.subcategory}
                </p>
                <div className="gap-2 pt-6 grid opacity-0 group-hover:opacity-100 group-hover:-translate-y-20 transition-all duration-500">
                  <Link
                    to={`/brands/${category.subcategory}`}
                    className="text-sm  text-center self-center text-slate-900 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Laptop Spares & Accessories */}
      <section
        id="spares-and-services"
        className="mt-10 scroll-mt-24 md:p-8 p-4 rounded-3xl neumorphism mx-4 bg-gradient-2 preserve-3d "
      >
        <HeadingWithLabel title="Laptop Spares & Services" />
        <motion.div
          variants={parentVariants}
          initial="animate"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gamd:p-8 p-4 justify-items-center"
        >
          {laptopSpares.map((category, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              initial="animate"
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Coming Soon Stocks */}
      <ComingSoonSection />

      <AnimatePresence mode="wait">
        <HowItWorks />
      </AnimatePresence>
    </div>
  );
};

export default HomePage;

const ComingSoonSection = () => {
  return (
    <div
      id="coming-soon"
      className="mt-10  mx-4 rounded-3xl neumorphism bg-gradient-to-b from-[#ffffff] to-[#e0e0e0] p-6 text-[#0081a7]"
    >
      <HeadingWithLabel title="Coming Soon" />
      <div className="">
        <div className="h-24 flex justify-center items-center w-full ">
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};
