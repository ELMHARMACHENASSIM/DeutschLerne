import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
const PageZwei = () => {
  return (
    <>
      <div className="Mycontainer  py-[50px] font-pB text-[20px]">
        <div className="w-[90px]">
          <Link to={"/"} className="flex  items-center gap-[10px]">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> <span>zurück</span>
          </Link>
        </div>
        <div className="">
          <div className="py-[20px]">
            <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
              Sich Verstellen
            </h1>
          </div>
          <div>
            <div></div> <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageZwei;
