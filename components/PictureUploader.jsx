import React, { useEffect, useState } from "react";

const PictureUploader = ({ image, onChange}) => {
  const [error, setError] = useState("");

  const onImageLoad = async (e) => {
    let file = document.getElementById("mockSelector");
    file.click();
  };

  const loadingImageFile = (event) => {
    const element = event.target.files[0];
    if (element) {
      if (element.size > 1200000) {
        setError("Max File Size 4mb");
        setTimeout(() => {
          setError("");
        }, 2000);
        return;
      }

      let _newImage = {
        image: "",
        url: "",
      };

      let _image = document.createElement("img");
      _image.id = "image";
      _image.className = "campaign-card-image";
      _image.src = URL.createObjectURL(element);

      const reader = new FileReader();
      reader.readAsDataURL(element);

      reader.onloadend = () => {
        let _url = URL.createObjectURL(element);
        _url = _url.split();
        _newImage.image = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        _newImage.url = URL.createObjectURL(element);

        onChange(_newImage);

        _image.onload = function () {
          URL.revokeObjectURL(_image.src); // free memory
        };
      };
    }
  };

  useEffect(() => {}, [image]);

  return (
    <div className={`w-full p-4 bg-[#e8f0fd] dark:bg-[#f4f4f566] rounded-md h-fit`}>
      <input
        id="mockSelector"
        type="file"
        className="hidden"
        onChange={loadingImageFile}
      />
      <div className={`flex h-fit w-full justify-center items-center`}>
        <div className="w-full flex justify-center items-center">
          <img
            id="ImagePreview"
            src={image ? image : '/assets/images/profile.png'}
            alt="User Picture"
            className="rounded-full w-[100px] h-[100px] min-w-[60px]"
          />
        </div>
        <div className={`w-full flex flex-col justify-center items-center px-1`}>
          <button
            type="button"
            className="px-6 py-2 bg-slate-500 rounded-lg text-white hover:shadow-lg transitions"
            onClick={onImageLoad}
          >Select file</button>
          {error ? (
            <div className="flex w-full mb-[-20px] justify-center items-center">
              <span className="text-sm text-[red] text-center align-middle">
                {error}
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default PictureUploader;
