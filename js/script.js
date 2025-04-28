// My users
// Create an array of users
const users = [
    {
        picture: "./images/John.webp",
        first_name: "John",
        last_name:"Soe",
        email: "John@e.com",
        networth: 100000,
        bitcoin:10000,
        otherInvestments:20000,
        role: "admin",
        userName: "user1",
        password: "user1",
        roleIndicator : true
    },
    {
        picture: "./images/Kyle.webp",
        first_name: "Kyle",
        last_name: "Mann",
        email: "Kyle.smith@e.com",
        networth: 100000,
        bitcoin:10000,
        otherInvestments:20000,
        role: "admin",
        userName: "User2",
        password: "User2",
        roleIndicator : true
    },
    {
        picture: "./images/Jane.jpeg",
        first_name: "Jane",
        last_name: "Smith",
        email: "Jane.johnson@e.com",
        networth: 100000,
        bitcoin:10000,
        otherInvestments:20000,
        role: "admin",
        userName: "User3",
        password: "User3",
        roleIndicator : true
    },
    {
        picture: "./images/Sam.jpeg",
        first_name: "Sam",
        last_name: "Sm",
        email: "Sam.brown@e.com",
        networth: 100000,
        bitcoin:10000,
        otherInvestments:20000,
        role: "user",
        userName: "user4",
        password: "user4",
        roleIndicator : false

    },
    {
        picture: "./images/Liu.jpeg",
        first_name: "Liu",
        last_name: "Kang",
        email: "LiuKang.davis@e.com",
        networth: 4000000,
        bitcoin:10000,
        otherInvestments:20000,
        role: "user",
        userName: "User5",
        password: "User5",
        roleIndicator : false

    },
    {
        picture: "./images/Jack.jpeg",
        first_name: "Jack",
        last_name:"Wilson",
        email: "Jack.wilson@e.com",
        networth: 300000,
        bitcoin:10000,
        otherInvestments:20000,
        role: "user",
        userName: "User6",
        password: "User6",
        roleIndicator : false

    },
    {
        picture: "./images/Saber.jpeg",
        first_name: "Saber",
        last_name:"Ahm",
        email: "Saber.miller@e.com",
        networth: 600000,
        bitcoin:10000,
        otherInvestments:50000,
        role: "user",
        userName: "User7",
        password: "User7",
        roleIndicator : false

    },
    {
        picture: "./images/Rihana.jpg",
        first_name: "Rihana",
        last_name:"Rah",
        email: "Rihana.moore@e.com",
        networth: 500000,
        bitcoin:10000,
        otherInvestments:40000,
        role: "user",
        userName: "User8",
        password: "User8",
        roleIndicator : false
    },
    {
        picture: "./images/Jade.jpeg",
        first_name: "Jade",
        last_name: "Parker",
        email: "jade.taylor@e.com",
        networth: 800000,
        bitcoin:10000,
        otherInvestments:70000,
        role: "user",
        userName: "User9",
        password: "User9",
        roleIndicator : false

    },
    {
        picture: "./images/Kitana.jpeg",
        first_name: "Kitana",
        last_name: "Sohuy",
        email: "kitana.anderson@e.com",
        networth: 800000,
        bitcoin:600000,
        otherInvestments:20000,
        role: "user",
        userName: "User10",
        password: "User10",
        roleIndicator : false

    },
    {
        picture: "./images/Sean.jpeg",
        first_name: "Sean",
        last_name:"Bean",
        email: "Sean.thomas@e.com",
        networth: 1000000,
        bitcoin:10000,
        otherInvestments:90000,
        role: "user",
        userName: "User11",
        password: "User11",
        roleIndicator : false

    },
    {
        picture: "./images/Suzan.jpeg",
        first_name: "Susan",
        last_name: "chow",
        email: "Susan.jackson@e.com",
        networth: 900000,
        bitcoin:10000,
        otherInvestments:80000,
        role: "user",
        userName: "User12",
        password: "User12",
        roleIndicator : false
    },
    {
        picture: "./images/Doug.jpeg",
        first_name: "Douglas",
        last_name: "Bir",
        email: "douglas.white@e.com",
        networth: 21000000,
        bitcoin:100000,
        otherInvestments:2000000,
        role: "user",
        userName: "User13",
        password: "User13",
        roleIndicator : false

    },
    {
        picture: "./images/Diego.jpeg",
        first_name: "Diego",
        last_name: "Sanchez",
        email: "Reptile.harris@e.com",
        networth: 9000000,
        bitcoin:500000,
        otherInvestments:400000,
        role: "user",
        userName: "User14",
        password: "User14",
        roleIndicator : false
    },
    {
        picture: "./images/Nadia.jpeg",
        first_name: "Nadia",
        last_name: "Sim",
        email: "Nadia.martin@e.com",
        networth: 1000000,
        bitcoin:500000,
        otherInvestments:500000,
        role: "user",
        userName: "User15",
        password: "User15",
        roleIndicator : false
    }
];


