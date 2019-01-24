
  // Initialize Firebase
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

  //reference messages collection

  var messagesRef = firebase.database().ref('TNPFormInput');


//listen for form submit

document.getElementById('signup').addEventListener('submit',submitForm);

//submit form
function submitForm(e)
{

    e.preventDefault();
// get values

var name = getInputVal('name');
var scholarid = getInputVal('scholarid');
var email = getInputVal('email');
var branch = getInputVal('branch'); 
var phone = getInputVal('phone');
var organisation = getInputVal('organisation');
var ctc = getInputVal('ctc');
var testP = getInputVal('testP');
var message = getInputVal('interviewExp');


//Save message
saveMessage(name, scholarid, email, branch, phone, organisation, ctc, testP, message);
 

//Show alert
document.querySelector('.alert').style.display ='block';

//hide alert after 4 sec

setTimeout(function(){

    document.querySelector('.alert').style.display ='none';
},4000);


document.getElementById('signup').reset();
}
// function to get form values 

function getInputVal(id){

return document.getElementById(id).value;

}

//save the messages to firebase

function saveMessage(name, scholarid, email, branch, phone, organisation, ctc, testP, message)
{
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
       
        name:name,
        scholarid:scholarid,
        email:email,
        branch:branch,
        phone:phone,
        organisation:organisation,
        ctc:ctc,
        testP:testP,
        message:message
       
        });
} 

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
        //console.log(name,branch);

        var li= createElement('li', name + ':'  + branch);
        li.parent('tnpdata');
    }
}

function errData(err)
{
  console.log('Error !');
  console.log(err);
}
