import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Resume from "../../assets/docs/resume.pdf";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // Hanlde theme
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme == "light" ? (
            <BsFillMoonFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Fullstack Developer !",
                    "MERN Stack Developer !",
                    "React-native developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://avatars.githubusercontent.com/u/118759857?v=4"
                rel="norefferer"
                target="_blank"
              >
                Hire Me
              </a>
              {/* <button className="btn btn-hire"> Hire Me </button> */}
              <a className="btn btn-cv" href={Resume} download="sandarbhcv.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
