import React, { useState, useEffect } from "react";

const ComponentLogo = () => {
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
            "http://localhost:1337/api/main-pages?&populate[heroSection1][populate]=*&populate[kanban1][populate]=*&populate[]"
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

    const hero1 = data[0]?.attributes;
    console.log(hero1);
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
        </>
    );
};

export default ComponentLogo;