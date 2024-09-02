import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InfinysPage1 = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const BASE_URL = "http://localhost:1337";

  // Helper function to prepend BASE_URL to image URLs
  const getFullImageUrl = (url) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${BASE_URL}${url}`;
  };

  useEffect(() => {
    // Fetch data dari API Strapi
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:1337/api/main-pages?populate[seo][populate][image][populate][media]=true&populate[mainHero][populate]=*&populate[mitraInfo][populate]=*"
      );
      const result = await response.json();
      setData(result.data);

      // Set title dari SEO data
      if (result.data[0]?.attributes?.seo?.metaTitle) {
        document.title = result.data[0].attributes.seo.metaTitle;
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Set interval untuk mengganti indeks setiap 5 detik
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % data[0]?.attributes?.mainHero.length
      );
    }, 7000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, [data]);

  if (!data.length) return null;

  const header = data[0]?.attributes?.mainHero[currentIndex];
  const mitra = data[0]?.attributes?.mitraInfo;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {/* Bagian SEO tidak di-styling */}
          {/* <p>{item.attributes.seo.metaTitle}</p> */}
          {item.attributes.seo.image?.data?.attributes?.url && (
            <img
              src={item.attributes.seo.image.data.attributes.url}
              alt={item.attributes.seo.image.data.attributes.alt || "SEO Image"}
            />
          )}
          {/* Bagian yang di-styling */}
          <div key={header.id} className="flex flex-col items-center mt-10">
            <p className="mx-auto max-w-[60rem] text-center text-4xl font-black tracking-tight lg:text-5xl lg:leading-tight">
              {header.title}
            </p>
            <p className="text-custom-deskripsi mx-auto mt-6 max-w-[64rem] text-lg leading-8 text-muted-foreground text-center mb-4">
              {header.description}
            </p>
            {header.button && (
              <button className="mb-10 bg-blue-600 text-white px-8 py-2 rounded-md text-sm font-medium flex items-center shadow-[0_4px_15px_0_rgba(59,130,246,0.5)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.75)] transition-shadow duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_549_575)">
                    <path
                      d="M18.9859 0.114519C19.1511 0.210265 19.2789 0.35919 19.3485 0.536964C19.418 0.714738 19.4253 0.910852 19.369 1.09327L16.3298 10.9685H21.9373C22.1021 10.9685 22.2633 11.0166 22.4011 11.1071C22.5388 11.1977 22.647 11.3265 22.7123 11.4778C22.7776 11.6291 22.7972 11.7962 22.7687 11.9585C22.7401 12.1208 22.6646 12.2712 22.5516 12.3911L9.0516 26.7348C8.92097 26.8737 8.74715 26.9643 8.55847 26.9918C8.36978 27.0192 8.17735 26.982 8.01255 26.8861C7.84775 26.7902 7.7203 26.6413 7.65096 26.4636C7.58162 26.286 7.57449 26.0902 7.63072 25.908L10.6699 16.031H5.06235C4.89756 16.0311 4.73635 15.9829 4.59863 15.8924C4.46092 15.8019 4.35272 15.673 4.28739 15.5217C4.22206 15.3705 4.20247 15.2033 4.23103 15.041C4.25959 14.8787 4.33505 14.7284 4.4481 14.6085L17.9481 0.264706C18.0786 0.125992 18.2521 0.0354909 18.4405 0.00791705C18.629 -0.0196568 18.8212 0.0190062 18.9859 0.114519Z"
                      fill="#FED10B"
                      stroke="#FED10B"
                      strokeWidth="0.5"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_549_575">
                      <rect width="27" height="27" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-lg ml-2">{header.button.text}</p>
              </button>
            )}
            {/* Gambar utama dengan styling */}
            {header.image?.data?.[0]?.attributes?.url && (
              <div className="relative w-[92%] h-[500px] rounded-[50px] shadow-lg overflow-visible mb-50">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-[50px] opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
                </div>
                <div className="relative w-[1240px] h-auto flex items-center justify-center p-20 mt-1 ">
                  <div className="w-full h-[550px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="h-8 bg-gray-100 flex items-center px-4 flex-shrink-0">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex justify-center items-center gap-1 w-full h-full mr-14 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-lock-keyhole text-green-500"
                        >
                          <circle cx="12" cy="16" r="1"></circle>
                          <rect
                            x="3"
                            y="10"
                            width="18"
                            height="12"
                            rx="2"
                          ></rect>
                          <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                        </svg>
                        <p className="text-xs font-medium text-muted-foreground">
                          cloudkilat.com
                        </p>
                      </div>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentIndex}
                        src={getFullImageUrl(
                          header.image.data[0].attributes.url
                        )}
                        alt={
                          header.image.data[0].attributes.alt ||
                          "Main Header Image"
                        }
                        className="w-full object-cover rounded-lg"
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="absolute -z-10 h-[69%] w-[92%] mt-20 ml-14 mb-0 rounded-[50px]  bg-gray-100"></div>
          {/* Bagian mitra */}
          {mitra && (
            <div className="py-12">
              <div className="mt-60 text-center relative z-10 py-12">
              <h3 className="text-2xl font-semibold tracking-tigh">
                {mitra.title}
              </h3>
              <div className="mx-auto mt-6 flex max-w-[52rem] items-center justify-center gap-4">
                {mitra.logoImage?.data?.map((logo) => (
                  <img
                    key={logo.id}
                    src={getFullImageUrl(logo.attributes.url)}
                    alt={logo.attributes.name || "Mitra Logo"}
                    className="w-[220px] h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfinysPage1;
