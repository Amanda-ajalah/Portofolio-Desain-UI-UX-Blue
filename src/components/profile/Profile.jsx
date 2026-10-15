import person from "../../assets/amanda.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            UI/UX & Graphic Designer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Saya berfokus pada perancangan antarmuka digital (UI/UX) yang
              intuitif, responsif, dan mudah digunakan. Berbekal latar belakang
              di bidang Teknologi Informasi, saya menggabungkan estetika visual
              dengan fungsionalitas sistem untuk menciptakan pengalaman pengguna
              yang optimal.
            </p>
            <p className="mt-3">
              Siap membantu merancang dashboard, aplikasi mobile, hingga media
              promosi digital untuk kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
            >
              My Projects
            </a>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-blue-600 bg-white duration-300 transition-all hover:text-blue-600 ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="https://drive.google.com/file/d/1XQmQqCrlWxdE5xw8VIUFJUC-v1fs08ck/view?usp=sharing"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
