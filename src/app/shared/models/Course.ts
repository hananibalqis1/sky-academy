export class Course{        //make class accessible from the outside of Course.ts
    id!: number;        // ! means mandatory
    title!: string;
    price!: number;
    status?: string[];        //Not yet enroll, Enroll
    favorite: boolean = false;
    stars: number = 0;
    imageUrl!: string;
    category!: string[];    //Science, Robotic, Art, Cooking
    videoTime!: string;
}