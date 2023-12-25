import List from "./components/List";
import Navbar from "./components/Navbar";

import "swiper/css"
export default function App() {
  return (
    <>
      <div className="relative flex flex-col">
        <div>
          <Navbar />
        </div>
       <List />
      </div>
    </>
  );
}
