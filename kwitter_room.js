

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

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome-"+ user_name+"!"

function addRoom()
{
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' .#"+ Room_name +"</div><hr>"
      document.getElementById("output").innerHTML += row

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("roomname", name)
      window.location = "wkitter_page.html"
}
function logout() {
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "index.html"
}