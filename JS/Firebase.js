import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
var h1Element = document.getElementById("Counter");
const firebaseConfig = {
    apiKey: "AIzaSyA0oj90JQX-UKY1I2e0ADywsFCCSOIs_SM",
    authDomain: "fir-8ed74.firebaseapp.com",
    databaseURL: "https://fir-8ed74-default-rtdb.firebaseio.com",
    projectId: "fir-8ed74",
    storageBucket: "fir-8ed74.appspot.com",
    messagingSenderId: "848820712354",
    appId: "1:848820712354:web:3d42eff01ad401c1c778fb"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const starCountRef = ref(database, 'PlcData');
let data="";
let anData="";

onValue(starCountRef, (snapshot) => {
    data= snapshot.val();
    anData= snapshot.val().Counter;
    console.log(data);
    console.log("An: " + anData);
    h1Element.innerHTML =anData;
});
