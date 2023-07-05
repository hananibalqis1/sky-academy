import express from "express";
import cors from "cors";
import { sample_categories, sample_courses } from "./data";

const app = express();
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

app.get("/api/courses", (req, res) => {
  res.send(sample_courses);
})

app.get("/api/courses/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const courses = sample_courses.filter((course) => {
    course.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  res.send(courses);
})

app.get("/api/courses/categories", (req, res) => {
  res.send(sample_categories);
})

app.get("/api/courses/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const courses = sample_courses.filter((course) => course.categories?.includes(categoryName));
  res.send(courses);
})

app.get("/api/courses/:courseId", (req, res) => {
  const courseId = req.params.courseId;
  const course = sample_courses.find((course) => course.id == courseId);
  res.send(course);
})

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
