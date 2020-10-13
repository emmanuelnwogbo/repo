const express = require("express");
const { getVideoDurationInSeconds } = require("get-video-duration");

const router = express.Router();

const convertSeconds = sec => {
  let hrs = Math.floor(sec / 3600);
  let min = Math.floor((sec - hrs * 3600) / 60);
  let seconds = sec - hrs * 3600 - min * 60;
  seconds = Math.round(seconds * 100) / 100;

  let result = min < 10 ? min : min;
  if (seconds < 10) {
    result += ":0" + (seconds < 10 ? seconds : seconds);
  } else {
    result += ":" + (seconds < 10 ? seconds : seconds);
  }
  return result;
};

/*const videos = [
  {
    url: "https://aws-course-nwogbo.s3.eu-west-2.amazonaws.com/C0237.mp4",
    durationString: 'hey',
    duration: getVideoDurationInSeconds (
      "https://aws-course-nwogbo.s3.eu-west-2.amazonaws.com/C0237.mp4"
    ).then(duration => {
      console.log(convertSeconds(duration), 'hello');
      this.durationString =  convertSeconds(duration);
      console.log(this.durationString, 'yo')
      //return convertSeconds(duration);
    })
  }
];*/

const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.get("/track-data", (req, res) => {
  res.status(200).json({ message: 'videos' });
});

module.exports = {
  path: "/api",
  handler: router
};
