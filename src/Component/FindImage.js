import React, { useState } from "react";
import axios from "axios";

const FindImage = () => {
  const [image, setImage] = useState([]);
  const getImage = () => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=5&query=office&client_id=eliwdMQ1XAMIioLFe-pLh9ryDRD0Bw-K5VLtJYlUObM"
      )
      .then((res) => {
        console.log(res);
        setImage(res.data.results);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={getImage}>
              Get Image
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {image.map((val, i) => {
            return (
              <div className="col-4" key={i}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urls.small} className="card-img-top" alt="Searched-Item" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FindImage;
