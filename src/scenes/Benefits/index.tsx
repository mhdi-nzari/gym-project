import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

import { BenefitsType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitsType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of The Art Factilies s",
      description:
        "He watched the dancing piglets with panda bear tummies in the swimming",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "The stranger officiates the meal",
      description:
        "There's a growing trend among teenagers of using frisbees as go-cart",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "When motorists sped in and out",
      description:
        "traffic, all she could think of was those in need of a transplant I ate a sock",
    },
  ],
  container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

const Benefits = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full  w-5/6  py-20">
      {/* Headers */}
      <motion.div>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.About)}
         id="about"
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: 50,
            },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>More Than Just Gym</HText>
          <p className="my-5 text-sm font-semibold">
            We provided you Classmate and support Ultimated fitness goals with
            ease but We have't Big Money for Insurance in product shop often we
            hungry in home each and every Member.{" "}
          </p>
        </motion.div>

        {/* Benefits */}

        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
          id="benefits"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((item: BenefitsType) => (
            <Benefit
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphic and Desctription */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitsPageGraphic}
            className="mx-auto"
            alt="benefits-page-graphic"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 50,
                    },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions Of Happy Members Getting
                    <span className="text-primary-500">Fit</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Descript */}
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                f you're visiting this page, you're likely here because you're
                searching for a random sentence. Sometimes a random word just
                isn't enough, and that is where the random sentence generator
                comes into play. By inputting the
              </p>
              <p className="mb-5">
                f you're visiting this page, you're likely here because you're
                searching for a random sentence. Sometimes a random word just
                isn't enough, and that is where the random sentence generator
                comes into play. By inputting the
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:right-40 before:-bottom-20 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
