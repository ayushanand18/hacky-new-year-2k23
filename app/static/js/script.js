// all div declare
const d1 = document.getElementById('_1');
const d2 = document.getElementById('_2');
const d3 = document.getElementById('_3');
const d4 = document.getElementById('_4');
const d5 = document.getElementById('_5');
const d6 = document.getElementById('_6');
const d7 = document.getElementById('_7');
const d8 = document.getElementById('_8');
const d9 = document.getElementById('_9');

// input text
const resField = document.querySelectorAll('.chat-box .query-space .form-control');

// all button declare
const b1 = document.querySelector('#_1 .btn');
const b2 = document.querySelector('#_2 .btn');
const b3 = document.querySelector('#_3 .btn');
const b4 = document.querySelector('#_4 .btn');
const b5 = document.querySelector('#_5 .btn');
const b6 = document.querySelector('#_6 .btn');
const b7 = document.querySelector('#_7 .btn');
const b8 = document.querySelector('#_8 .btn');
const b9 = document.querySelector('#_9 .btn');


// hide all at first
window.onload = () => {
    resField.disabled = true;
    d2.style.display="none";
    d3.style.display="none";
    d4.style.display="none";
    d5.style.display="none";
    d6.style.display="none";
    d7.style.display="none";
    d8.style.display="none";
    d9.style.display="none";
}


// user details
var user = {
    "name": null,
    "likes": null,
    "hobbies": null,
    "fav_animal": null
}

// add event listeners
b1.addEventListener("click", function(e){
    e.preventDefault();

    d1.style.display='none';
    d2.style.display='inline';
    resField.disabled=false;
});

b2.addEventListener("click", function(e){
    e.preventDefault();
    console.log(resField.value);
    user["name"] = resField.value;
    resField.value='';
    d2.style.display='none';
    d3.style.display='inline';
    console.log(user);
    
})

b3.addEventListener("click", function(e){
    e.preventDefault();
    user.likes= resField.value;
    resField.value='';
    d3.style.display='none';
    d4.style.display='inline';

    console.log(user);
})

b4.addEventListener("click", function(e){
    e.preventDefault();
    user.hobbies= resField.value;
    resField.value='';
    d4.style.display='none';
    d5.style.display='inline';

    console.log(user);
})

b5.addEventListener("click", function(){
    e.preventDefault();

    user.fav_animal = resField.value;
    resField.value='';
    d4.style.display='none';
    d5.style.display='inline';

    console.log(user);
})