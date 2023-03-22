import Percent from "../../src/assets/image/percent.png";
const Section3 =() => {
    return (
        <div className="sec3_container">
            <div className="left_content3">
                <h2>90% Likelihood of Dyslexia.</h2>
                <p>It can be challenging to determine what steps to take when you suspect your child may have a learning disorder. Although the internet provides much information about specific learning disorders and support strategies, sometimes contacting your local learning disorder association may help.</p>
                <p>Dyslexia is complex and may require more analysis to reach a conclusion. Nevertheless, an overall likelihood score of more than 70% should lead you to seek advice from an accredited professional. Please scroll further to see what the score is for each of the metrics we have described above.</p>
            </div>
            <div className="right_img3">

                <img src={Percent} alt=""/>
                        {/* <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="300" height="300"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle class="circle-chart__background" stroke="#a6cee3" stroke-width="2" fill="none"
                                cx="16.91549431" cy="16.91549431" r="15.91549431" />
                            <circle class="circle-chart__circle" stroke="#005c97" stroke-width="2"
                                stroke-dasharray="90,100" stroke-linecap="round" fill="none" cx="16.91549431"
                                cy="16.91549431" r="15.91549431" />
                            <g class="circle-chart__info">
                                <text class="circle-chart__percent" x="16.91549431" y="15.5"
                                    alignment-baseline="central" text-anchor="middle" font-size="8">90%</text>
                            </g>
                        </svg> */}
            </div>
        </div>
    );
};
export default Section3;