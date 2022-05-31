import { getItem } from "../store/local/storage";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers  = {
    Authorization:`Bearer ${getItem('token')}`,
}

/**
 * create student
 */
export async function createStudent(body){
   let response = {}
   delete headers.Authorization
   await axios({
       url:`${BASE_URL}/Account/learner/RegisterLearner`,
       method:'POST',
       headers:headers,
       data:body
   })
   .then(res=>{
      if(res.data.error === null){
        response.error= false
        response.data = res.data
      }
      else{
          response.error = true
          response.data = res.data.error
      }

   })
   .catch(error=>{
    response.error = true
    response.data = error.response.message
   })
   return response
}


/**
 * login student
 */
 export async function loginStudent(body){
    let response = {}
    delete headers.Authorization
    await axios({
        url:`${BASE_URL}/Account/learner/login`,
        method:'POST',
        headers:headers,
        data:body
    })
    .then(res=>{
       if(res.data.error === null){
         response.error= false
         response.data = res.data
       }
       else{
           response.error = true
           response.data = res.data.error
       }
 
    })
    .catch(error=>{
     response.error = true
     response.data = error.response.message
    })
    return response
}

/**
 * create teacher
 */
 export async function createTeacher(body){
    let response = {}
   delete headers.Authorization
   await axios({
       url:`${BASE_URL}/Account/trainer/RegisterTrainer`,
       method:'POST',
       headers:headers,
       data:body
   })
   .then(res=>{
      if(res.data.error === null){
        response.error= false
        response.data = res.data
      }
      else{
          response.error = true
          response.data = res.data.error
      }

   })
   .catch(error=>{
    response.error = true
    response.data = error.response.message
   })
   return response
}


/**
 * login teacher
 */
 export async function loginTeacher(body){
    let response = {}
    delete headers.Authorization
    await axios({
        url:`${BASE_URL}/Account/trainer/login`,
        method:'POST',
        headers:headers,
        data:body
    })
    .then(res=>{
       if(res.data.error === null){
         response.error= false
         response.data = res.data
       }
       else{
           response.error = true
           response.data = res.data.error
       }
 
    })
    .catch(error=>{
     response.error = true
     response.data = error.response.message
    })
    return response 
}


/**
 * forgot password student
 */
 export async function forgotPassword(body){
    let response = {}
    await axios({
        url:`${BASE_URL}/ForgotPassword/send`,
        method:'POST',
        data:body
    })
    .then(res=>{
        response.error = true
        response.data = 'success'
    })    
    .catch(error=>{
     response.error = false
     response.data = error.response.message
    })
    return response
}

export async function resetPassword(body){
    let response = {}
    await axios({
        url:`${BASE_URL}/ForgotPassword/verifyOTP`,
        method:'POST',
        data:body
    })
    .then(res=>{
        response.error = true
        response.data = 'success'
    })    
    .catch(error=>{
     response.error = false
     response.data = error.response.message
    })
    return response
}


