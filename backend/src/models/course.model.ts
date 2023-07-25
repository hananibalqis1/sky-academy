import { Schema, model } from "mongoose";

export interface Course{
  id: number;
  title: string;
  price: number;
  status: string[];        //Not yet enroll, Enroll
  favorite: boolean;
  stars: number;
  imageUrl: string;
  categories: string[];    //Science, Robotic, Art, Cooking
  videoTime: string;
}

export const CourseSchema = new Schema<Course>({
  // field of the database is assigned
  id: {type: Number, required: false, unique: true},
  title: {type: String, required: true},
  price: {type: Number, required: true},
  status: {type: [String], required: true},
  favorite: {type: Boolean, required: false},
  stars: {type: Number, required: true},
  imageUrl: {type: String, required: true},
  categories: {type: [String], required: true},
  videoTime: {type: String, required: true}
},{
  // virtual are values that are cannot be saved in db,
  // it will be generated based on the value inside db
  toJSON: {     //send values from api to client
    virtuals: true    //_id
  },
  toObject: {     //get value from db and use inside code
    virtuals: true    //_id
  },
  timestamps: true
});

//create model to create, read, update and delete operations to db
export const CourseModel = model<Course>('course', CourseSchema);
