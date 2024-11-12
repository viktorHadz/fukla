import "./normalize.css";
import "./style.css";

import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { AllRoutes } from "./components/routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <AllRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
