// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
  for(let i=0; i<array.length; i++){
    let currentSalary = array[i];
    currentSalary = operation(currentSalary);
  }
  return array.map(operation); // Return a new array with the results of applying the operation to each element
}

// Using `forEach` function here
let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
Answer: จุดสังเกตุตรง forEach(employeeSalaries, addSalary5000); 
เพราะ addSalary5000 มีการส่ง Argument เข้าไปในฟังก์ชัน forEach 
เพื่อใช้ในการดำเนินการกับแต่ละสมาชิกของอาร์เรย์ employeeSalaries

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
Answer: จุดสังเกตุตรง forEach(array, operation) 
เพราะ forEach เป็นฟังก์ชันที่รับ Argument จากฟังก์ชันอื่น

====================================
*/
