
let users = JSON.parse(window.localStorage.getItem('members'));
let saveBtn = document.querySelector(".save-goal");
let username = document.querySelector(".hi-user").innerHTML;
let email = document.querySelector(".hi-email").innerHTML;


window.addEventListener('load', showGoals);

// if users is empty, create and add goal and assign user ( AND BUTTON CLICKED)

saveBtn.addEventListener('click', function(){
let goalname = document.querySelector("#goalname").value;
let goaldesc = document.querySelector("#goaldesc").value;
let dueDate = document.querySelector("#duedate").value;
let priority = document.querySelector("#priority").value;
let difficulty = document.querySelector("#difficulty").value;
let reward = document.getElementById("reward").value;


let goal = {
	goalname,
	goaldesc,
	dueDate,
	priority,
	difficulty,
	reward,
	count:0
}

showGoals();


  if(users == null){
  	// push the user who saved in
  	users = [];
  	users.push({username, email, goals:[goal]});
  	window.localStorage.setItem('members', JSON.stringify(users));
  	showGoals();
  }
  else{
  	users = JSON.parse(window.localStorage.getItem('members'));
  	users.forEach(function(user){
  		
  		if(username == user["username"]){
  			user["goals"].push(goal);
  			window.localStorage.setItem('members', JSON.stringify(users));
  			document.querySelector(".goal-boxes").innerHTML = " ";
  			showGoals();
  		}
  		else{
  			users.push({username, email, goals:[goal]});
  			window.localStorage.setItem('members', JSON.stringify(users));
  			document.querySelector(".goal-boxes").innerHTML = " ";
  			showGoals();
  		}
  	});
  }
});




function showGoals(){

  if(users != null){
	let todos = [];
    
    users.forEach(function(user){
    	console.log(username);
    	if(users != null && username == 
    		user["username"]){
    		todos = user["goals"];
    	}
    });

    todos.forEach(function(goal){
    	var elementz = `
	<div class="goal-box">

     <div class="text-box">
       <h5>${goal['goalname']}</h5>
       <p>Created with love by ${username}</p>
     </div>

     <div class="percentage-box">
      <div class="percentage-fill"></div>
      <div class="percentage-text">
       <p>20%</p>
     </div>
     </div>

     <div class="date-box">
          <p>Due Date : ${goal['dueDate']}</p>
     </div>

  </div>`;
        document.querySelector(".goal-welcome-text").style.display="none";
    	document.querySelector(".goal-boxes").insertAdjacentHTML("afterbegin", elementz);

    });

}

}