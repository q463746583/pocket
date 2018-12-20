const promise = new Promise((resolve, reject) => {
  resolve("God Data");
});

promise.then(data => {
  console.log(data);
});
