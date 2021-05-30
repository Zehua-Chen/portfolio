const path = require("path");
const ghpages = require("gh-pages");

console.log("publishing");

ghpages.publish(path.join("..", "public"), (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("done");
  }
})
