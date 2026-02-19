let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
promise.catch(error => {
  console.log(error);
});