//creating a from that take the user info on page load
let myLogInInterface = document.getElementById("myBack");

myLogInInterface.innerHTML = `
<div class="containe-fluid video">
 <video autoplay muted loop class= "backVideo">
            <source src="./video/hand.mp4" type="video/mp4">
        </video>
<div class= "container">
<form id= "theForm" class="position-absolute top-0 end-0 start-0 bottom-0">
               <h3 class="texts">Welcome!Please Log in Here</h3>
              <div class="inputs mb-3 d-flex">
                <label for="userName" class="form-label texts">User Name</label>
                <input type="text" class="form-control " id="userName" aria-describedby="emailHelp">
              </div>
              <div class="mb-3 inputs d-flex">
                <label for="passwords" class="form-label texts">Password</label>
                <input type="password" class="form-control" id="passwords">
              </div>
              <button class="btn btn-primary" id="log-in">Log In</button>
            </form></div>
</div> `;


const userNameVal = () => {
    //functions for user name and password validation
    let userInput = document.querySelector("#userName").value;
    let passInput = document.querySelector("#passwords").value;
    let blankInput = /^\s*$/;
    let whiteSpace = /\s/;
    let valid = true;
    // for(const item of users){
    //
    // }
    //find the usernames in the object that match the user inputs when log in for authentication
    let userVal = users.find((user) => user.userName === userInput);

    if (blankInput.test(userInput)) {
        document.querySelector("#userName").value = "";
        document.querySelector("#userName").placeholder = "Please enter username";
        document.querySelector("#userName").style.borderColor = "red";
        valid = false;
    } else if (whiteSpace.test(userInput)) {
        document.querySelector("#userName").value = "";
        document.querySelector("#userName").placeholder = "Space not allowed";
        document.querySelector("#userName").style.borderColor = "red";
        valid = false;
    }
    // if the inputs are not equal to passwords and usernames
    if (userVal && userVal.password !== passInput || !userVal) {
        document.querySelector("#userName").value = "";
        document.querySelector("#userName").placeholder = "Wrong password/username";
        document.querySelector("#userName").style.borderColor = "red";
        valid = false;
    } else {
        document.querySelector("#userName").style.borderColor = "green";
        return userInput;
    }
    return valid;
}

//adding style and authentication to the password input
const userPassVal = () => {
    let passInput = myLogInInterface.querySelector("#passwords").value;
    let userInput = myLogInInterface.querySelector("#userName").value;
    let blankInput = /^\s*$/;
    let whiteSpace = /\s/;
    let passVal = users.find((user) => user.userName === userInput);
    let userVal = users.find((user) => user.userName === userInput);
    let valid = true;
    if (blankInput.test(passInput)) {
        document.querySelector("#passwords").value = "";
        document.querySelector("#passwords").placeholder = "Please enter password";
        document.querySelector("#passwords").style.borderColor = "red";
        valid = false;
    } else if (whiteSpace.test(passInput)) {
        document.querySelector("#passwords").value = "";
        document.querySelector("#passwords").placeholder = "Spaces not allowed";
        document.querySelector("#passwords").style.borderColor = "red";
        valid = false;
    } else if (passVal && passVal.password !== passInput || !userVal) {
        document.querySelector("#passwords").value = "";
        document.querySelector("#passwords").placeholder = "Wrong password/username";
        document.querySelector("#passwords").style.borderColor = "red";
        valid = false;

    } else {
        document.querySelector("#passwords").style.borderColor = "green";
        return passInput;
    }
    return valid;
}

