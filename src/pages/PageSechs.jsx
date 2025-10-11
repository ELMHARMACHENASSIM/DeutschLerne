import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import bck from "../assets/img/bck.png";
import pers from "../assets/img/pers.svg";
const PageSechs = () => {
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
            <Link to={"/page5"} className="flex  items-center gap-[10px] bg-red p-[10px] text-white border-black border-[2px] xs:p-[5px]">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
              <span>Die Monate und Die wochen und Die Uhr</span>
            </Link>
          </div>
          <div className="py-[20px]">
            {" "}
            <div className="py-[20px] xs:p-[10px]">
              <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
                Nominativ und Akkusativ
              </h1>
            </div>
          </div>
          <div>
            <div className="bg-white lg:w-[800px] p-[20px] xs:w-[100%]">
              <img src={pers} alt="" className="w-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSechs;
