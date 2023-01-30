import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponserRedBull from "@/assets/SponsorRedBull.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 pb-10 pt-32 md:h-full md:pb-0"
    >
      {/* Image and main header */}
      <motion.div
      onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
      className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-10 md:mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true , amount:0.5}}
          transition={{
               duration: 1
          }}
          variants={{
               hidden:{
                    opacity:0 , x:50
               },
               visible:{opacity:1 , x:0}

          }}
          className="md:-mt-20">
            <div className="relative">
              <div className="before: before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm leading-5">
              Unfortuntly discuaction forest theme and learn Course this job my
              word simple president and love best Royall ,,, Dream of .. Great
              on all Diffrent kind
            </p>
          </motion.div>

          {/* actions */}
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{once:true , amount:0.5}}
           transition={{
                duration: 1,
                delay:0.2
           }}
           variants={{
                hidden:{
                     opacity:0 , x:50
                },
                visible:{opacity:1 , x:0}
 
           }}
            className="mt-8 flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-secondary-500 underline hover:text-primary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* images */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-0 md:justify-items-end">
          <img className="w-11/12" src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* sponsers */}

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 lg:mt-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-evenly gap-8">
              <img src={SponserRedBull} alt="SponserRedBull" />
              <img src={SponserFortune} alt="SponserFortune" />
              <img src={SponserForbes} alt="SponserForbes" />
              <img src={SponserRedBull} alt="SponserRedBull" />
              <img src={SponserForbes} alt="SponserForbes" />
              <img src={SponserFortune} alt="SponserFortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
