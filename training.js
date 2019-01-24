function setup(){
var config = {
    apiKey: "AIzaSyDAZ57gj5C6K-gwx1lwnG4rpJuOhjEJHP4",
    authDomain: "contactform-904d9.firebaseapp.com",
    databaseURL: "https://contactform-904d9.firebaseio.com",
    projectId: "contactform-904d9",
    storageBucket: "contactform-904d9.appspot.com",
    messagingSenderId: "160081161546"
  };
  firebase.initializeApp(config);


  // fetching 

  var ref = firebase.database().ref('TNPFormInput');
  ref.on('value', gotData , errData);

//document.getElementById('signup').addEventListener('submit',submitForm);
}
  var org="";
  
function validateForm() {
 org = document.forms["myForm"]["fname"].value.toString();
 alert("thanku "+ org);
  if (org == "") {
    alert("Name must be filled out");
    return false;
  }
  
  

}
 console.log(org);
var c="";
var b="";
function gotData(data)
{
    //console.log(data.val());
    var TNPFormInput=data.val();
    var keys=Object.keys(TNPFormInput);
    console.log(keys);

    for(var i=0; i < keys.length;i++)
    {
        var k=keys[i];
        var name=TNPFormInput[k].name;
        var branch=TNPFormInput[k].branch;
		var ctc=TNPFormInput[k].ctc;
		var comp=TNPFormInput[k].organisation;
		//var li= createElement('li', ctc );
        if(comp==org)
       {  //console.log(name,branch);
        b=name;
		c=branch;
        var li= createElement('li', name + '  : '  + branch);
        li.parent('tnpdata');
		  
       }
    }
}


function myFunction() {
    var x=b;
    document.getElementById("myText").innerHTML =""+x;
	document.getElementById("my").innerHTML = "bolo";
	
}


function errData(err)
{
  console.log('Error !');
  console.log(err);
}
