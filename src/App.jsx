import React from "react";
import Section1 from "./Components/Section1/section1";

const App = () => {
  const users = [
    {
      img: "https://i.pinimg.com/736x/31/61/0b/31610b52042d254bf6b001da99d6b4c7.jpg",
      intro: "",
      color: "gray",
      tag: "Satisfied",
    },
    {
      img: "https://i.pinimg.com/736x/1d/f1/48/1df148bff017c65474e302ce4b0d3ec5.jpg",
      intro: "",
      color: "gray",
      tag: "UnderServed",
    },
    {
      img: "https://i.pinimg.com/736x/ce/37/ca/ce37ca5e892e17637f1828e18debe78a.jpg",
      intro: "",
      color: "gray",
      tag: "UnderBanked",
    },
    {
      img: "https://i.pinimg.com/1200x/e5/64/22/e564222210b28cb02884d2a650c462a4.jpg",
      intro: "",
      color: "gray",
      tag: "UnderBanked",
    },
    {
      img: "https://i.pinimg.com/736x/31/61/0b/31610b52042d254bf6b001da99d6b4c7.jpg",
      intro: "",
      color: "gray",
      tag: "Satisfied",
    },
    {
      img: "https://i.pinimg.com/736x/1d/f1/48/1df148bff017c65474e302ce4b0d3ec5.jpg",
      intro: "",
      color: "gray",
      tag: "UnderServed",
    },
    {
      img: "https://i.pinimg.com/736x/ce/37/ca/ce37ca5e892e17637f1828e18debe78a.jpg",
      intro: "",
      color: "gray",
      tag: "UnderBanked",
    }
  ];

  return (
    <div>
      <Section1 users={users} />
      
    </div>
  );
};
export default App;
