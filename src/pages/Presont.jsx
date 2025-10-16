import { Link } from "react-router";
import homeimg from "../assets/img/homeimg.svg";
import backgr from "../assets/img/backgr.jpg";
const Presont = () => {
  return (
    <>
      <div
        className="w-[100%] h-[100vh]"
        style={{
          backgroundImage: `url(${backgr})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="Mycontainer  h-[100%] py-[50px]  text-[20px] flex justify-between items-center ">
          <div className="text-white lg:w-[50%] xs:w-[100%] flex justify-start items-start flex-col gap-[20px] p-[50px] ">
            <p className="w-[100%]  font-pR text-[20px]">
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
              die deutch shprakhe wir zuerst lernen
            </p>
            <Link
              to={"/home"}
              className="border-white border-[2px] px-[30px] py-[5px] text-[30px] font-pR"
            >
              {" "}
              Start
            </Link>
          </div>
          <div className="w-[50%] h-[100%]">
            <img src={homeimg} alt="" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Presont;
