import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function MovieCard({ val }) {
  console.log(val);
  return (
    <Card
      sx={{
        width: "100%",
        height: 400,
        paddingBottom: "1rem",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${val.poster_path})`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundPosition: "center",
        borderRadius: "0",
        opacity: "0.6",
      }}
    >
      <div className="card-div">
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
        />
        <Typography className="card-title" variant="body">
          {val.title}
        </Typography>
        <Rating
          sx={{background:"rgba(255,255,255,0.1)", width:"fit-content"}}
          className="card-rating"
          readOnly
          value={parseFloat(val.vote_average / 2)}
          precision={0.5}
        />
        <Typography className="card-desc" variant="body">
          {val.overview}
        </Typography>
      </div>

      {/* <Button className="card-btn" variant="outlined" color="error" >Add To Favourites</Button> */}
    </Card>
  );
}
