import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI-UX DESIGN",
    title: "Product KMS PT Gitronik Dimindo Indonesia",
    description:
      "Merancang antarmuka pengguna (user interface) dan alur pengalaman pengguna (user experience) untuk dashboard admin Knowledge Management System (KMS) PT Gitronik Dimindo Indonesia. Fokus utama proyek ini adalah menciptakan desain antarmuka yang responsif, intuitif, serta menyeimbangkan estetika visual dengan fungsionalitas praktis guna mempermudah pengelolaan informasi internal.",
    link: "https://www.figma.com/design/xpt6kKiiW7YiZVn36MtXgO/Untitled?node-id=0-1&t=lMDAUNxgzLSgwxy0-1",
  },
  {
    id: 2,
    image: card2,
    category: "UI-UX DESIGN",
    title: "Task & Project Management Tools (Proyek UAS UI/UX)",
    description:
      "Merancang antarmuka aplikasi manajemen tugas dan catatan kerja yang terintegrasi dengan penjadwalan (tahun, hari, jam) serta visualisasi data dalam bentuk pie chart dan bar chart. Desain difokuskan pada kejelasan informasi dan efisiensi pengguna dalam memantau produktivitas harian maupun proyek kerja.",
    link: "https://www.figma.com/design/hkguiO6mgaWjsMN5ToejlD/EAS_Pengembangan-Antarmuka-Pengguna?node-id=79-2&t=GhzR9phKbXuY3UnT-1",
  },
  {
    id: 3,
    image: card3,
    category: "UI-UX DESIGN",
    title: "Mamikos Redesign – Comparison & Split Feature (Proyek Kuliah)",
    description:
      "Merancang ulang antarmuka aplikasi Mamikos dengan menghadirkan inovasi fitur split screen hingga 3 kos sekaligus. Fitur ini mempermudah pengguna dalam membandingkan harga, fasilitas, lokasi, dan detail kos secara berdampingan (side-by-side) sebelum mengambil keputusan.",
    link: "https://www.figma.com/design/ynoLPEicVLNd5cRlb5pMkA/Untitled?node-id=0-1&t=OarxcNXoyGPI1d3n-1",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Pitch Deck Design – Minty Starfruit Fusion Tea",
    description:
      "Merancang presentasi ide bisnis (pitch deck) yang menarik untuk produk inovasi herbal Minty Starfruit Fusion Tea (kombinasi Bunga Belimbing Wuluh dan Peppermint). Fokus desain adalah menyampaikan identitas produk, konsep bisnis, dan nilai keunggulan produk secara visual yang estetik dan komunikatif.",
    link: "https://docs.google.com/presentation/d/1XyxdGIa2J8reCmBMBk4gGX58GErXuq21/edit?usp=sharing&ouid=105069563921189223480&rtpof=true&sd=true",
  },
  {
    id: 5,
    image: card5,
    category: "UI-UX DESIGN",
    title:
      "Social Media Marketing & Product Promotion – Minty Starfruit Fusion Tea",
    description:
      "Merancang materi promosi digital dan konten media sosial (seperti Facebook) untuk mengomunikasikan manfaat serta keunggulan produk Minty Starfruit Fusion Tea. Desain berfokus pada daya tarik visual produk, penyampaian manfaat kesehatan, dan caption pemasaran yang persuasif.",
    link: "https://drive.google.com/file/d/1sCCViG8K7W_g4TRfU4d3tgKRlYaVJJjW/view?usp=sharing",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Promotional Flyer & Banner Design – Fastwork Services",
    description:
      "Merancang materi promosi visual (poster/selembaran) untuk platform freelance Fastwork guna mempromosikan jasa freelance seperti pembuatan Website Bisnis/Undangan serta Pembuatan Flowchart & Data Flow Diagram (DFD) Profesional. Desain berfokus pada kemudahan keterbacaan (readability), kejelasan penawaran harga, serta penataan mockup hasil kerja yang menarik minat calon klien.",
    link: "https://docs.google.com/presentation/d/14t9RAE9Rpfy4Eli_5SFKaU_9ObtCL_hisFeV8ppDlM4/edit?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn py-3 px-6 mt-12.5 text-center text-[16px] font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white transition-colors duration-300"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
