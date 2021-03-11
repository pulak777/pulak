import Header from "./components/header/Header";
import Navbar from './components/header/Navbar'
import About from "./components/others/About";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Navbar />
      <Header />

      <About />
    </div>
  );
}

export default App;
