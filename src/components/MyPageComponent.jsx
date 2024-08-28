import React from 'react';

const MyPageComponent = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id} className="flex flex-col items-center mt-10">
          <p className="mx-auto max-w-[60rem] text-center text-4xl font-black tracking-tight lg:text-5xl lg:leading-tight mt-8">
            {item.attributes.components[0].title}
          </p>
          <p className="mx-auto mt-6 max-w-[60rem] text-lg leading-7 text-muted-foreground text-center mb-20">
            {item.attributes.components[0].description}
          </p>

          {/* style-image */}
          <div className="relative w-[92%] h-[500px] rounded-[50px] shadow-lg overflow-visible mb-50">
            {/* Gradient layer inside the border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-[50px] opacity-50"></div>

            {/* Image container */}
            <div className="relative w-[1200px] h-full flex items-center justify-center p-20">
              
              {/* frame-top */}
              <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-visible flex flex-col">
                {/* Browser top bar */}
                <div className="h-8 bg-gray-100 flex items-center px-4 flex-shrink-0">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* top-bar-infinys */}
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
                  src={item.attributes.components[0].image.data[0].attributes.url}
                  alt={item.attributes.components[0].image.data[0].attributes.name}
                  className="w-full object-cover"
                  style={{ height: '550px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPageComponent;
