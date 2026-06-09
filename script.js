
const firebaseConfig = {

  apiKey: "AIzaSyBLt3oJhIbwhDJKN7PTBU2HNKb-yjD359k",

  authDomain: "greentech-iot-a0fd9.firebaseapp.com",

  databaseURL: "https://greentech-iot-a0fd9-default-rtdb.firebaseio.com",

  projectId: "greentech-iot-a0fd9",

  storageBucket: "greentech-iot-a0fd9.firebasestorage.app",

  messagingSenderId: "81236056795",

  appId: "1:81236056795:web:16335062374a1d6f5c4afe"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

db.ref("estufa").on("value", (snapshot) => {

    const data = snapshot.val();

    console.log(data);

});
