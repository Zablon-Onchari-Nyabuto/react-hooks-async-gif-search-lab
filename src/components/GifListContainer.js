import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("dolphins");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [search]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitSearch={setSearch} />
    </div>
  );
}

export default GifListContainer;