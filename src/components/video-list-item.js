import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = (props) => {
    const {movie} = props
  return (
    <div onClick={handleOnClick}>
      <li className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img
            className="media-object img-rounded"
            width="100px"
            height="100px"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt="img film"/>
        </div>
        <div className="media-body">
          <h5 className="title_list_item">{movie.title}</h5>
        </div>
      </div>
      </li>
    </div>
  );
  function handleOnClick(){
       props.callback(movie)     
  }
};
export default VideoListItem;
