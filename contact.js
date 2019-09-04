

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzm8duZMvGdOlPwNQWfyL9WQinkWbL73o",
    authDomain: "test-firebase-b6813.firebaseapp.com",
    databaseURL: "https://test-firebase-b6813.firebaseio.com",
    projectId: "test-firebase-b6813",
    storageBucket: "test-firebase-b6813.appspot.com",
    messagingSenderId: "960324096233",
    appId: "1:960324096233:web:077798eef13455c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  var con = firebase.database().ref('test');

  document.getElementById('centerForm').addEventListener('submit',(e)=>{
      e.preventDefault();

      var userInfo = con.push();
      userInfo.set({
          name: getId("name"),
          email: getId("email"),
          phone: getId("phone"),
          track: getId("track"),
        
      });
      alert("sent");
      console.log("sent");
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("phone").value="";
      document.getElementById("track").value="";

  });

  function getId(id){
      return document.getElementById(id).value;
  }

 