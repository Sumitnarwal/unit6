import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseCard from "./Components/CourseCard";
import.meta.env.VITE_DATA_KEY;

function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <section>
      <CourseCard />
    </section>
  );
}

export default App;
