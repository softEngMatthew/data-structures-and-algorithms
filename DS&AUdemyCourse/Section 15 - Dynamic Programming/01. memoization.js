function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80(n) {
  let cache = {};

  //One way to avoid putting the cache in the global scope
  return function (n) {
    //check if the property exists in our object
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log("1", memoized(5));
console.log("2", memoized(5));
console.log("3", memoized(5));
