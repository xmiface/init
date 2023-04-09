// https://stackoverflow.com/questions/62295172/onclick-save-image-as-in-react
export const handleClickDownloadBlobImage = (linkimg: any) => {
  const bloblink = `data:image/png;base64,${linkimg}`;
  const img = new Image();
  img.src = bloblink;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);
    const a = document.createElement("a");
    a.download = "download.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
};
