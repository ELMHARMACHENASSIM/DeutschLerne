import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bck from "../assets/img/bck.png";
import { Link } from "react-router";
import img4 from "../assets/img/img4.webp";
import eml from "../assets/img/eml.png";
const PageZwei = () => {
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
        <div className="Mycontainer  py-[50px] font-pB text-[20px] ">
          <div className="w-[100%] flex justify-between items-center xs:text-[15px] xs:flex-col xs:gap-[10px] lg:flex-row" >
            <Link to={"/page1"} className="flex  items-center gap-[10px] bg-dark p-[10px] text-white border-black border-[2px] xs:p-[5px]" >
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
              <span>Buckstaben und Zahlen</span>
            </Link>
            <Link to={"/page3"} className="flex  items-center gap-[10px] bg-yellow p-[10px] border-black border-[2px] xs:p-[5px]">
              {" "}
              <span>Stammbaum</span>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="py-[20px] select-none">
            <div className="py-[20px]">
              <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
                Sich Vorstellen
              </h1>
            </div>
            <div className="flex lg:justify-between lg:items-center lg:flex-row font-pR select-none xs:flex-col-reverse xs:gap-[20px]">
              <div className="flex-1">
                <h1 className="lg:leading-[30px] xs:leading-[30px] xs:text-[20px]">
                  Sich vorzustellen bedeutet, sich selbst einer Person oder
                  einer Gruppe vorzustellen, meistens durch die Angabe des
                  Namens, der Herkunft, des Wohnortes und des Berufs. Eine
                  gelungene Selbstvorstellung hinterlässt einen positiven
                  Eindruck, indem man freundlich, authentisch und selbstbewusst
                  auftritt und klar und deutlich spricht.{" "}
                </h1>
              </div>
              <div className="lg:w-[400px] lg:h-{250px] xs:w-[100%] xs:h-[100%]">
                <img
                  src={img4}
                  alt=""
                  srcset=""
                  className="w-[100%] h-{100%]"
                />
              </div>
            </div>
          </div>
          <div className="bg-dark py-[30px] px-[20px] text-white grid lg:grid-cols-2 gap-[15px] font-pR select-none xs:grid-cols-1">
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">
                wie heißen Sie? <span className="text-red">oder</span> wie ist
                Ihr name ?
              </summary>
              <p className="px-[25px] text-yellow">
                Ich heiße ‘name’ <span className="text-red">oder</span> Mein
                name ist ‘name’ <span className="text-red">oder</span> Mein
                vorname ist ‘first name’ <span className="text-red">oder</span>{" "}
                Mein Nachname <span className="text-white">(Familienname)</span>{" "}
                ist ‘last name’
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">woher Kommen Sie ? </summary>
              <p className="px-[25px] text-yellow">
                Ich Komme <mark>aus</mark> ‘Marokko’{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">wo Wohnen Sie ?</summary>
              <p className="px-[25px] text-yellow">
                Ich Wohne <mark>in</mark> ‘Casablanca’{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Was lernen Sie ?</summary>
              <p className="px-[25px] text-yellow">Ich lerne Deutsch </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">
                Was machen Sie beruflich ?{" "}
                <span className="text-red">oder</span> Was sind Sie von Beruf ?
              </summary>
              <p className="px-[25px] text-yellow">
                Ich bin Webentwickler und Grafikdesigner{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">
                Wie ist Ihre Familiensituation ?{" "}
                <span className="text-red">oder</span> Wie ist Ihr Familienstand
                ?
              </summary>
              <p className="px-[25px] text-yellow">
                <ul>
                  <li>Ich bin ledig = single</li>
                  <li>- verheiratet</li>
                  <li>- geschieden</li>
                  <li>- verwitwet</li>
                  <li>- verlobt</li>
                </ul>{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">
                Welche Sprachen sprechen Sie?
              </summary>
              <p className="px-[25px] text-yellow">
                Ich spreche Arabisch als muttersprache Englisch und ein bisschen
                Deutsch.
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Was sind ihre hobbys ?</summary>
              <p className="px-[25px] text-yellow">
                Meine Hobbys sind Fußballspielen{" "}
                <span className="text-white">|</span> kochen{" "}
                <span className="text-white">|</span> fotografieren{" "}
                <span className="text-white">|</span> reisen{" "}
                <span className="text-white">|</span> Schwimmen
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">
                Wie alt sind Sie ? <span className="text-red">oder</span> Wie
                alt bist du ?
              </summary>
              <p className="px-[25px] text-yellow">ch bin 28 Jahre alt </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Wann sind sie geboren ?</summary>
              <p className="px-[25px] text-yellow">Ich bin 1997 geboren</p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">
                Wie ist Ihre Email-Adresse ?
              </summary>
              <p className="px-[25px] text-yellow">Meine email adresse ist </p>
              <div className="w-[600px] h-[auto] py-[10px] xs:w-[100%]">
                <img src={eml} alt="" className="w-[100%] h-[auto]" />
              </div>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Was Studieren Sie ?</summary>
              <p className="px-[25px] text-yellow">
                Ich Studiere Jura , Chemie , Informatik{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Wo Studieren Sie ?</summary>
              <p className="px-[25px] text-yellow">
                Ich Studiere an der Universität , dei Fakultät{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Wie ist Ihre Adresse ?</summary>
              <p className="px-[25px] text-yellow">
                Meine adresse ist MOHAMMED V Straße Hausnummer 55 P L Z (Post
                Leit Zahl) 2000 casablanca Marokko{" "}
              </p>
            </details>
            <details className=" p-[15px] w-[100%] border-[2px] border-white">
              <summary className="py-[15px]">Wie ist Ihre Telefonnummer ?</summary>
              <p className="px-[25px] text-yellow">Meine Telefonnummer ist 0622444005 (zwei mal 2  / zwei mal 4 / zwei mal 0) </p>
            </details>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default PageZwei;
