import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const PageSechs = () => {
  return (
    <>
      <div className="Mycontainer  py-[50px] font-pB text-[20px]">
        <div className="w-[100%] flex justify-between items-center">
          <Link to={"/page5"} className="flex  items-center gap-[10px]">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Stammbaum</span>
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

export default PageSechs;
