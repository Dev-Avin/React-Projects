// var arr1 = [1 ,456 , 46, 5786,87,99]
// var newArr = arr1.sort((a, b) => a - b)
// console.log(newArr);

  //Question 1:write a program to print the marks of a student in an object using for loop
//   let marks = {
//     Harry: 98,
//     Rohan: 56,
//     Aakash: 78,
//   };
  
//   let students ;

//   for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     console.log("The marks of " + student + " are " + marks[student]);
//   }
  

// let marks = {
//     Harry: 98,
//     Rohan: 56,
//     Aakash: 78,
//   };
  
//   for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log(
//         "The marks of " +
//          Object.keys(marks)[i] +
//           " are " 
//           + marks[Object.keys(marks)[i]]
    
//     );
//   }
  
// for(let student in marks){
//     console.log(`The markd of the ${student} are ${marks[student]}`)
// }

let marks = {
    Harry: 98,
    Rohan: 56,
    Aakash: 78,
  };
  
  let students = Object.keys(marks);
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    console.log("The marks of " + student + " are " + marks[student]);
  }
    