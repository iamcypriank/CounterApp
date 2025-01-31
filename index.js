//documents
let countEL =  document.getElementById("count-el")
let saved = document.getElementById("saved")
//variables
let count = 0
let savedData = "Previous Entries : "
//functions

//increament functions
function increment(){
    count++
    countEL.textContent = count
}

//reset
function reset(){
    count = 0 
    countEL.textContent = count
    

}

//save
function save(){
    savedData += count + " + "
    count = 0
    countEL.textContent = count
    saved.textContent  = savedData
}

//clear
function clearData(){
    count = 0 
    savedData = "Previous Entries : "
    countEL.textContent = count
    saved.textContent  = ""
}