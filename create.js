
import {
    getDatabase,
    ref,
    set,
  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
  
  const db = getDatabase();
  
  //Variable DOM
  var namebox = document.getElementById("Namebox");
  var rollbox = document.getElementById("Rollbox");
  var secbox = document.getElementById("Secbox");
  var email_box = document.getElementById("email_box")
  var cccd_box = document.getElementById("cccd_box")

  var cash_box = document.getElementById("cash")
  var cashvnd = 100000
  var cashdollar = 10
  var insBtn = document.getElementById("Insbtn");

  function insertData() {
    set(ref(db, "TheStudents/" + rollbox.value), {
      NameOfStd: namebox.value,
      RollNo: rollbox.value,
      Section: secbox.value,
      email : email_box.value,
      cccd : cccd_box.value,
      cashes : cashvnd,
      cashesdollar : cashdollar
    })
      .then(() => {
        alert("data stored successfully");
      })
      .catch((error) => {
        alert("unsuccessful, error: " + error);
      });
  }
  
  insBtn.addEventListener("click", insertData);
  
  
