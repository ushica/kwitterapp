//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyC22oeUyqUVTJubg55OsBIXh1xdRnRmgBE",
  authDomain: "kwitter-86d2b.firebaseapp.com",
  databaseURL: "https://kwitter-86d2b-default-rtdb.firebaseio.com",
  projectId: "kwitter-86d2b",
  storageBucket: "kwitter-86d2b.appspot.com",
  messagingSenderId: "241162922994",
  appId: "1:241162922994:web:f264d7c03359d3d0e4d96b"
};
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});

    document.getElementById("msg").valur = "";
    
}