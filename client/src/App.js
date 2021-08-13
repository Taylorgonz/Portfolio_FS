import './App.css';;
import Hero from "./Components/Hero/index";
import About from "./Components/About/index";
import Photography from "./Components/Photography/index";
import Upload from './Components/Upload/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/upload" render={()=> <Upload/>}/>
      </Switch>

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
