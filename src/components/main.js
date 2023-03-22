import Right from "../../src/assets/image/clip-report.png";
import Email from "../../src/assets/image/mail@3x.png";
import Letter from "../../src/assets/image/send-email-2@3x.png";

const Main = () => {
  return (
    <>
      <div className="main_container">
        <div className="left_img">
          <h1>
            Dyslexia
            <br />
            <span>
              Screening
              <br />
              Report
            </span>
          </h1>

          <div className="left_main">
            <div className="left_12">
              <div>
              <h5>Your Refrence</h5>
              <p>John Smith</p>
              </div>
              <div>
              <h5>Your Email</h5>
              <p>hello@dystech.com.au</p>
              </div>  
            </div>
            <div className="left_14"> 
              <button>
                <img src={Email} alt="" /> Email This Report
              </button>
               <button>
                 <span> <img src={Letter} alt="" />
                 </span> Support Letter Template
                </button>
            </div>
          </div>
        </div>
        <div className="right_img">
          <img src={Right} alt="" />
        </div>
      </div>
    </>
  );
};
export default Main;
