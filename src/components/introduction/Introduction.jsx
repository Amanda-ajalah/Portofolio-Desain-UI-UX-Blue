import person from "../../assets/amanda.jpeg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  {
    id: 1,
    title: "Tool Utama",
    description: "Figma",
  },
  {
    id: 2,
    title: "Desain Cepat",
    description: "Canva",
  },
  {
    id: 3,
    title: "Fokus Bidang",
    description: "UI/UX Design",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Halo Saya
            <span className="text-nowrap shrink-0 inline-block w-full">
              Amanda Restu E.P
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Halo! Saya seorang desainer grafis fresh graduate yang antusias.
            Portofolio ini berisi karya-karya pilihan dari proyek kuliah saya
            yang fokus pada solusi visual kreatif dan estetika.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn btn-xs xxs:btn-lg text-white border-none transition-colors duration-300"
              style={{ backgroundColor: "#65ABDE" }}
              href="https://wa.me/6285648342459"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-2">
            {informationSummaryData.map((item) => (
              <div
                key={item.id}
                style={{ backgroundColor: "#ADD8E6" }}
                className="rounded-2xl overflow-hidden"
              >
                <InformationSummary item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
