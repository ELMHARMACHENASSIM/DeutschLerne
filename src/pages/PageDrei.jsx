import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import fam from "../assets/img/fam.svg";
import bck from "../assets/img/bck.png";
const PageDrei = () => {
  return (
    <>
      <div
        className="w-[100%] h-[100%]"
        style={{
          backgroundImage: `url(${bck})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="Mycontainer  py-[50px] font-pB text-[20px]">
          <div className="w-[100%] flex justify-between items-center xs:text-[15px] xs:flex-col xs:gap-[10px] lg:flex-row">
            <Link to={"/page2"} className="flex  items-center gap-[10px]  bg-red p-[10px] text-white border-black border-[2px] xs:p-[5px]">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
              <span>Sich Vorstellen</span>
            </Link>
            <Link to={"/page4"} className="flex  items-center gap-[10px]  bg-dark p-[10px] text-white border-black border-[2px] xs:p-[5px]">
              {" "}
              <span> Die Restaurant</span>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="py-[20px]">
            <div className="py-[20px]">
              <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
                Stammbaum
              </h1>
            </div>
            <div className="flex justify-center  ">
              <div className="lg:w-[60%] h-[auto] bg-white p-[20px] xs:w-[100%]">
                <img src={fam} alt="" className="w-[100%] h-[auto]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDrei;
