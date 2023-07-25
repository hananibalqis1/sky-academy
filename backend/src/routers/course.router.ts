import { Router } from "express";
import { sample_categories, sample_courses } from "../data";
import asyncHandler from 'express-async-handler';
import { CourseModel } from "../models/course.model";
import { Aggregate } from "mongoose";

const router = Router();

//the connection between db and code is asynchronous
router.get("/seed", asyncHandler(
  async (req, res) => {
    const courseCount = await CourseModel.countDocuments();
    if(courseCount > 0){
      res.send("Seed is already done!");
      return;
    }

    //create all sample course inside db
    await CourseModel.create(sample_courses);
    res.send("Seed is done.");
  }
))

router.get("/", asyncHandler(
  async (req, res) => {
    //find() is to get all values from db
    const courses = await CourseModel.find();
    res.send(courses);
}))

// router.get("/", (req, res) => {
//   res.send(sample_courses);
// })

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
  // regular expression, i = to make search term case insensitive
  const searchRegex = new RegExp(req.params.searchTerm, 'i');

  const courses = await CourseModel.find(
    {title: {$regex: searchRegex}}
  )
  res.send(courses);
}))

// router.get("/search/:searchTerm", (req, res) => {
//   const searchTerm = req.params.searchTerm;
//   const courses = sample_courses.filter((course) => {
//     course.title.toLowerCase().includes(searchTerm);
//   });
//   res.send(courses);
// })

router.get("/categories", asyncHandler(
  async (req, res) => {
    // use aggregate instead of find()
    const categories = await CourseModel.aggregate([
      {
        //pass 'categories' field
        $unwind: '$categories'
      },
      {
        $group: {
          _id: '$categories',
          count: {$sum: 1}    //add new item to count +1
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});  //-1, highest to lowest count

    const all = {
      name: 'All',
      count: await CourseModel.countDocuments()
    }

    categories.unshift(all);  //unshift is apposite of push
    res.send(categories);
}))

//what is unwind? 2 courses has 3 categories
//unwind tags => 6 couses with only property of 1 item
//can use for count and find similar

// router.get("/categories", (req, res) => {
//   res.send(sample_categories);
// })

router.get("/category/:categoryName", asyncHandler(
  async (req, res) => {
    const courses = await CourseModel.find({categories: req.params.categoryName});
    res.send(courses);
}))

// router.get("/category/:categoryName", (req, res) => {
//   const categoryName = req.params.categoryName;
//   const courses = sample_courses.filter((course) => course.categories?.includes(categoryName));
//   res.send(courses);
// })

router.get("/category/:courseId", asyncHandler(
  async (req, res) => {
    const course = await CourseModel.findById(req.params.courseId);
    res.send(course);
}))


// router.get("/:courseId", (req, res) => {
//   const courseId = req.params.courseId;
//   const course = sample_courses.find((course) => course.id == courseId);
//   res.send(course);
// })

export default router;
