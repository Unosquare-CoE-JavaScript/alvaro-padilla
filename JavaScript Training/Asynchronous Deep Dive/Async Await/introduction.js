"use strict";

const plainFunction = async () => {
  console.log("Start");
  return "Done";
};

plainFunction().then((res) => console.log(res));
