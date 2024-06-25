import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Educations/Education";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import WorkEx from "./pages/WorkEx/WorkEx";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import Mobilenav from "./components/MobileNav/Mobilenav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <Mobilenav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkEx />
          <Contact />
        </div>
        <Tada>
          <div className="footer pb-3 ms-3">
            <h6 className="text-center">
              Made with ❤️ Sandarbh Bajpai &copy; 2024
            </h6>
          </div>
        </Tada>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
