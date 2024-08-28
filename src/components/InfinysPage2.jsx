import React, { useState, useEffect } from 'react';

const InfinysPage2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://diligent-crystal-2152742251.strapiapp.com/api/main-pages?&populate[header1][populate]=*&populate[kanban1][populate]=*');
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

    return (
        <div className="container mx-auto px-4">
            {data.map((item) => {
                const attributes = item.attributes || {};
                const header1 = attributes.header1 || {};
                const advantages = attributes.kanban1 || [];

                return (
                    <div key={item.id} className="text-center">
                        {/* Header Section page 2 */}
                        <div className="mb-10 ">
                            <img
                                src={header1.image?.data?.[0]?.attributes?.url || '/placeholder-image.png'}
                                alt="Company Logo"
                                className="bg-white rounded-2xl mx-auto w-20 h-20 mb-4 mt-60 shadow-[0_4px_15px_0_rgba(59,130,246,0.5)]"
                            />
                            <h1 className="text-3xl font-black tracking-tight">{header1.title}</h1>
                            <p className="mx-auto mt-6 max-w-[72rem] text-muted-foreground">{header1.description}</p>
                        </div>

                        {/* Advantages Section ID-Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-5">
                            {advantages.length > 1 ? (
                                advantages.map((advantage, index) => (
                                    <div
                                        key={advantage.id}
                                        className={`rounded-3xl p-8 text-gray border shadow-sm group h-[500px] flex flex-col items-center justify-center
                                            ${advantage.id === 6 ? 'bg-custom-gradient'
                                            : advantage.id === 7 ? 'bg-gray-100'
                                            : advantage.id === 8 ? 'bg-gray-100' 
                                            : advantage.id === 9 ? 'bg-gray-100 w-[725px] '
                                            : advantage.id === 10 ? 'bg-gray-100 w-[500px] ml-80'
                                            : 'bg-white'
                                            }`}
                                    >
                                        {/* icon-image */}
                                        <img
                                            src={advantage.image?.data?.[0]?.attributes?.url || `/icon-${index + 1}.png`}
                                            alt={advantage.title || `Advantage ${index + 1}`}
                                            className="w-full h-[70%] mb-4"
                                        />


                                        {/* Text Section */}
                                        <div className={`text-left mt-auto ${advantage.id === 6 ? 'text-white' : 'text-black'}`}>
                                            <h4 className={`text-2xl font-black mb-2 ${advantage.id === 6 ? 'text-white' : 'text-black'}`}>
                                                {advantage.title || `Feature ${index + 1}`}
                                            </h4>
                                            <p className={`font-custom-text-deskripsi mt-1 text-sm 
                                                ${advantage.id === 6 ? 'text-white'
                                                // : advantage.id === 7 ? 'max-w-[10 rem]'
                                                : 'text-black'}`}>
                                                {advantage.description || "Description of the feature"}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p></p>
                            )}
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default InfinysPage2;