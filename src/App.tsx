import CurrentSection from "./components/CurrentSection";
import Cursor from "./components/Cursor";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Me from "./sections/me";
import Projects from "./sections/projects";
import Skills from "./sections/skills";


export default function App() {
  return (
    <>
      <Cursor />
      <div className="relative flex flex-col">
        <div>
          <CurrentSection />
          <Navbar />
        </div>
       <List list={[<Me />, <Skills />, <Projects />]} />
      </div>
    </>
  );
}
