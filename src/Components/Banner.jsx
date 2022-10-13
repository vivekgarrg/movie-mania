import React, { useEffect, useState } from "react";
import { Rating, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Banner() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1"
      );
      const bannerdata = await response.json();
      setData(bannerdata.results[1]);
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
        width: "98%",
        height: "320px",
        borderRadius: "10px",
        boxShadow: "0px 0px 15px #EEEE",
        margin: "auto",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundSize: "100% 320px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          color: "#000051",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span> {data.title}</span>
        <Rating
          sx={{ marginLeft: "1rem" }}
          icon={<FavoriteIcon fontSize="large" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="large" />}
          readOnly
          value={parseFloat(data.vote_average / 2)}
          precision={0.5}
        />
      </Typography>
    </div>
  );
}
