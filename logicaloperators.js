let login = prompt('Who\'s there?');
let username = Admin;
let password = TheMaster;
let pwcheck = '';

//establish my variables

if (login == false || login == null) {
    alert ('Canceled');}
else if (login != username){
    alert ('I don\'t know you')}
//get the bad/uknown users out of the way first
else if (login == username){
    pwcheck = prompt('Password?')
  
    if (pwcheck == false || pwcheck == null){
        alert ('Canceled');}
	
    else if (pwcheck != password){
  	    alert ('Wrong password')}
	//as above, get the bad/unknown passwords rejected first
    else if (pwcheck == password){
	    alert ('Welcome!')}
}

//Thought this was the first cool piece of code I made. Feels like this is starting to become a useful tool. Need to get better with || &&