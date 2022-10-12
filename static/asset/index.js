// Import the functions you need from the SDKs you need
// import {
//     initializeApp
// } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
// import {
//     getAnalytics
// } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// import {
//     getDatabase,
//     ref,
//     set,
//     get,
//     child
// } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDgpXMyrUwtruN61selQfMjLy7or96eRjE",
//     authDomain: "example-ddee4.firebaseapp.com",
//     databaseURL: "https://example-ddee4-default-rtdb.firebaseio.com",
//     projectId: "example-ddee4",
//     storageBucket: "example-ddee4.appspot.com",
//     messagingSenderId: "441046704903",
//     appId: "1:441046704903:web:313db04f629b8fff2c1ba2",
//     measurementId: "G-FP5D73TH0C",
//     databaseURL: "https://example-ddee4-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

// $('#register__btn').on('click', function (e) {
//     e.preventDefault();
//     const mail = $(this).closest('form').find('#register__email');
//     const name = $(this).closest('form').find('#register__name');
//     const mailName = mail.val().split('@')[0];

//     if (!mail.val() || !name.val()) {
//         alert('Miss some info')
//     } else {
//         set(ref(database, 'users/' + mailName), {
//             mail: mail.val(),
//             name: name.val(),
//         });
//     }
// })