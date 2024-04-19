import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section
      id="work"
      className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#ee7214] bg-cover bg-center pt-20 pb-20 md:pb-16 lg:pb-32"
    >
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"Projects"}
          style={`flex w-full flex-col items-start text-center justify-center text-[76px] ${monaSans.className} font-extrabold uppercase leading-[1.1em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[76px] md:text-[190px] lg:text-center lg:text-[215.04px]`}
        />
        <AnimatedBody
          text="Some video projects that we have produced."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-1 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-2 lg:w-[850px]">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
