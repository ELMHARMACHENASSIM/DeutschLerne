import { Link } from "react-router";
import bck from "../assets/img/bck.png";
const Presont = () => {
  return (
    <>
    <div
      className="w-[100%] h-[100vh] "
      style={{
        backgroundImage: `url(${bck})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="Mycontainer  h-[100%] py-[50px]  text-[20px] flex justify-center items-center ">
        <div className="bg-white lg:w-[50%] xs:w-[100%] flex justify-center items-center flex-col gap-[20px] p-[50px] ">
          <p className="w-[100%] text-center font-pR">
            Wie kann man sich vorstellen? Um sich vorzustellen, können wir
            einige Fragen beantworten. Zum Beispiel:
          </p>
          <Link
            to={"/home"}
            className="border-black border-[1px] px-[20px] py-[10px] font-pB"
          >
            {" "}
            start
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Presont;
