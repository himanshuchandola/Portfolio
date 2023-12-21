import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ip = data.ip;
        const lastVisit = localStorage.getItem(ip);
        const currentTime = new Date().getTime();

        if (!lastVisit || currentTime - lastVisit > 24 * 60 * 60 * 1000) {
          const newCount = count + 1;
          setCount(newCount);
          localStorage.setItem(ip, currentTime);
        }
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }, [count]);

  return (
    <div>
      <h1>Visitor Count: {count}</h1>
    </div>
  );
};

export default VisitorCounter;
