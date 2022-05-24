import React, { useState, useEffect } from "react";
import ImgIconCross from "../../assets/img/icon-cross.svg";
import API from "../../API";
const api = new API();

function Preview({ setShowPreview, selectedImageId }) {
  const [image, setImage] = useState({});
  useEffect(() => {
    api
      .getUserbackground(selectedImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        alert("Failed to connect API: ImageDetail");
      });
  }, []);
  return (
    <body>
      {/* <!-- preview-modal --> */}
      <section>
        <div class="preview">
          <img
            src={ImgIconCross}
            alt=""
            class="icon-cross"
            onClick={() => setShowPreview(false)}
          />
          <img src={image.generated_background}></img>
          <button class="preview-DL" type="submit">
            Download
          </button>
        </div>
      </section>
    </body>
  );
}

export default Preview;
