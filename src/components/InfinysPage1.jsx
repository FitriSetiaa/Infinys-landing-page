import React, { useEffect, useState } from 'react';

const InfinysPage1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data dari API Strapi
    const fetchData = async () => {
      const response = await fetch('https://diligent-crystal-2152742251.strapiapp.com/api/main-pages?populate[seo][populate][image][populate][media]=true&populate[mainHeader][populate]=*&populate[mitra][populate]=*');
      const result = await response.json();
      setData(result.data);

      // Set title dari SEO data
      if (result.data[0]?.attributes?.seo?.metaTitle) {
        document.title = result.data[0].attributes.seo.metaTitle;
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {/* Bagian SEO tidak di-styling */}
          {/* <p>{item.attributes.seo.metaTitle}</p> */}
          {item.attributes.seo.image?.data?.attributes?.url && (
            <img
              src={item.attributes.seo.image.data.attributes.url}
              alt={item.attributes.seo.image.data.attributes.alt || 'SEO Image'}
            />
          )}

          {/* Bagian yang di-styling */}
          {item.attributes.mainHeader.map((header) => (
            <div key={header.id} className="flex flex-col items-center mt-10">
              <p className="mx-auto max-w-[60rem] text-center text-4xl font-black tracking-tight lg:text-5xl lg:leading-tight mt-8">
                {header.title}
              </p>
              <p className="text-custom-deskripsi mx-auto mt-2 max-w-[64rem] text-lg leading-8 text-muted-foreground text-center mb-4">
                {header.description}
              </p>
              {header.button && (
                <button className="mb-10 bg-blue-600 text-white px-8 py-2 rounded-md text-sm font-medium flex items-center shadow-[0_4px_15px_0_rgba(59,130,246,0.5)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.75)] transition-shadow duration-300">
                  <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_549_575)">
                      <path d="M18.9859 0.114519C19.1511 0.210265 19.2789 0.35919 19.3485 0.536964C19.418 0.714738 19.4253 0.910852 19.369 1.09327L16.3298 10.9685H21.9373C22.1021 10.9685 22.2633 11.0166 22.4011 11.1071C22.5388 11.1977 22.647 11.3265 22.7123 11.4778C22.7776 11.6291 22.7972 11.7962 22.7687 11.9585C22.7401 12.1208 22.6646 12.2712 22.5516 12.3911L9.0516 26.7348C8.92097 26.8737 8.74715 26.9643 8.55847 26.9918C8.36978 27.0192 8.17735 26.982 8.01255 26.8861C7.84775 26.7902 7.7203 26.6413 7.65096 26.4636C7.58162 26.286 7.57449 26.0902 7.63072 25.908L10.6699 16.031H5.06235C4.89756 16.0311 4.73635 15.9829 4.59863 15.8924C4.46092 15.8019 4.35272 15.673 4.28739 15.5217C4.22206 15.3705 4.20247 15.2033 4.23103 15.041C4.25959 14.8787 4.33505 14.7284 4.4481 14.6085L17.9481 0.264706C18.0786 0.125992 18.2521 0.0354909 18.4405 0.00791705C18.629 -0.0196568 18.8212 0.0190062 18.9859 0.114519Z" fill="#FED10B" stroke="#FED10B" strokeWidth="0.5"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_549_575">
                        <rect width="27" height="27" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='text-lg ml-2'>
                 {header.button.text}
                  </p>
                </button>
              )}

              {/* Gambar utama dengan styling */}
              {header.image?.data?.[0]?.attributes?.url && (
                <div className="relative w-[92%] h-[500px] rounded-[50px] shadow-lg overflow-visible mb-50">

                  {/* Lapisan gradien di dalam border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-[50px] opacity-50"></div>

                  {/* Kontainer gambar */}
                  <div className="relative w-[1200px] h-full flex items-center justify-center p-20">
                    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-visible flex flex-col">

                      {/* Top bar browser */}
                      <div className="h-8 bg-gray-100 flex items-center px-4 flex-shrink-0">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex justify-center items-center gap-1 w-full h-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole text-green-500">
                            <circle cx="12" cy="16" r="1"></circle>
                            <rect x="3" y="10" width="18" height="12" rx="2"></rect>
                            <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                          </svg>
                          <p className="text-xs font-medium text-muted-foreground">cloudkilat.com</p>
                        </div>
                      </div>
                      <img
                        src={header.image.data[0].attributes.url}
                        alt={header.image.data[0].attributes.alt || 'Main Header Image'}
                        className="w-full object-cover"
                        style={{ height: '550px' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

         
          {/* Bagian mitra */}
          {item.attributes.mitra && (
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold">{item.attributes.mitra.title}</h3>
              <div className="flex justify-center mt-4 space-x-4">
                {item.attributes.mitra.logoImage?.data?.map((logo) => (
                  <img
                    key={logo.id}
                    src={logo.attributes.url}
                    alt={logo.attributes.name || 'Mitra Logo'}
                    className="w-20 h-auto"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfinysPage1;
