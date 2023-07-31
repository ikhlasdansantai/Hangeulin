import "./App.css";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";

function App() {
  return (
    <>
      <div id="containers" className="min-[1400px]:w-[90rem] mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
