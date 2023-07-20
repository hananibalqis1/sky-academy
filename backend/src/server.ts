import express from "express";
import cors from "cors";
import { sample_categories, sample_courses, sample_users } from "./data";
import jwt from "jsonwebtoken";

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

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
    course.title.toLowerCase().includes(searchTerm);
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

app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body;     //destructuring assignment
  const user = sample_users.find((user) => user.email === email && user.password === password);

  if(user){
    res.send(generateTokenResponse(user));

  }
  else{
    res.status(400).send("User name or password is not valid!");
  }

})

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  }, "SomeRandomText", {
    expiresIn: "30d"
  });

  user.token = token;
  return user;
}

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
