var firebaseConfig = {
  apiKey: "AIzaSyC22oeUyqUVTJubg55OsBIXh1xdRnRmgBE",
  authDomain: "kwitter-86d2b.firebaseapp.com",
  databaseURL: "https://kwitter-86d2b-default-rtdb.firebaseio.com",
  projectId: "kwitter-86d2b",
  storageBucket: "kwitter-86d2b.appspot.com",
  messagingSenderId: "241162922994",
  appId: "1:241162922994:web:f264d7c03359d3d0e4d96b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}