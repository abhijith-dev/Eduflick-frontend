import { getItem } from "../store/local/storage";

export default function getUserInfo(){
    let user = getItem('user')
    return JSON.parse(user)
}