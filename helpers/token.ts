export const randomString = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
  };
  
  export const randomiseToken = function () {
    return randomString() + randomString() + randomString(); // to make it longer
  };
  