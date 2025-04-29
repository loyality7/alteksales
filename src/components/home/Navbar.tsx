import { Link } from "react-router";

const navbarConfig = {
  links: [
    {
      to: "#bulk-order",
      label: "Bulk Order",
    },
    {
      to: "#laptop-gallery",
      label: "Laptop Gallery",
    },
    {
      to: "#laptop-types",
      label: "Laptop Types",
    },
    {
      to: "#new-accessories",
      label: "New Accessories",
    },
    {
      to: "#spares-and-services",
      label: "Spares & Services",
    },
    {
      to: "#coming-soon",
      label: "Coming Soon",
    },
    {
      to: "/contact",
      label: "Contact",
    },
  ],
};

function Navbar() {
  return (
    <nav className={"border-b pt-12 block md:hidden"}>
      <div className="pb-4">
        <p className="text-sm text-center">
          This site is under construction. Visit Again.
        </p>
        <p className="text-sm text-center">Sale Starts Soon...</p>
      </div>
      <ul
        className={
          "grid grid-flow-row-dense mx-4 grid-cols-2 gap-2 px-2 flex-wrap"
        }
      >
        {navbarConfig.links.map((link, index) => (
          <li key={index} className="inset-shadow">
            <Link
              to={link.to}
              className={
                "px-4 py-1 block bg-emerald-600 text-center rounded-lg inset-bottom-shadow text-slate-100 hover:bg-emerald-900 relative z-[50]"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
