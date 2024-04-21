const fs = require("fs");
const sass = require("node-sass");

sass.render(
  {
    file: "./style.scss",
  },
  function (error, result) {
    // node-style callback from v3.0.0 onwards
    console.log("🪵");
    console.log({ error });

    if (!error) {
      // No errors during the compilation, write this result on the disk
      fs.writeFileSync("./style.css", result.css, function (err) {
        console.log("🪵");
        console.log(err);

        if (!err) {
          console.log("🪵");
          console.log("success");

          //file written on disk
        }
      });
    }
  }
);
