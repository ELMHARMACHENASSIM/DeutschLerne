import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
const PageDrei = () => {
  return (
    <>
      <div className="Mycontainer  py-[50px] font-pB text-[20px]">
        <div className="w-[100%] flex justify-between items-center">
          <Link to={"/page2"} className="flex  items-center gap-[10px]">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Sich Vorstellen</span>
          </Link>
          <Link to={"/page4"} className="flex  items-center gap-[10px]">
            {" "}
            <span>Die Monate und Die wochen und Die Uhr</span>{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="py-[20px]">
          {" "}
          <div className="py-[20px]">
            <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
              Nominativ und Akkusativ
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDrei;
