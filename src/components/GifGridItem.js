import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounceIn animate__delay-2s">
      <img src={url} alt={id} />
      <p>{title}</p>
    </div>
  );
};
