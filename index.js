const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require("./data/course.json");
const courseDetails = require("./data/course-details.json");

app.get("/", (req, res) => {
  res.send("course API is running");
});

app.get("/course-categories", (req, res) => {
  res.send(courseCategories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "10") {
    res.send(courseDetails);
  } else {
    const categoryCourseDetails = courseDetails.filter((courseDetail) => courseDetail.category_id === id);
    res.send(categoryCourseDetails);
  }
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courseDetails.find((selectedCourse) => selectedCourse._id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log("course API is running on", port);
});
