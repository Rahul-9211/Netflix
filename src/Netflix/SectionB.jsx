import secb from "../Images/sectionb.png"
import secb_video from "../Images/secb_vid.m4v"
const SectionB = () => {
  return (
    <div className="section_b">
        <div className="container">
            <div className="col">
            <div className="text">
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
            </div>
            <div className="image">
                <video  autoPlay playsinline muted loop >
                    <source  src={secb_video}/>
                </video>
                <img src={secb} alt="secb can't load" />
            </div>
            </div>
        </div>
    </div>
  );
}

export default SectionB;
