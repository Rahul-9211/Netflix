import secC from "../Images/secC.jpg";
import banner from "../Images/banner.png";
import secb_video from "../Images/secb_vid.m4v";
import gif from "../Images/load.gif";
const SectionC = () => {
  return (
    <div className="section_c">
      <div className="container">
        <div className="col">
          <div className="text">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
          <div className="image">
            <img src={secC} alt="secb can't load" />
            <div className="col_2">
              <div className="img">
                <img src={banner} alt="banner can't load" />
              </div>
              <div className="content">
                <h3>Stranger Things</h3>
                <p>Downloading.....</p>
              </div>
              <div className="animation">
                {/* <video controls  autoPlay loop>
                                    <source src={gif} type="video/gif"/>
                                </video> */}
                <img src={gif} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionC;
