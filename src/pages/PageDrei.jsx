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
          <div className="w-[100%] flex justify-between items-center">
            <Link to={"/page2"} className="flex  items-center gap-[10px]">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
              <span>Sich Vorstellen</span>
            </Link>
            <Link to={"/page4"} className="flex  items-center gap-[10px]">
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
              <div className="w-[60%] h-[auto] bg-white/80 p-[20px]">
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
