import axios from "axios";
import {getItem} from '../store/local/storage';
import {addItem} from '../store/session/storage'
import getUserInfo from '../functions/getUserInfo';
const BASE_URL = process.env.REACT_APP_BASE_URL

let headers = {
    'access-token':`Bearer ${getItem('token')}`
}

/**
 * add course details
 */

export async function TeacherCourses(){
    let response = []
    let user = getUserInfo()
    let userId = user.id
    await axios({
        url:`${BASE_URL}/CoureCreation/getcourses/${userId}`,
        method:'GET',
        headers:headers
    })
    .then(res=>{
       response = res.data
    })
    .catch(error=>{
        response = []
    })
    return response
}

/**
 * add course video
 */

 export async function addCourseBasic(body){
    let response = null
    let date =  new Date()
    let user = getUserInfo()
    let userId = user.id
    body.InstructorId = userId
    body.CreatedDate = date.toDateString()
    await axios({
        url:`${BASE_URL}/CoureCreation/course/createcourse`,
        method:'POST',
        headers:headers,
        data:body
    })
    .then(res=>{
       addItem('courseId',res.data.courseID)
       response.error = false
    })
    .catch(error=>{
        response.error = true
    })
    return response
}


/**
 * add course video
 */

export async function addCourseVideo(data){
    let response = null
    let date =  new Date()
    let courseId = sessionStorage.getItem('courseId')
    await axios({
        url:`${BASE_URL}/CoureCreation/trainer/UploadFile/${courseId}`,
        method:'POST',
        headers:headers,
        data:data
    })
    .then(res=>{
       response.error = false
    })
    .catch(error=>{
        response.error = true
    })
    return response
}


/**
 * add course questions
 */

 export async function addCourseQuestions(data){
    let response = null
    let courseId = sessionStorage.getItem('courseId')
    await axios({
        url:`${BASE_URL}/CoureCreation/course/createquiz/${courseId}`,
        method:'POST',
        headers:headers,
        data:data
    })
    .then(res=>{
       response.error = false
    })
    .catch(error=>{
        response.error = true
    })
    return response
}

