import Bot from "../../src/assets/image/inverted-commas@3x (1).png";
import Top from "../../src/assets/image/inverted-commas@3x.png";
const Section2 =() => {
    return (
        <div className="sec2_container">
            <div className="top_img">
                <img src={Top} alt=""/>
            </div>
            <div className="mid_content">
                <p>Our aim is to maximize the objectivity of screening dyslexia. Being in the field of cutting edge data science technology, there is no human in the processing loop. All these estimates are completed by a computer using Atrifical Intelligence algorithms trained on a large dataset.</p>
            </div>
            <div className="bot_img">
                <img src={Bot} alt=""/>
            </div>
        </div>
    );

};
export default Section2;