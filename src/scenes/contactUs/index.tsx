import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const inputStyle = `outline-none w-full rounded-xl bg-secondary-400 px-10 py-5 placeholder-white my-1`;

const index = ({ selectedPage, setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Headers */}
        <motion.div
          className="md:w-3/5"
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
          <HText>
            <span className="text-primary-500"> Join Now </span> To Get In Ship
          </HText>
          <p className="my-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Far far away,
            behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-101 basis-3/5 md:mt-5"
          >
            <form
              action="https://formsubmit.co/mahdi-nazari.gb008@gmail.com"
              method="POST"
              target="_blank"
              onSubmit={onSubmit}
              className=""
            >
              <input
                className={inputStyle}
                type="text"
                id=""
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This Field is required"}
                  {errors.name.type === "required" && "Max length is  100 char"}
                </p>
              )}
              <input
                className={inputStyle}
                type="text"
                id=""
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This Field is required"}
                  {errors.email.type === "pattern" && "invalid Email address"}
                </p>
              )}

              <textarea
                className={inputStyle}
                cols={5}
                rows={4}
                id=""
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 200,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This Field is required"}
                  {errors.message.type === "required" &&
                    "Max length is  200 char"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-400 px-20 py-3 font-bold transition duration-500 hover:bg-primary-500 hover:text-white"
              >
                Send
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              delay:0.2
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >

               <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic} className="w-full" alt="contat-us-page-graphic" />
               </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
