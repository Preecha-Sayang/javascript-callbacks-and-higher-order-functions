

//Exercise #2: At Least Five Function
const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];



function checkGradeOver70(score) {
  // Start coding here
  let count = 0
  for (let i=0; i<score.length; i++  ){
    if(score[i]>70){
        count=count+1
    }
  }
if(count>=5){
  return ("ผ่านเกณฑ์ ✅")
}   else{ 
  return ("ไม่ผ่านเกณฑ์ ❌")
}
}



function atLeastFive(array, operation) {
  // Start coding here
let result=0
  result=operation(array)
if(result == "ผ่านเกณฑ์ ✅"){
  result="true"
} else{
  result="false" 
}
return result
}

// Using `atLeastFive` function here
let scoreRoom1Result =atLeastFive(studentScoresRoom1,checkGradeOver70)
let scoreRoom2Result =atLeastFive(studentScoresRoom2,checkGradeOver70)
let scoreRoom3Result =atLeastFive(studentScoresRoom3,checkGradeOver70)

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
function checkGradeOver70(score) {
  // Start coding here
  let count = 0
  for (let i=0; i<score.length; i++  ){
    if(score[i]>70){
        count=count+1
    }
  }
if(count>=5){
  return ("ผ่านเกณฑ์ ✅")
}   else{ 
  return ("ไม่ผ่านเกณฑ์ ❌")
}
}



2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?

function atLeastFive(array, operation) {
  // Start coding here
let result=0
  result=operation(array)
if(result == "ผ่านเกณฑ์ ✅"){
  result="true"
} else{
  result="false" 
}
return result
}
====================================
*/
