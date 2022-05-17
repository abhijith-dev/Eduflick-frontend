
export function addItem(key,value){
    sessionStorage.setItem(key,value)
}

export function getItem(key){
    sessionStorage.getItem(key)
}

export function removeItem(key){
    sessionStorage.removeItem(key)
}

export function clearstorage(){
    sessionStorage.clear()
}