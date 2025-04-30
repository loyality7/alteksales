import HeadingWithLabel from "../HeadingWithLabel";

export const SectionWrapper = ({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="mt-10 scroll-mt-24 md:p-8 p-4 px-4 rounded-3xl neumorphism mx-4 bg-gradient-2 preserve-3d "
    >
      <HeadingWithLabel title={title} />
      <ul className="p-6 pt-0 flex flex-col">
        <li className="text-slate-800 text-center list-decimal w-fit">
          A++ Grade Quality
        </li>
        <li className="text-slate-800 text-center list-decimal w-fit">
          Used Branded Laptops & Desktops
        </li>
        <li className="text-slate-800 text-center list-decimal w-fit">
          For bulk orders.
        </li>
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
        {children}
      </div>
    </section>
  );
};
