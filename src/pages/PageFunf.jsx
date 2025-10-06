import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uhr from "../assets/img/uhr.svg";
import bck from "../assets/img/bck.png";
import tabuhr from "../assets/img/tabhur.svg";
import monat from "../assets/img/monat.svg";
import tag from "../assets/img/tag.svg";
import { Link } from "react-router";
const PageFunf = () => {
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
          <div className="w-[100%] flex justify-between items-center xs:text-[20px]">
            <Link to={"/page4"} className="flex  items-center gap-[10px] bg-dark p-[10px] text-white border-black border-[2px] xs:p-[5px]">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} /> <span>Die Restaurant</span>
            </Link>
            <Link to={"/page6"} className="flex  items-center gap-[10px]  bg-yellow p-[10px] border-black border-[2px] xs:p-[5px]">
              {" "}
              <span> Nominativ und Akkusativ</span>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="p-[30px] bg-white/70 xs:p-[10px]">
            {" "}
            <div className="py-[20px]">
              <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
                Die Monate und Die wochen und Die Uhr
              </h1>
            </div>
            <div className="w-[100%] flex justify-between items-center gap-[20px] lg:flex-row xs:flex-col ">
              <div className="lg:w-[40%] h-[auto] xs:w-[100%]">
                <img
                  src={monat}
                  alt=""
                  srcset=""
                  className="w-[100%] h-[auto]"
                />
              </div>
              <div className="lg:w-[60%] xs:w-[100%]"><img src={tag} alt="" /></div>
            </div>
            <div className="w-[100%]  p-[25px] flex justify-between items-center lg:flex-row  gap-[40px] xs:flex-col xs:p-[5px]">
              <img src={uhr} alt="" className="lg:w-[600px] h-[100%] xs:w-[100%]  " />
              <div className="w-[100%] h-[100%] font-pR xs:text-[20px]">
                {" "}
                <h1>Fragen</h1>
                <div>
                  <div className="py-[15px]">
                    {" "}
                    <h1 className="text-[25px]">Wie spät ist es?</h1>
                    <p className="text-red font-pB">Es ist zwei Uhr</p>
                  </div>
                  <div className="py-[15px]">
                    {" "}
                    <h1 className="text-[25px]">Wie viel Uhr ist es?</h1>
                    <p className="text-red font-pB">Es ist halb dre</p>
                  </div>
                  <div className="py-[15px]">
                    {" "}
                    <h1 className="text-[25px]">Haben Sie die Uhrzeit?</h1>
                    <p className="text-red font-pB">Es ist kurz nach vie</p>
                  </div>
                  <div className="py-[15px]">
                    {" "}
                    <h1 className="text-[25px]">
                      Kannst du mir sagen, wie spät es ist
                    </h1>
                    <p className="text-red font-pB">Es ist Viertel vor acht</p>
                  </div>
                </div>
              </div>
              <img src={tabuhr} alt="" className="lg:w-[400px] h-[100%] xs:w-[100%]" /> {" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFunf;
