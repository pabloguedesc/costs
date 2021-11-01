import { BrowserRouter as Router } from "react-router-dom"
import Container from "./layout/Container"
import Routes from "./routes/Routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-heigth">
        <Routes />
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
