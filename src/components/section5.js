import Clock from "../../src/assets/image/Icon feather-clock.png";
const Section5 =() => {
    return(
        <>
     <div className="sec4_container container">
        <h2>Reading Time</h2>
        </div>
        <div className="main4_con container">
            <div className="cont1">
                <h5>Average Reading Reaction Time</h5>
                <p>Indicates the average RRT for all the words you have read.</p>
                <div className="cont2">
                    <h3>2.34<span>seconds</span></h3>
                    <img src={Clock} alt=""/>

                </div>
            </div>
            <div className="cont1">
                <h5>Average Reading Reaction Time</h5>
                <p>Indicates the average RRT for the real words you have read.</p>
                <div className="cont2">
                <h3>2.44<span>seconds</span></h3>
                    <img src={Clock} alt=""/>

                </div>
            </div>
            <div className="cont1">
                <h5>Average Reading Reaction Time on real words</h5>
                <p>Indicates the average RRT for all the words you have read.</p>
                <div className="cont2">
                <h3>2.24<span>seconds</span></h3>
                    <img src={Clock} alt=""/>

                </div>
            </div>
        </div>
        </>

    );
};
export default Section5;