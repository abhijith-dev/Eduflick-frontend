import axios from "axios";
import {getItem} from '../store/local/storage';

let headers = {
    'content-type':'application/json',
    'access-token':`Bearer ${getItem('token')}`
}

/**
 * add course details
 */

export async function addCourseDetails(){

}


/**
 * add course video
 */

export async function addCourseVideo(){

}


/**
 * add course questions
 */

 export async function addCourseQuestions(){

}

/**
 * list courses 
 */

 export async function listCourses(){

}