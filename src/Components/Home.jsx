import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from '@mui/material/Pagination';

export default function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1"
      );
      const bannerdata = await response.json();
      console.log(bannerdata.results);
      setData(bannerdata.results);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="card-container">
      {data.map((val, index) => {
        return (
          <div className="movie-card"  key={index}>
            <MovieCard val={val}/>
          </div>
        );
      })}
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <Pagination onChange={(e)=>console.log(e)} count={3} variant="outlined" shape="rounded" />
      </div>
    </>
  );
}
