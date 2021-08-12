import logo from './logo.svg';
import './App.css';
import Hero from "./Components/Hero/index"
import About from "./Components/About/index"
import Photography from "./Components/Photography/index"

function App() {
  return (
    <div className="App">

      <section className="child">
        <Hero />
      </section>
      <section className="child">
        <About />
      </section>
      <section className="child">
        <Photography />
      </section>



    </div>
  );
}

export default App;
