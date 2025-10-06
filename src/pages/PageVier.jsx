import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import rest from "../assets/img/rest.png";
import rest2 from "../assets/img/rest2.svg";
import bck from "../assets/img/bck.png";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.webp";
import music from "../assets/song/msc.mp3";
const PageVier = () => {
  return (
    <>
      {" "}
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
            <Link to={"/page3"} className="flex  items-center gap-[10px] bg-yellow p-[10px] border-black border-[2px] xs:p-[5px]">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} /> <span>Stammbaum</span>
            </Link>
            <Link to={"/page5"} className="flex  items-center gap-[10px]  bg-red p-[10px] text-white border-black border-[2px] xs:p-[5px]">
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
            <div className="flex justify-center flex-col items-center gap-[20px] ">
              <div className="relative lg:w-[900px] xs:w-[100%]">
                {" "}
                <div className="overlay bg-dark/50 w-[100%] h-[100%] absolute top-0 left-0 z-1 "></div>
                <img
                  src={img5}
                  alt=""
                  srcset=""
                  className="w-[100%] h-[100%] "
                />{" "}
                <h1 className="absolute top-[50%] left-[50%] text-white font-pB text-center -translate-x-[50%] -translate-y-[50%] text-[30px] z-3 lg:text-[30px] xs:text-[20px] xs:w-[100%]">
                  Restaurants sind Orte, wo man essen und trinken kann.
                </h1>
              </div>
              <div className="w-[100%] h-[auto] py-[20px]  bg-white/70 p-[20px] xs:w-[100%]">
                <img src={rest2} alt="" className="w-[100%] h-[auto]" />
              </div>
              <div className="lg:w-[900px] h-[auto] py-[20px]  bg-white/70 p-[20px] xs:w-[100%]">
                <img src={rest} alt="" className="w-[100%] h-[auto] " />
              </div>
              <div className="relative w-[100%] h-[500px] xs:w-[100%]">
                <div className="overlay bg-dark/50 w-[100%] h-[100%]  absolute top-0 left-0 z-1"></div>
                <img
                  src={img6}
                  alt=""
                  srcset=""
                  className="w-[100%] h-[100%]  object-cover object-center"
                />{" "}
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[30px] z-3 flex justify-center items-center flex-col gap-[15px]">
                  {" "}
                  <h1 className=" text-white font-pB text-center ">
                    Ein Gespräch im Restauran
                  </h1>
                  <audio src={music} controls></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageVier;
