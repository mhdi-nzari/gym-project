import Logo from "@/assets/Logo.png";



type Props = {}

const index = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            non saepe id ullam modi adipisci tenetur, qui, ut, labore temporibus
            iusto nesciunt vel. Sit dolore incidunt sint consectetur, ducimus
            tempore?
          </p>

          <p>
            ©{year} All Right Reversed{" "}
            <a
              className="text-sm text-secondary-500"
              href="www.mahdi-nazari.ir"
            >
              Mahdi Nazari
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa Et Gravida id Et</p>
          <p className="my-5">Massa Et Gravida id Et</p>
          <p className="my-5">Massa Et</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Tempus Miss and Rich out</p>
          <p className="my-5">this is a junk</p>
          <p className="my-5">(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
}

export default index