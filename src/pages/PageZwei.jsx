import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import img4 from "../assets/img/img4.webp";
const PageZwei = () => {
  return (
    <>
      <div className="Mycontainer  py-[50px] font-pB text-[20px]">
        <div className="w-[90px]">
          <Link to={"/"} className="flex  items-center gap-[10px]">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> <span>zurück</span>
          </Link>
        </div>
        <div className="">
          <div className="py-[20px]">
            <h1 className="border-s-4 border-black  ps-[20px] text-[25px]">
              Sich Verstellen
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="leading-[50px]">
                Sich vorzustellen bedeutet, sich selbst einer Person oder einer
                Gruppe vorzustellen, meistens durch die Angabe des Namens, der
                Herkunft, des Wohnortes und des Berufs. Eine gelungene
                Selbstvorstellung hinterlässt einen positiven Eindruck, indem
                man freundlich, authentisch und selbstbewusst auftritt und klar
                und deutlich spricht.{" "}
              </h1>
            </div>
            <div className="w-[500px] h-{500px]"><img src={img4} alt="" srcset="" className="w-[100%] h-{100%]" /></div>
          </div>
        </div>
        <div>
          <details>
  <summary>wie heißen Sie?</summary>
  <p>Ich heiße ‘name’</p>
</details>
        </div>
      </div>
    </>
  );
};

export default PageZwei;
