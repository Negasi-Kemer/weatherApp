const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x, y);
  }, 2000);
};

add(4, 3, (x, y) => {
  console.log("SUM IS: ", x + y);
});
