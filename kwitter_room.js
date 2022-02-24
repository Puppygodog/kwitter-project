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
    
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//to add rooms for the app
      function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:  "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room_names");
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div></hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "kwitter.html";
}