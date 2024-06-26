import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/yoi-logo.png";

const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('.//../public/hero.png')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#fce6d5] mix-blend-color"></motion.div>

      <div className="absolute top-10 hidden justify-between sm:w-[90%] lg:flex lg:max-w-[1440px]">
        <div>
          <Link
            href="#work"
            onClick={handleScroll}
            aria-label="Scroll to Work Section"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#ee7214] py-2 px-4 text-[14px] font-semibold text-[#ee7214] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              VIEW PROJECT
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#ee7214] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://www.instagram.com/yoi_visual/"
            target="_blank"
            aria-label="View Instagram Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#ee7214] md:text-[16px]"
              variants={bodyAnimation}
            >
              IG
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#ee7214] md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#ee7214] md:text-[16px]"
              variants={bodyAnimation}
            >
              TW
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}   `}
        >
          <AnimatedWords
            title="YO! VISUAL"
            style="inline-block text-[#ee7214] overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="YO! Visual"
              data-blobity-tooltip="yoo"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#ee7214] md:text-[20px] lg:text-left">
            We work for video production, video editing and motion graphic,
            currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#ee7214] md:text-[20px]">
            You have idea? let us create it, base in Malang, Indonesia
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
