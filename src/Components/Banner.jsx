import React, { useEffect, useState } from "react";

import { Typography } from "@mui/material";

export default function Banner() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1"
      );
      const bannerdata = await response.json();
      setData(bannerdata.results[3]);
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundPosition: "50% 90%",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h4"
        sx={{ position: "absolute", bottom: "5%", left: "5%", color: "white" }}
      >
        {data.title}
      </Typography>
      <Typography className="img-text">{data.overview}</Typography>
    </div>
  );
}
