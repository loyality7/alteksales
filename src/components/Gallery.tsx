import { motion } from "motion/react";
import { useState } from "react";
import { X } from "react-feather";
// import { parentVariants } from "./home/SectionWrapper";
import { childVariants, parentVariants } from "../constants/motionVarients";

const images = [
  {
    src: "/gallery/gallery_1.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_2.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_3.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_4.jpeg",
    size: "col-span-2",
  },
  {
    src: "/gallery/gallery_5.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_6.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_7.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_8.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_9.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_10.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_11.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_12.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_13.jpeg",
    size: "col-span-2",
  },
  {
    src: "/gallery/gallery_14.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_15.jpeg",
    size: "",
  },
  {
    src: "/gallery/gallery_16.jpeg",
    size: "",
  },
];
// const images = [
//   {
//     src: "/gallery/gallery_1.jpeg",
//     size: "col-span-2",
//   },
//   {
//     src: "/gallery/gallery_2.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_3.jpeg",
//     size: "col-span-1",
//   },
//   {
//     src: "/gallery/gallery_4.jpeg",
//     size: "col-span-2",
//   },
//   {
//     src: "/gallery/gallery_5.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_6.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_7.jpeg",
//     size: "row-span-2 col-span-2",
//   },
//   {
//     src: "/gallery/gallery_8.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_9.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_10.jpeg",
//     size: "col-span-1",
//   },
//   {
//     src: "/gallery/gallery_11.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_12.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_13.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_14.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_15.jpeg",
//     size: "",
//   },
//   {
//     src: "/gallery/gallery_16.jpeg",
//     size: "col-span-1",
//   },
// ];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string): void => {
    setSelectedImage(imageSrc);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <div className="md:p-6 p-3 pt-8">
      {/* Gallery Grid */}
      <motion.div
        variants={parentVariants}
        initial="initial"
        whileInView="animate"
        className="grid grid-flow-dense grid-cols-3 bg-gray-50 md:grid-cols-5 md:gap-4 gap-4 auto-rows-[140px] sm:auto-rows-[150px]"
      >
        {images.map((image, index) => (
          <motion.button
            key={index}
            variants={childVariants}
            className={`relative bg-gray-50 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255)] focus:shadow-[0px_0px_20px_0px_rgba(255,255,255)] transition-all duration-500 rounded-md md:rounded-3xl w-full h-full flex justify-center items-center cursor-pointer ${image.size}`}
            onClick={() => handleImageClick(image.src)}
          >
            <motion.img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full hover:shadow-xl shadow-white"
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner clicks
          >
            {/* Close Button */}
            <button
              className="absolute -top-4 right-1 text-white bg-gray-700 rounded-full size-7 flex justify-center items-center hover:bg-gray-600"
              onClick={closeModal}
            >
              <X />
            </button>
            {/* Modal Image */}
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="object-contain max-w-[90vw] max-h-[90vh] w-auto h-auto rounded shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export { Gallery };