let myCards = document.querySelector("#myCards");
const userCards = () => {
    let userInput = document.querySelector("#userName").value;
    let passInput = document.querySelector("#passwords").value;
    //filter out the logged in user and make a separate card them
    const loggedInUser = users.find(user => user.userName === userInput && user.password === passInput);
    console.log(loggedInUser);

    //making a separate card for the logged in user
    let cardForLoggedInUser = document.getElementById("sepCards");

    if (loggedInUser) {
        cardForLoggedInUser.innerHTML = `
         <div class="card" style="width: 18rem;">
  <img src="${loggedInUser.picture}" class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-title text-light">Name: ${loggedInUser.first_name} ${loggedInUser.last_name}</p>
    <p class="card-title text-light">Email: ${loggedInUser.email}</p>
    <p class="card-title text-light">Role: ${loggedInUser.role}</p>
  </div>
</div>`
    }
    // If the logged in user is admin show all users and admins
    // const usersToDisplay = loggedInUser.role === 'admin' ? users : users.filter(u => u.role === 'user');
    let displayUser;
    if (loggedInUser.roleIndicator) {
        //getting all the users and admins except for the logged in admin as we have seperate card for it above
        displayUser = users.filter((user) => user !== loggedInUser);
        console.log(displayUser)
    } else {
        //we could use[loggedInUser].concat(users.filter( user => user.roleIndicator === true)); concat here  witout changing the original elements
        //adding the logged in users to the all the admins using spread. witout changing the original elements
        displayUser = users.filter(user => user.roleIndicator === true || user.loggedInUser);
        console.log(displayUser)
    }

    //clear the myCards dom so that when log out and logged back in the cards are still there
    //(avoid overwrtiing the existing cards)
    myCards.innerHTML = '';
    //looping through the object and accessing them by the user
    displayUser.forEach((user) => {
        //finding the user who is logged in based on the inputs
        myCards.innerHTML += `
        <div class="grid">
            <div class="grid-item grid-item--width2">
                <div class="card p-3 m-2" >
                    <img id="cardImages" class="card-img-top" src="${user.picture}" alt="Clients">
                    <div class="card-body">
                        <h5 class="cardText">Name: ${user.first_name} ${user.last_name}</h5>
                        <p class="cardText">Email: ${user.email}</p>
                         <p class="cardText">Net Worth: $${user.networth}</p>
                          <p class="cardText">Role:${user.role}</p>
                    </div>
                    <button class="btn myBtn" type="button">Close Account</button>
                <div>
            </div>
        </div>`;
          });


          //selecting all the delete buttons and loop to find the ones that are attached to admin cards
          document.querySelectorAll(".myBtn").forEach((button , i)=>{
            //finding the admin card and hide the the delete button
            if(displayUser[i].role == 'admin'){
                button.style.display = 'none';
            }
            //event listener to the button to hide users
            button.addEventListener('click',(event)=>{
                //this will find the closest ancester to the delete button with class card
                const grid = event.target.closest('.grid');
                //find the user role at index object displayUser
                if(displayUser[i].role == 'user'){
                    //hide the card
                    let hiddenGrid = event.target.closest('.grid-item');
                    hiddenGrid.remove();
                    //calling the imagesLoaded library after deleting a user so the grid lay out is updated
                    // and the card's space being deleted is filled with the next card
                    imagesLoaded('.grid', ()=> {
                        msnry.layout();
                      });
                }
            }) 
          })

          //Making masonry object and applting it to the container wiht class grid.
          let msnry = new Masonry('.grid', {
            //these options are applied to the child eelemnts of grid 
            columnWidth: 200,
            //selectin the grid-items to apply the grid changes to them
            itemSelector: '.grid-item',
            // making the positioning layout base on percentage for better responsiveness rather than pixels 
            percentPosition: true, 
          });
          // Initialize masonary after all images are loaded to avoid cards layout issues on initial page load
          // such as overlapping card contents.
          //(if this library is not used, the page needs to be resized first to be able to see the masonary effects)
            imagesLoaded('.grid', ()=> {
                msnry.layout();
              });
}

//remove the navbar if not logged in
let entire = document.getElementById("entirePage");
entire.style.display = 'none';
let navBar = document.getElementById("navbar");
navBar.style.display = 'none';
    //log in button 
    myLogInInterface.querySelector("#log-in").addEventListener("click", (event) => {
        //to prevent the form from submitting we need to use this function
         event.preventDefault();
        userPassVal();
        userNameVal();
        if (userNameVal() && userPassVal()) {
            //removing the whole login page when logged in
            myLogInInterface.style.display = "none";
            //calling the function to create cards with specific users
            userCards();
            navBar.style.setProperty('display', 'flex', 'important');
            cardForLoggedInUser.style.display = "flex"
            myCards.style.display = "flex";
            entire.style.setProperty('display', 'block', 'important');
            document.querySelector('#entirePage').style.background = "linear-gradient(90deg, rgba(96,92,96,1) 62%, rgba(143,124,140,1) 97%)";

        }
    })
 // end of the log in event

//this even listener will remove the items we dont need on the login page
const logOutBtn = document.querySelector("#log-out");
const cardForLoggedInUser = document.getElementById("sepCards");
logOutBtn.addEventListener("click", (event) => {
    //dismiss all the cards
    myCards.innerHTML = '';
    myCards.style.display = "none";
    myLogInInterface.style.display = "block";
    //clearing the inputs
    myLogInInterface.querySelector("#userName").value = "";
    myLogInInterface.querySelector("#passwords").value = "";
    //removing the separate card for logged in user
    cardForLoggedInUser.style.display = "none";
    //removing the log out btn
    navBar.style.display = 'none';

}) // end of the log out event