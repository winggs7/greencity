const express = require("express");
const router = express.Router();

const {
    initializeApp
} = require("firebase/app");

const {
    getAnalytics
} = require("firebase/analytics");

const {
    getDatabase,
    ref,
    set,
    get,
    child,
} = require("firebase/database");



const firebaseConfig = {
    apiKey: "AIzaSyDgpXMyrUwtruN61selQfMjLy7or96eRjE",
    authDomain: "example-ddee4.firebaseapp.com",
    databaseURL: "https://example-ddee4-default-rtdb.firebaseio.com",
    projectId: "example-ddee4",
    storageBucket: "example-ddee4.appspot.com",
    messagingSenderId: "441046704903",
    appId: "1:441046704903:web:313db04f629b8fff2c1ba2",
    measurementId: "G-FP5D73TH0C",
    databaseURL: "https://example-ddee4-default-rtdb.firebaseio.com/",
};

const database = getDatabase(initializeApp(firebaseConfig));

router.post('/register', function (request, response) {
    const email = request.body.email;
    const fullName = request.body.fullname;

    const mailName = email.split('@')[0];

    if (!email || !fullName) {
        response.status(404);
    } else {
        set(ref(database, 'users/' + mailName), {
            mail: email,
            name: fullName,
        });
    }
})

module.exports = router;