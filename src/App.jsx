import logo from "./images/logo.svg";
import dashboard from "./images/illustration-dashboard.png";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("");
  const [isNotValid, setIsNotValid] = useState(false);

  const validateEmail = () => {
    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") < email.indexOf(".")
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  return (
    <main>
      <div className="mx-12 my-8">
        <img src={logo} alt="" className="block mx-auto my-6 mb-11" />
        <h1 className="text-4xl text-center font-light my-6 text-gray tracking-wide leading-10">
          We are launching <span className="font-bold text-vdb">soon!</span>
        </h1>
        <p className="my-4 text-center text-vdb">Subscribe and get notified</p>
        <div className="flex justify-center my-14 mb-7">
          <div className="mt-2">
            <label
              htmlFor="email-field"
              className={
                isNotValid
                  ? "border border-lightred  py-4 px-6 w-60 rounded-full mt-6"
                  : "border border-gray/30  py-4 px-6 w-60 rounded-full mt-6"
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
        <Footer />
      </div>
    </main>
  );
}

export default App;
