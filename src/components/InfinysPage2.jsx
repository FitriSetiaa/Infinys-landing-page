import React, { useState, useEffect } from "react";
import Petir from "../asset/lightning.svg";
import Contoh from "./contoh";
import KilatVM from "./contoh";
import Background from "../asset/background";

const InfinysPage2 = () => {
  const [data, setData] = useState([]);

  const BASE_URL = "http://localhost:1337";

  // Helper function to prepend BASE_URL to image URLs
  const getFullImageUrl = (url) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `${BASE_URL}${url}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/main-pages?&populate[heroSection1][populate]=*&populate[kanban1][populate]=*&populate[svg][populate]=*"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        console.error("Fetching error:", err);
      }
    };
    fetchData();
  }, []);

  // Ambil data header1 pada indeks 0 dan 1
  const header1Index0 = data[0]?.attributes?.heroSection1;
  const kanban1 = data[0]?.attributes?.kanban1;
  const svgImage = data[0]?.attributes?.svg;
  const svgs = data[0]?.attributes?.svgs;

  if (!header1Index0 || !header1Index0.image?.data?.length) {
    return console.error("Data image tidak ditemukan atau kosong.");
  }

  const imageUrl = getFullImageUrl(
    header1Index0.image.data[0]?.attributes?.url
  );
  console.log("Image URL:", imageUrl);

  return (
    <div className="container mx-auto mt-8 py-12">
      {/* Menampilkan data dari header1 pada indeks 0 */}
      {header1Index0 && (
        <div>
          <div className="mb-4 flex justify-center">
            <img src={imageUrl} alt="" className="h-28 w-28" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {header1Index0.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[72rem] text-muted-foreground">
              {header1Index0.description}
            </p>
          </div>
        </div>
      )}

      {/* Menampilkan Kanban Bento */}
      <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-12 xl:grid-rows-2">
        {kanban1 && (
          <div className="xl:col-span-4">
            <div className="border bg-card text-card-foreground shadow-sm gradient-primary h-[500px] overflow-hidden rounded-3xl bg-blue-600">
              <div
                className="flex-col space-y-1.5 relative flex h-[65%] items-center justify-center p-0"
                dangerouslySetInnerHTML={{ __html: svgImage[0].svg }}
              />
              <div className="p-6 pt-0 mt-4">
                <div className="text-2xl font-bold text-gray-50">
                  {kanban1[0]?.title}
                </div>
                <p className="mt-2 text-sm text-gray-50 ">
                  {kanban1[0]?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {kanban1 && (
          <div className="xl:col-span-4">
            <div className="border bg-card text-card-foreground shadow-sm gradient-primary h-[500px] overflow-hidden rounded-3xl">
              <div className="flex-col space-y-1.5 relative flex h-[65%] items-center justify-center p-0">
                <div
                  dangerouslySetInnerHTML={{ __html: svgImage[1].svg }}
                ></div>
                <div className="absolute w-32 h-32 perspective-1000 cursor-pointer group">
                  <div className="w-full h-full transition-all duration-500 transform-style-preserve-3d animate-none group-hover:animate-[flip_1.5s_linear_infinite]">
                    <div className="w-full h-full absolute backface-hidden">
                      <img
                        src={getFullImageUrl(
                          kanban1[1]?.image.data[0].attributes.url
                        )}
                        alt="Coin Front"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="w-[300px] h-full absolute backface-hidden [transform:rotateY(180deg)]">
                      <img
                        src={getFullImageUrl(
                          kanban1[1]?.image.data[1].attributes.url
                        )}
                        alt="Coin Back"
                        className="w-[300px] h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <div className="text-2xl font-bold">{kanban1[1]?.title}</div>
                <p className="mt-2 text-sm text-muted-foreground ">
                  {kanban1[1]?.description}
                </p>
              </div>
            </div>
          </div>
        )}


        {kanban1 && (
          <div className="xl:col-span-4">
            <div className="border bg-card text-card-foreground shadow-sm gradient-primary h-[500px] overflow-hidden rounded-3xl">
              <div className="flex-col space-y-1.5 relative flex h-[65%] items-center justify-center p-0">
                <div
                  className="flex-col space-y-1.5 relative flex h-[65%] items-center justify-center p-0 "
                  dangerouslySetInnerHTML={{ __html: svgImage[2].svg }}
                />
                <div class="absolute right-10 h-full w-full bg-[radial-gradient(40%_50%_at_50%_50%,_var(--tw-gradient-stops))] from-10% to-transparent opacity-60"></div>
                <div class="absolute left-10 h-full w-full bg-[radial-gradient(40%_50%_at_50%_50%,_var(--tw-gradient-stops))] from-10% to-transparent opacity-40"></div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <div className="text-2xl font-bold">{kanban1[2]?.title}</div>
                <p className="mt-2 text-sm text-muted-foreground ">
                  {kanban1[2]?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {kanban1 && (
          <div className="xl:col-span-7">
            <div className="border bg-card text-card-foreground shadow-sm h-[400px] overflow-hidden rounded-3xl">
              <div className="space-y-1.5 relative flex h-[65%] w-full flex-row items-center overflow-hidden p-0">
                <img
                  src={getFullImageUrl(
                    kanban1[3].image.data[2]?.attributes.url
                  )}
                  alt=""
                  className="absolute -right-[45%] bottom-0 z-10 h-auto w-full max-w-full shadow-lg lg:right-0 lg:h-[90%] lg:w-auto lg:max-w-[60%]"
                />
                <div className="absolute left-4 z-10 flex h-fit w-[35%] flex-wrap justify-center gap-3 xl:left-24 xl:w-[25%]">
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[4]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[9]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[5]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[6]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[7]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[8]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[1]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                  <img
                    src={getFullImageUrl(
                      kanban1[3].image.data[3]?.attributes.url
                    )}
                    alt=""
                    className="transition duration-500 hover:scale-125"
                  />
                </div>
                <div className="absolute -bottom-5 right-[22%] h-[95%] w-[35%] bg-primary opacity-60 blur-2xl bg-blue-500"></div>
                <div className="absolute -bottom-5 right-0 h-[95%] w-[35%] bg-accent opacity-60 blur-2xl bg-yellow-400"></div>
                <div className="absolute -bottom-8 z-20 h-[20%] w-[120%] bg-card blur-md"></div>
                <Background />
              </div>
              <div className="p-6 pt-0 mt-4">
                <div className="text-2xl font-bold">{kanban1[3]?.title}</div>
                <p className="mt-2 text-sm text-muted-foreground ">
                  {kanban1[3]?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {kanban1 && (
          <div className="xl:col-span-5">
            <div className="border bg-card text-card-foreground shadow-sm h-[400px] overflow-hidden rounded-3xl">
              <div className="flex-col space-y-1.5 relative flex h-[65%] items-center justify-center p-0">
                <img
                  src={getFullImageUrl(
                    kanban1[4].image.data[0]?.attributes.url
                  )}
                  alt=""
                />
              </div>
              <div className="p-6 pt-0 mt-4">
                <div className="text-2xl font-bold">{kanban1[4]?.title}</div>
                <p className="mt-2 text-sm text-muted-foreground ">
                  {kanban1[4]?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfinysPage2;
