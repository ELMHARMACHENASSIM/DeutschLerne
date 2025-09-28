import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
const PageDrei = () => {
  return (
    <>
      <div className="Mycontainer  py-[50px] font-pB text-[20px]">
        <div className="w-[90px]">
          <Link to={"/"} className="flex  items-center gap-[10px]">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> <span>zurück</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageDrei;
