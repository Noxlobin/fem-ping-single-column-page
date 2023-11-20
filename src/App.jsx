import logo from "./images/logo.svg";
import dashboard from "./images/illustration-dashboard.png";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isNotValid, setIsNotValid] = useState(false);

  const validateEmail = () => {
    if (email.includes("@") && email.includes(".")) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  return (
    <main>
      <div className="mx-12 my-9">
        <img src={logo} alt="" className="block mx-auto my-6 mb-11" />
        <h1 className="text-4xl text-center font-light my-6 text-gray tracking-wide leading-10">
          We are launching <span className="font-bold text-vdb">soon!</span>
        </h1>
        <p className="my-4 text-center text-vdb">Subscribe and get notified</p>
        <div className="flex justify-center my-14 mb-10">
          <div className="mt-2">
            <label
              htmlFor="email-field"
              className={
                "border border-gray/30  py-4 px-6 w-60 rounded-full mt-6"
              }
            >
              <input
                type="text"
                id="email-field"
                className="outline-none w-[100%]"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <p
              className={
                isNotValid
                  ? "mt-5 text-sm italic text-lightred "
                  : "mt-5 text-sm italic text-lightred hidden"
              }
            >
              Please provide an email address
            </p>
          </div>
          <button
            className="bg-blue py-4 px-12 text-white font-semibold ml-16 mb-6 text-sm rounded-full transition duration-200   hover:bg-paleblue shadow-paleblue shadow-lg"
            onClick={validateEmail}
          >
            Notify Me
          </button>
        </div>
        <img src={dashboard} alt="" className="w-[40%] block mx-auto" />
        <div className="mt-4 mx-auto w-fit">
          <div className="flex space-x-4">
            <div className="p-4 rounded-full border border-gray px-[1.2rem] fill-blue cursor-pointer hover:fill-white hover:bg-blue transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
            <div className="p-4 rounded-full border border-gray px-[1.2rem] fill-blue cursor-pointer hover:fill-white hover:bg-blue transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
            <div className="p-4 rounded-full border border-gray px-[1.2rem] fill-blue cursor-pointer hover:fill-white hover:bg-blue transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
