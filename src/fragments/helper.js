
export const containsUppercase = (str) => {
  return /[A-Z]/.test(str);
};
export const containsLowercase = (str) => {
  return /[a-z]/.test(str);
};

export const containsNumbers = (str) => {
  return /[0-9]/.test(str);
};

export const containsSymbols = (str) => {
  return /[^a-zA-Z]+/.test(str);
};

export const getCroppedImage = async ({
  image,
  dataURL,
  crop,
  fileName,
  aspectRatio,
}) => {
  let _image;
  if (image) {
    _image = image;
  } else if (dataURL) {
    let image = new window.Image();
    image.src = dataURL;
    _image = image;
  } else {
    throw new Error("Pass an image or a dataURL");
  }

  let { naturalWidth, naturalHeight } = _image;
  let imageAspectRatio  = naturalWidth / naturalHeight


 

  let imageIsWiderThanContainer = imageAspectRatio > aspectRatio;

  let width = imageIsWiderThanContainer
    ? aspectRatio * naturalHeight
    : naturalWidth;

  let height = imageIsWiderThanContainer
    ? naturalHeight
    : (1 / aspectRatio) * naturalWidth;

  const canvas = document.createElement("canvas");
  const scaleX = crop.scale;
  const scaleY = crop.scale;
  canvas.width = width / scaleX;
  canvas.height = height / scaleY;
  const ctx = canvas.getContext("2d");
  let y = crop.y * -1.75;
  let x = crop.x * -1.1;



  ctx.drawImage(_image, x, y, width, height, 0, 0, width, height);
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        blob.name = fileName;
        resolve(blob);
      },
      "image/jpeg",
      1
    );
  });
};
