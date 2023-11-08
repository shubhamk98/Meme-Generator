import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { getAllMems } from "../Api/MemeApi";
import './Homepage.css'

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMems().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div className="homepage">
      {data.map((item) => (
        <Cards img={item.url} name ={item.name}/>
      ))}
    </div>
  );
};

export default Homepage;
