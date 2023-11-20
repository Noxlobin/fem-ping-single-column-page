import logo from "./images/logo.svg";

function App() {
  return (
    <main>
      <div className="mx-12 my-10">
        <img src={logo} alt="" className="block mx-auto my-6" />
        <h1 className="text-4xl text-center font-light my-6 text-gray leading-loose">
          We are launching soon!
        </h1>
      </div>
    </main>
  );
}

export default App;
