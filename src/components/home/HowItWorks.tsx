import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { X } from "react-feather";

const HowItWorks = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(true);

    const timer = setTimeout(() => {
      setShowModal(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  console.log(showModal);
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-[999] flex justify-center items-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { when: "afterChildren", delay: 0.5 },
          }}
        >
          <motion.div
            className="rounded-lg border bg-white border-gray-100 w-full shadow-xl max-w-xs p-6 text-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -100 }}
          >
            <div className="flex flex-col gap-4 relative">
              <h2 className="text font-semibold font-space">How It Works?</h2>
              <button onClick={handleClose} className="absolute top-0 right-0">
                <X size={16} />
              </button>
              <ul className="flex gap-2 flex-col font-space text-xs">
                <li>
                  1. Add items to your cart by clicking the &quot;Add to
                  Cart&quot; button on the product page.
                </li>
                <li>2. Click the &quot;Send&quot; button in your cart.</li>
                <li>
                  3. Your cart items will be received by our Sales Executive.
                </li>
                <li>
                  4. Our Sales Executive will call you to get delivery
                  instructions, install software, and explain discount offers.
                </li>
              </ul>
            </div>

            <div className="w-full mt-6">
              <h2 className="text-xl font-semibold pb-2">Key Features:</h2>
              <div className="grid grid-cols-2 text-black  font-space text-sm gap-2 text-xs">
                <p className="px-4 py-1 border rounded border-slate-700">
                  Scratch Less
                </p>
                <p className="px-4 py-1 border rounded border-slate-700">
                  7 Days Return
                </p>
                <p className="px-4 py-1 border rounded border-slate-700">
                  3 months Warranty
                </p>
                <p className="px-4 py-1 border rounded border-slate-700">
                  3 months Free Service
                </p>
                <p className="px-4 py-1 border rounded border-slate-700">
                  Free Software Installation{" "}
                  <sup className="text-red-500">*</sup>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HowItWorks;
