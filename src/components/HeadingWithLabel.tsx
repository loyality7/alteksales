
const HeadingWithLabel = ({ title }: { title: string }) => {
  return (
    <div className="absolute teared -translate-y-12 -translate-x-9 w-full   md:w-[400px] pl-8">
      <h2 className="text-2xl font-semibold z-[12] rounded-xl text-shadow">
        {title}
      </h2>
      {/* <img
        src="/text-bg.png"
        alt=""
        className="md:w-full w-[250px] absolute h-10 -top-[52px] -left-6 z-[10] drop-shadow-xl max-w-[380px]"
      /> */}
    </div>
  );
};

export default HeadingWithLabel;
