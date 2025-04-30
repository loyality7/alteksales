import { createBrowserRouter, Link, Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetails";
import Contact from "./pages/contact";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Brands from "./pages/Brands";
import { ArrowUp, Phone } from "react-feather";
// import AccessoriesProductDetails from "./pages/AccessoriesProductDetails";
import AccessoriesProductDetails from "./pages/AccessoriesProductDetails";
import Filter from "./pages/text/Filter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/product/accessories/:id",
        element: <AccessoriesProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/brands/:brand",
        element: <Brands />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "*",
        element: (
          <div className=" min-h-[70vh] flex items-center flex-col justify-center gap-6">
            <span className="md:text-3xl text-sm">Looks like you are lost</span>
            <Link to="/" className="px-4 py-2 bg-red-700 text-white">
              Go Home
            </Link>
          </div>
        ),
      },
    ],
  },
]);

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Filters from "./pages/text/FIlter";

function BackToTopButton() {
  // State to track if the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and show the button when scrolled down 50%
  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position and total document height
      const scrollPosition = window.scrollY;
      // const documentHeight = document.documentElement.scrollHeight;
      // const windowHeight = window.innerHeight;

      // Show button if scrolled past 50% of the window height
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="size-9 bg-emerald-600 p-2 rounded-full text-white flex justify-center items-center animate-bounce"
      style={{
        display: isVisible ? "flex" : "none",
      }}
    >
      <ArrowUp size={16} />
    </button>
  );
}

function Layout() {
  return (
    <AnimatePresence>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="max-w-screen-xl mx-auto py-6 md:py-10 h-full w-full flex-1">
          <Outlet />
        </div>

        <div className="fixed bottom-6 left-6 flex justify-center items-center">
          <BackToTopButton />
        </div>

        <div className="fixed bottom-6 right-6 flex gap-10 flex-col">
          <Link
            to="tel:8861723693"
            className="size-9 bg-emerald-600 p-2 rounded-full text-white flex justify-center items-center relative ripple @apply before:bg-emerald-500/40 before:animate-ping"
          >
            <Phone size={16} />
          </Link>
          <Link
            to="https://api.whatsapp.com/send?phone=918861723693"
            className="size-9 bg-emerald-600 p-2 rounded-full text-white flex justify-center items-center ripple @apply before:bg-emerald-500/40 before:animate-ping before:animation-delay-[500ms]"
          >
            {/* <MessageSquare size={16} /> */}
            <img src="/whatsapp1.svg" />
          </Link>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
