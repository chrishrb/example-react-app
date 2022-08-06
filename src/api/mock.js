export function predict(file) {
  // TODO: call api and return response
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, {
      "animal": "dog",
      "image_url": "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
    });
    // Example for error
    // setTimeout(reject, 500, {
    //   "animal": "dog",
    //   "image_url": "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
    // });
  });
}
