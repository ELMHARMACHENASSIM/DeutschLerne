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
        <div className=" Mycontainer  text-dark flex justify-between items-center gap-[20px]" >
          <div className="flex justify-center items-start flex-col gap-[40px]">
            <h1 className="text-[50px] font-pB py-[20px]">Die Präsentation</h1>
            <div className="flex justify-center items-center flex-col gap-[20px]">
              <Link
                className="bg-white  text-center font-pB p-[15px] w-[100%] border-[2px] border-black"
                to={"/page1"}
              >
                Buckstabiren und Zahlen
              </Link>
              <Link
                className="bg-white  text-center font-pB p-[15px] w-[100%] border-[2px] border-black"
                to={"/page2"}
              >
                Sich Verstellen
              </Link>
              <Link
                className="bg-white  text-center font-pB p-[15px] w-[100%] border-[2px] border-black"
                to={"/page3"}
              >
                Die Monate und Die wochen und Die Uhr
              </Link>
              <Link
                className="bg-white  text-center font-pB p-[15px] w-[100%] border-[2px] border-black"
                to={"/page4"}
              >
                Stammbaum
              </Link>
              <Link
                className="bg-white  text-center font-pB p-[15px] w-[100%] border-[2px] border-black"
                to={"/page5"}
              >
                Die Restaurant
              </Link>
            </div>
            <h1 className="text-[25px]  py-[20px] bg-dark p-[15px] font-pB w-[600px] text-white">
              Unterstützt von : <span className="font-pL">NASSIM ELMHARMACHE</span> |{" "}
              <span className="font-pL">HAMZA HAROUNE</span> | <span className="font-pL">HAMZA HAROUNE</span> | <span className="font-pL">HAMZA HAROUNE</span>
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
