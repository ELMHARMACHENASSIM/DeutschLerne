import { Link } from "react-router";
import imghome from "../../assets/img/img3.jpg";
import bck from "../../assets/img/bck.png";
const Header = () => {
  return (
    <>
      <header
        className=" bg-white w-[100%] h-[100vh] flex  items-center py-[50px]"
        style={{
          backgroundImage: `url(${bck})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" Mycontainer  text-dark flex justify-between items-center gap-[20px]">
          <div className="flex justify-center items-start flex-col gap-[40px]">
            <h1 className="text-[50px] font-pB py-[15px]">Die Präsentation</h1>
            <div className="flex justify-center items-center flex-col gap-[15px]">
              <Link
                to="/page1"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  Buckstabiren und Zahlen
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>
              <Link
                to="/page2"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  sich vorstellen
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>
              <Link
                to="/page1"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  Nominativ und Akkusativ
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>
                <Link
                to="/page1"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  Der | Das | Die
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>
              <Link
                to="/page1"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  Die Monate und Die wochen und Die Uhr
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>

              <Link
                to="/page1"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  Stammbaum
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>
              <Link
                to="/page1"
                className="relative bg-white text-center font-pB p-[15px] w-[100%] border-[2px] border-black overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white text-[20px]">
                  Die Restaurant
                </span>
                <span className="absolute top-0 left-0 w-full h-1/3 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="absolute top-1/3 left-0 w-full h-1/3 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <span className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000" />
              </Link>
            </div>
            <h1 className="text-[25px]  py-[15px] bg-dark p-[15px] font-pB w-[600px] text-white">
              Unterstützt von :{" "}
              <span className="font-pL">NASSIM ELMHARMACHE</span> |{" "}
              <span className="font-pL">HAMZA HAROUNE</span> |{" "}
              <span className="font-pL">Malak Rahma</span> |{" "}
              <span className="font-pL">Hafssa Hamidi</span>
            </h1>
          </div>
          <div className="w-[600px] h-[600px]">
            <img src={imghome} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
