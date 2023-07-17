import "./App.css";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";

function App() {
  return (
    <>
      <div id="containers" className="min-[1400px]:w-[90rem] mx-auto p-standart h-[2000000000px]">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
