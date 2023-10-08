export const formSectionArray = (array, field, data) => {
  if (data != "") {
    if (!array.includes(field)) {
      array.push(field);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == field) {
        array.splice(i, 1);
      }
    }
  }

  return array;
};

// export const formSectionArray = (array, field, data) => {

//     if (field == "firstName") {
//       pushArray(array, field, data)
//     } else if (condition) {

//     }

//     return array;
//   };

//   const pushArray = (array, field, data)=>{
//       if (data != "") {
//           if (!array.includes(field)) {
//             array.push(field);
//           }
//         } else {
//           for (let i = 0; i < array.length; i++) {
//             if (array[i] == field) {
//               array.splice(i, 1);
//             }
//           }
//         }
//   }
