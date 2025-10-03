import { Link } from "react-router";
import imghome1 from "../../assets/img/imghome1.jpg";
import imghome2 from "../../assets/img/imghome2.jpg";
import imghome3 from "../../assets/img/imghome3.jpg";
import imghome4 from "../../assets/img/imghome4.jpg";
import imghome5 from "../../assets/img/imghome5.jpg";
import imghome6 from "../../assets/img/imghome6.jpg";
import bck from "../../assets/img/bck.png";
const Header = () => {
  return (
    <>
      <header
        className=" bg-white w-[100%] h-[100vh] py-[30px]"
        style={{
          backgroundImage: `url(${bck})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" Mycontainer h-[100%] text-dark flex justify-center items-center gap-[20px]">
          <div className="flex justify-center items-center flex-col gap-[20px]">
            <h1 className="text-[50px] font-pB  py-[20px]">Die Präsentation</h1>
            {/* <div className="flex justify-center items-center flex-col gap-[15px] "> */}
            <div className="grid grid-cols-3  gap-[15px]  py-[20px]">
               <Link
                to="/page1"
                className="relative  text-center font-pB  w-[450px] h-[200px] overflow-hidden group border-[3px] border-dark"
              >
              <h1 className="absolute top-[50%] left-[50%] translate-[-50%] text-white z-10 text-[25px] font-pR  hidden group-hover:block ">Buckstaben und Zahlen</h1>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black/0 z-3 group-hover:bg-black/50 transition-colors duration-300"></div>
                <img src={imghome1} alt="" className="w-[100%] h-[100%] object-cover  object-center transition-transform duration-500 group-hover:scale-125" />
              </Link>
               <Link
                to="/page2"
                className="relative  text-center font-pB  w-[450px] h-[200px] overflow-hidden group border-[3px] border-dark"
              >
              <h1 className="absolute top-[50%] left-[50%] translate-[-50%] text-white z-10 text-[25px] font-pR hidden group-hover:block">Sich Vorstellen</h1>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black/0 z-3 group-hover:bg-black/50 transition-colors duration-300"></div>
                <img src={imghome2} alt="" className="w-[100%] h-[100%] object-cover  object-center transition-transform duration-500 group-hover:scale-125" />
              </Link>
                  <Link
                to="/page3"
                className="relative  text-center font-pB  w-[450px] h-[200px] overflow-hidden group border-[3px] border-dark"
              >
              <h1 className="absolute top-[50%] left-[50%] translate-[-50%] text-white z-10 text-[25px] font-pR hidden group-hover:block">Stammbaum</h1>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black/0 z-3 group-hover:bg-black/50 transition-colors duration-300"></div>
                <img src={imghome3} alt="" className="w-[100%] h-[100%] object-cover  object-center transition-transform duration-500 group-hover:scale-125" />
              </Link>
                  <Link
                to="/page4"
                className="relative  text-center font-pB  w-[450px] h-[200px] overflow-hidden group border-[3px] border-dark"
              >
              <h1 className="absolute top-[50%] left-[50%] translate-[-50%] text-white z-10 text-[25px] font-pR hidden group-hover:block">Die Restaurants</h1>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black/0 z-3 group-hover:bg-black/50 transition-colors duration-300"></div>
                <img src={imghome4} alt="" className="w-[100%] h-[100%] object-cover  object-center transition-transform duration-500 group-hover:scale-125" />
              </Link>
                  <Link
                to="/page5"
                className="relative  text-center font-pB  w-[450px] h-[200px] overflow-hidden group border-[3px] border-dark"
              >
              <h1 className="absolute top-[50%] left-[50%] translate-[-50%] text-white z-10 text-[25px] font-pR hidden group-hover:block">Die Monate und Die wochen und Die Uhr </h1>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black/0 z-3 group-hover:bg-black/50 transition-colors duration-300"></div>
                <img src={imghome5} alt="" className="w-[100%] h-[100%] object-cover  object-center transition-transform duration-500 group-hover:scale-125" />
              </Link>
                  <Link
                to="/page6"
                className="relative  text-center font-pB  w-[450px] h-[200px] overflow-hidden group border-[3px] border-dark"
              >
              <h1 className="absolute top-[50%] left-[50%] translate-[-50%] text-white z-10 text-[25px] font-pR hidden group-hover:block">Nominativ und Akkusativ</h1>
              <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black/0 z-3 group-hover:bg-black/50 transition-colors duration-300"></div>
                <img src={imghome6} alt="" className="w-[100%] h-[100%] object-cover  object-center transition-transform duration-500 group-hover:scale-125" />
              </Link>

            </div>
            <h1 className="text-[22px] text-center  bg-dark p-[15px] font-pB w-[100%] text-white py-[20px]">
              Unterstützt von :{" "}
              <span className="font-pL">NASSIM ELMHARMACHE</span> &nbsp; | &nbsp;{" "}
              <span className="font-pL">HAMZA HAROUNE</span> &nbsp; | &nbsp;{" "}
              <span className="font-pL">Malak Rahma</span> &nbsp; | &nbsp;{" "}
              <span className="font-pL">Hafssa Hamidi</span> &nbsp; | &nbsp;{" "} 
              <span className="font-pL">Anas El Otmani</span>
            </h1>
          </div>
          {/* <div className="w-[600px] h-[600px]">
            <img src={imghome} alt="" className="w-[100%] h-[100%]" />
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
