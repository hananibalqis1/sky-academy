const BASE_URL = 'http://localhost:5000';     //this can change to real domain after deploy

export const COURSES_URL = BASE_URL + '/api/courses';
export const COURSES_CATEGORIES_URL = COURSES_URL + '/categories'; //or export const COURSES_CATEGORIES_URL = BASE_URL + '/api/courses/categories';
export const COURSES_BY_SEARCH_URL = COURSES_URL + '/search/';
export const COURSES_BY_CATEGORY_URL = COURSES_URL + '/category/';
export const COURSES_BY_ID_URL = COURSES_URL + '/';   // http://localhost:5000/api/courses/4
