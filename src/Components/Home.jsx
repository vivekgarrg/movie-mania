import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "@mui/material/Pagination";

export default function Home() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(5);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=${page}`
      );
      const bannerdata = await response.json();
      setData(bannerdata.results);
      setTotalPages(bannerdata.total_pages);
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div className="card-container">
        {data?.map((val, index) => {
          return (
            <div className="movie-card" key={index}>
              <MovieCard val={val} />
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          sx={{ marginBottom: "1rem" }}
          color="primary"
          onChange={(e) => setPage(e.target.textContent)}
          count={50}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
}
