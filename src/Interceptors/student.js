import axios from "axios";
import {getItem} from '../store/local/storage';
import getUserInfo from "../functions/getUserInfo";
const BASE_URL = process.env.REACT_APP_BASE_URL

let headers = {
    'content-type':'application/json',
    'access-token':`Bearer ${getItem('token')}`
}


export async function subscribeTrainer(id){
    let response = null
  let user = getUserInfo()
  let userId = user.id
  let body ={
    trainerid:id,
    learnerid:userId
}
  await axios({
      url:`${BASE_URL}/Subscription/Subscribe`,
      method:'POST',
      headers:headers,
      data:body
  })
  .then(res=>{
     response = res.data
  })
  .catch(error=>{
      response = null
  })
  return response
}


/**
 * list video meta data for student
 */

export async function videoDetails(){
  let response = []
  let user = getUserInfo()
  let userId = user.id
  await axios({
      url:`${BASE_URL}/CoureCreation/getSubscribedcourses/${userId}`,
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
 * trainer list
 */

 export async function getTrainers(){
    let response = []
    let user = getUserInfo()
    let userId = user.id
    await axios({
        url:`${BASE_URL}/Account/getTrainers/${userId}`,
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
 * question for student
 */

export async function getQuestions(id){
    let response = []
    await axios({
        url:`${BASE_URL}/CoureCreation/course/getQuiz/${id}`,
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
 * submit quiz 
 */

export async function submitQuestions(score,courseId){
    let response = null
    let user = getUserInfo()
    let userId = user.id
    let data = new FormData()
    data.append('courseId',courseId)
    data.append('score',score)
    data.append('learnerId',userId)
    await axios({
        url:`${BASE_URL}/CoureCreation/course/updatecoursecompletion`,
        method:'POST',
        headers:headers,
        data:data
    })
    .then(res=>{
       response = res.data
    })
    .catch(error=>{
        response = null
    })
    return response 
}


/**
 * submit quiz 
 */

 export async function StudentCourses(){
    let response = []
    let user = getUserInfo()
    let userId = user.id
    await axios({
        url:`${BASE_URL}/CoureCreation/getCompletedcourses/${userId}`,
        method:'GET',
        headers:headers
    })
    .then(res=>{
        if(res.data===null)
            response=[];
        else
            response = res.data;
    })
    .catch(error=>{
        response = []
    })
    return response
  }

  export async function searchTrainer(key){
    let response = []
    let user = getUserInfo()
    let userId = user.id;
    let fromdata = new FormData()
    fromdata.append("SearchElement",key)
    await axios({
        url:`${BASE_URL}/coursecreation/getsearchresults/${userId}`,
        method:'POST',
        headers:headers,
        data:fromdata
    })
    .then(res=>{
        if(res.data===null)
            response=[];
        else
            response = res.data;
    })
    .catch(error=>{
        response = []
    })
    return response
  }