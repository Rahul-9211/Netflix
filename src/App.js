
import "./App.css";
import Footer from "./Netflix/Footer";
import Line from "./Netflix/Line";
import Navbar from "./Netflix/Navbar";
import Ques from "./Netflix/Ques";
import SectionA from "./Netflix/SectionA";
import SectionB from "./Netflix/SectionB";
import SectionC from "./Netflix/SectionC";
import SectionD from "./Netflix/SectionD";
import SectionE from "./Netflix/SectionE";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SectionA/>
      <Line/>
      <SectionB/>
      <Line/>
      <SectionC/>
      <Line/>
      <SectionD/>
      <Line/>
      <SectionE/>
      <Line/>
      <Ques/>
      <Line/>
      <Footer/>
    </div>
  );
};

export default App;
