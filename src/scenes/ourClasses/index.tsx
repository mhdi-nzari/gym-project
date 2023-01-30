import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import Class from "./Class";
type Props = {
     selectedPage: SelectedPage;
     setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Body Combat ",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    image: image1,
  },
  {
    name: "Yoga Programs",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    image: image2,
  },
  {
    name: "Cycling Program",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    image: image3,
  },
  {
    name: "Boxing Fitness",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    image: image4,
  },
  {
    name: "Swimming Program",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    image: image5,
  },
  {
    name: "Human Massage",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    image: image6,
  },
];
const index = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClassess)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR Classess</HText>
            <p className="py-5 leading-6">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </motion.div>
        <div className="mt-11 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
