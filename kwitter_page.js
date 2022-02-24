//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBPx2a5ep9sUrvv0YvcZsL1o1zSXtC8-Xw",
      authDomain: "kwitter-de98b.firebaseapp.com",
      databaseURL: "https://kwitter-de98b-default-rtdb.firebaseio.com",
      projectId: "kwitter-de98b",
      storageBucket: "kwitter-de98b.appspot.com",
      messagingSenderId: "926417219535",
      appId: "1:926417219535:web:aae6efd1d6a29b01bcacba",
      measurementId: "G-JFB1XNTT0N"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
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
