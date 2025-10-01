import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import rest from "../assets/img/rest.png";
import rest2 from "../assets/img/rest2.svg";
const PageVier = () => {
  return (
    <>
      <div className="Mycontainer  py-[50px] font-pB text-[20px]">
        <div className="w-[100%] flex justify-between items-center">
          <Link to={"/page3"} className="flex  items-center gap-[10px]">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Stammbaum</span>
          </Link>
          <Link to={"/page5"} className="flex  items-center gap-[10px]">
            {" "}
            <span>Die Monate und Die wochen und Die Uhr</span>{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="py-[20px]">
          {" "}
          <div className="py-[20px]">
            <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
              Die Restaurant
            </h1>
          </div>
          <div className="w-[900px] h-[auto] py-[20px]">
            <img src={rest} alt="" className="w-[100%] h-[auto]" />
          </div>
          <div className="w-[1200px] h-[auto] py-[20px]">
            <img src={rest2} alt="" className="w-[100%] h-[auto]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageVier;
