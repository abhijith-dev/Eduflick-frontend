import axios from "axios";
import {getItem} from '../store/local/storage';

let headers = {
    'content-type':'application/json',
    'access-token':`Bearer ${getItem('token')}`
}
/**
 * get students
 */

export async function getStudent(){
   
}


/**
 * update student
 */

export async function updateStudent(){
    
}


/**
 * delete student
 */

export async function deleteStudent(){
    
}


/**
 * subscribe teacher
 */

export async function subscribe(){
    
}


/**
 * list video meta data for student
 */

export async function videoDetails(){
    
}


/**
 * list video for student
 */

export async function fullVideo(){
    
}


/**
 * question for student
 */

export async function getQuestions(){
    
}


/**
 * submit quiz 
 */

export async function submitQuestions(){
    
}


/**
 * submit quiz 
 */

export async function studentCourse(){

}