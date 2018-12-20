import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDtulvipoo6BLzu6iKfyq24yOuCPD2LMqQ",
  authDomain: "expensespocket.firebaseapp.com",
  databaseURL: "https://expensespocket.firebaseio.com",
  projectId: "expensespocket",
  storageBucket: "expensespocket.appspot.com",
  messagingSenderId: "142939353685"
};

// console.log(firebase.apps.length);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", snapshot => {
//   const es = [];
//   snapshot.forEach(childExpense => {
//     es.push({
//       id: childExpense.key,
//       ...childExpense
//     });
//   });
//   console.log(es);
// });

// firebase.initializeApp(config);
// firebase
//   .app()
//   .delete()
//   .then(function() {
//     firebase.initializeApp(config);
//   });
// console.log(firebase.apps.length);

// database.ref("expenses").push({
//   description: "First Node",
//   amount: 100,
//   note: "No"
// });
// database.ref("expenses").push({
//   description: "Second Node",
//   amount: 200,
//   note: "Her is The Note"
// });
// database.ref("expenses").push({
//   description: "Third Node",
//   amount: 280,
//   note: "No"
// });
// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     const val = snapshot.val();
//     console.log(val.name, "is a", val.job, "in", val.location.city);
//   },
//   e => {
//     console.log("The problem is", e);
//   }
// );

// database
//   .ref()
//   .set({
//     name: "Cvanzy",
//     age: 20,
//     isSingle: false,
//     location: {
//       city: "Framingham",
//       state: "Mass",
//       zipcode: "02115"
//     },
//     job: "Full-stack developer"
//   })
//   .then(() => {
//     console.log("Database Update!");
//   })
//   .catch(e => {
//     console.log("Fatal", e);
//   });

// database
//   .ref("location/city")
//   .set("Boston")
//   .then(() => {
//     console.log("Database Update!");
//   })
//   .catch(e => {
//     console.log("Fatal", e);
//   });

// database.ref().update({ name: "Cccczy" });
// database.ref("location/city").remove();
// // database.ref().off(onValueChange);
// database.ref().update({ name: "CcCcCcCVAN" });
