import secd from "../Images/sectiond.png";
import secd_video from "../Images/secd_vid.m4v";
const SectionD = () => {
  return (
    <div className="section_b">
      <div className="container">
        <div className="col" id="sec_d" >
          <div className="text">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="image">
            <video autoPlay loop className="secd_video">
              <source src={secd_video} />
            </video>
            <img src={secd} alt="secb can't load" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionD;
