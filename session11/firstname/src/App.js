import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider";

function App() {
  return (
    <div className="container">
      <h1 className="text-center text-bg-primary p-2">Welcome to gigame</h1>
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
