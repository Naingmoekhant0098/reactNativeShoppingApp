export const checkUploadFile = (image: any) => {
  if (!image) {
    const err: any = new Error("It is not a valid image.");
    err.status = 409;
    err.code = "Error_Invalid";
    throw err;
  }
};
