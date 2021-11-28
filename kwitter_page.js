//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyA0bR1li0M1XZITw-6d8QZ9C6KrWRAOLXw",
    authDomain: "kwitter--app-a2918.firebaseapp.com",
    databaseURL: "https://kwitter--app-a2918-default-rtdb.firebaseio.com",
    projectId: "kwitter--app-a2918",
    storageBucket: "kwitter--app-a2918.appspot.com",
    messagingSenderId: "981837459586",
    appId: "1:981837459586:web:ecee4e1c308680c578c49b"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name,
 message:msg,
 like:0   
});
document.getElementById("msg").value = "";    
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
