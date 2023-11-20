import logo from "./images/logo.svg";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  console.log(email);

  return (
    <main>
      <div className="mx-12 my-10">
        <img src={logo} alt="" className="block mx-auto my-6" />
        <h1 className="text-4xl text-center font-light my-6 text-gray tracking-wide leading-10">
          We are launching <span className="font-bold text-vdb">soon!</span>
        </h1>
        <p className="my-7 text-center text-vdb">Subscribe and get notified</p>
        <div className="flex justify-center my-16">
          <div className="mt-4">
            <label
              htmlFor="email-field"
              className={"border border-gray/30  py-4 px-6 w-60 rounded-full "}
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
            <p className="mt-5 text-sm italic text-lightred">
              Please provide an email address
            </p>
          </div>
          <button className="bg-blue py-3 px-12 text-white font-semibold ml-16 mb-6 text-sm rounded-full transition duration-200 hover:bg-paleblue shadow-paleblue shadow-lg">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
