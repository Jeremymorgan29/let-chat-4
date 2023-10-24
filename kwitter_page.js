//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCb0wH5hdJ4MOfJc2PY03qtKQYjHx84ayg",
      authDomain: "kwitter-907a4.firebaseapp.com",
      databaseURL: "https://kwitter-907a4-default-rtdb.firebaseio.com",
      projectId: "kwitter-907a4",
      storageBucket: "kwitter-907a4.appspot.com",
      messagingSenderId: "673193017839",
      appId: "1:673193017839:web:39450e7bdd78a1302b361a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function send()
{
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
