import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import imgOne from "../assets/img/img1.jpg";
import song0 from "../assets/song/dasalphabet.mp3";
import song1 from "../assets/song/zahlen.mp3";
import song2 from "../assets/song/zahlen2.mp3";
import song3 from "../assets/song/zahlen3.mp3";
import song4 from "../assets/song/zahlen4.mp3";
import song5 from "../assets/song/zahlen5.mp3";
import song6 from "../assets/song/zahlen6.mp3";
import bck from "../assets/img/bck.png";
const PageEin = () => {
  return (
    <>
      <div
        className="w-[100%] h-[100%] select-none"
        style={{
          backgroundImage: `url(${bck})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="Mycontainer  py-[50px] font-pB text-[20px]">
          <div className="w-[100%] flex justify-between items-center xs:text-[15px] xs:flex-col xs:gap-[10px] lg:flex-row">
            <Link to={"/"} className="flex  items-center gap-[10px] bg-yellow p-[10px] border-black border-[2px] xs:p-[5px]">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} /> <span>zurück</span>
            </Link>
            <Link to={"/page2"} className="flex  items-center gap-[10px]  bg-red p-[10px] text-white border-black border-[2px] xs:p-[5px]">
              {" "}
              <span>Sich Vorstellen</span>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="py-[20px]">
            <div className="py-[20px]">
              <h1 className="border-s-4 border-black  ps-[20px] text-[20px]">
                Buckstaben und Zahlen
              </h1>
            </div>
            <div className="w-[100%] flex justify-between items-center lg:flex-row gap-[20px] xs:flex-col">
              <div className="w-[600px] h-[600px] lg:w-[400px] lg:h-[400px] xs:w-[100%] xs:h-[100%] ">
                <img
                  src={imgOne}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>{" "}
              <div className="font-pR text-[25px] flex-1 xs:text-[20px]">
                Das deutsche Alphabet besteht aus 26 Buchstaben, 3 Umlauten (Ä,
                Ö, Ü) und einer Ligatur (ß). Bitte lass dich nicht durch unsere
                speziellen Buchstaben ä, ö, ü und ß verwirren.
                <div className="py-[25px]  text-[25px] font-pB xs:text-[16px]">
                  Aa, Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Jj, Kk, Ll, Mm, Nn, Oo,
                  Pp, Qq, Rr, Ss, Tt, Uu, Vv, Ww, Xx, Yy, Zz,{" "}
                  <span className="text-red">Ää, Öö, Üü, ß</span>
                  
                </div>
                <div className="text-[25px] font-pB"><h1 >Und jetzt hören wir die Aussprache der Buchshtaben</h1></div>
                <audio
                  src={song0}
                  controls
                  className="w-[100%] h-[90px] xs:h-[50px] py-[10px]"
                ></audio>
                <div className="text-[25px] font-pB"><h1>Das war der abshnit üner die buchkstaben</h1></div>
              </div>
            </div>
            <div className="py-[20px]">
              <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
                Zahlen
              </h1>
            </div>

            <div className="w-[100%]  gap-[20px] bg-dark p-[20px] text-white xs:text-[20px]">
              <p className="py-[10px]">
                {" "}
                Du musst nicht alle Zahlen auswendig lernen Es gibt ein System.
                Zählen auf Deutsch ist einfach, wenn du es richtig machst!
              </p>
              <div className="font-pR text-[25px] grid lg:grid-cols-2 gap-[20px] xs:grid-cols-1">
                <div className="p-[20px] border-[1px] border-white/50">
                  <p className="font-pR text-[20px] py-[5px]">
                    1 = eins | 2 = zwei | 3 = drei | 4 = vier | 5 = fünf | 6 =
                    sechs | 7 = sieben | 8 = acht | 9 = neun | 10 = zehn
                  </p>
                  <audio
                    src={song1}
                    controls
                    className="w-[50%] h-[60px] xs:w-[100%]"
                  ></audio>
                </div>
                <div className="p-[20px] border-[1px] border-white/50">
                  <p className="font-pR text-[20px] py-[5px]">
                    11 = elf | 12 = zwölf | 13 = dreizehn | 14 = vierzehn | 15 =
                    fünfzehn | 16 = sechzehn | 17 = siebzehn | 18 = achtzehn |
                    19 = neunzehn | 20 = zwanzig
                  </p>
                  <audio
                    src={song2}
                    controls
                    className="w-[50%] h-[60px] xs:w-[100%]"
                  ></audio>
                </div>
                <div className="p-[20px] border-[1px] border-white/50">
                  <p className="font-pR text-[20px] py-[5px]">
                    21 = einundzwanzig | 22 = zweiundzwanzig | 23 =
                    dreiundzwanzig | 24 = vierundzwanzig | 25 = fünfundzwanzig
                  </p>
                  <audio
                    src={song3}
                    controls
                    className="w-[50%] h-[60px] xs:w-[100%]"
                  ></audio>
                </div>
                <div className="p-[20px] border-[1px] border-white/50">
                  <p className="font-pR text-[20px] py-[5px]">
                    30 = dreißig | 31 = einunddreißig | 32 = zweiunddreißig | 33
                    = dreiunddreißig
                  </p>
                  <audio
                    src={song4}
                    controls
                    className="w-[50%] h-[60px] xs:w-[100%]"
                  ></audio>
                </div>
                <div className="p-[20px] border-[1px] border-white/50">
                  <p className="font-pR text-[20px] py-[5px]">
                    40 = vierzig | 50 = fünfzig | 60 = sechzig | 70 = siebzig |
                    80 = achtzig | 90 = neunzig | 100 = einhundert (hundert)
                  </p>
                  <audio
                    src={song5}
                    controls
                    className="w-[50%] h-[60px] xs:w-[100%]"
                  ></audio>
                </div>
                <div className="p-[20px] border-[1px] border-white/50">
                  <p className="font-pR text-[20px] py-[5px]">
                    101 = einhunderteins  | 102 = einhundertzwei  | 103 =
                    einhundertdrei  | 110 = einhundertzehn  | 111 = einhundertelf  | 120
                    = einhundertzwanzig  | 121 = einhunderteinundzwanzig  | 130 =
                    einhundertdreißig  | 131 = einhunderteinunddreißig  | 140 =
                    einhundertvierzig  | 150 = einhundertfünfzig
                  </p>
                  <audio
                    src={song6}
                    controls
                    className="w-[50%] h-[60px] xs:w-[100%]"
                  ></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageEin;
