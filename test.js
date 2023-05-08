const { exec } = require("child_process");
const { exit } = require("process");

exec("cat $1", (err, stdout, stderr) => {
  console.log({ stdout, err, stderr });
});

exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
  if (err || stderr) {
    (err && console.error(err)) || (stderr && console.log(stderr));
    exit(1);
  } else {
    console.log(process.argv);
    exit(1);
  }
});
