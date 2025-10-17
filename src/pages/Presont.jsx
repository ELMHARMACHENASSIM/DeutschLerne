import { Link } from "react-router";
import homeimg from "../assets/img/homeimg.svg";
import backgr from "../assets/img/backgr.jpg";
const Presont = () => {
  return (
    <>
      <div
        className="w-[100%] lg:h-[100vh] xs:h-[100vh]"
        style={{
          backgroundImage: `url(${backgr})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="Mycontainer  h-[100%] py-[50px]  text-[20px] flex justify-between items-center lg:flex-row xs:flex-col-reverse ">
          <div className="text-white lg:w-[50%] xs:w-[100%] h-[100%] flex justify-center items-start flex-col gap-[20px] lg:p-[50px] xs:p-[20px]  ">
            <p className="w-[100%]  font-pR lg:text-[25px] xs:text-[15px]  ">
              Hallo zusammen ich bin froh heute zu sein .Danke an meine lehrerin
              und meine freunde für ihre Anwesenkit Also heute spreche ich über
              dir deutsh shprakhe wir si wissen Deutch ist eine sehr wichtige
              sprache in Europa und der welt. Sie ist dir Muttersprache in
              Deutschland und man kann sshpricht Deutch in viele länden zum
              biespiel österrich und shweiz oder viele menshen lernen Deutsh um
              in Deutschland zu arbeiten zu studieren oder reisen wenn wir
              deutsh lernen wollen Brauchen wir ein wörtebuck und bücher .Es ist
              auch sehr wichtig Deutch zu hören und zu sprechen oder shreiben
              und jetzt Meine kommilitonnen und ich halten ein presentation Über
              die deutch shprakhe wir zuerst lernen
            </p>
            <Link
              to={"/home"}
              className="border-white border-[2px] px-[35px] py-[5px] text-[20px] font-pR"
            >
              {" "}
              Start
            </Link>
          </div>
          <div className="w-[50%] h-[100%] lg:flex xs:hidden ">
            <img src={homeimg} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Presont;
