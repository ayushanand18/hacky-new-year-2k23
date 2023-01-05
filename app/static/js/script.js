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
const d10 = document.getElementById('_10');
const d11 = document.getElementById('_11');

// all data spans
const nameSpan = document.getElementById("userName");
const animalResult = document.getElementById("animalResult");
const infoDiv = document.getElementById("infoDiv");
const animalName = document.querySelectorAll(".animalName");
const animalImage = document.getElementById("animalImage");
const funFactAni = document.getElementById("funFactAni");
const threatsAni = document.getElementById("threatsAni");
const conserveAni = document.getElementById("conserveAni");
const furtherReading = document.getElementById("furtherReading");

// input text
const resField = document.getElementById('inputField');

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
const b10 = document.querySelector('#_10 .btn');


// hide all at first
window.onload = () => {
    resField.style.display='none';
    d2.style.display="none";
    d3.style.display="none";
    d4.style.display="none";
    d5.style.display="none";
    d6.style.display="none";
    d7.style.display="none";
    d8.style.display="none";
    d9.style.display="none";
    d10.style.display="none";
    d11.style.display="none";
}


// user details
var user = {
    "name": null,
    "likes": null,
    "hobbies": null,
    "fav_animal": null
}

// animals details (filled in after responses)
var animal = {
    'name': null
};

// add event listeners
b1.addEventListener("click", function(e){
    e.preventDefault();

    d1.style.display='none';
    d2.style.display='inline';
    resField.style.display='inline';
});

b2.addEventListener("click", function(e){
    e.preventDefault();
    if(resField.value===''){ 
        alert("please enter something!");
        return;
    }
    user["name"] = resField.value;
    resField.value='';
    d2.style.display='none';
    d3.style.display='inline';
    userName.innerHTML=user.name;
})

b3.addEventListener("click", function(e){
    e.preventDefault();
    if(resField.value===''){ 
        alert("please enter something!");
        return;
    }
    user.likes= resField.value;
    resField.value='';
    d3.style.display='none';
    d4.style.display='inline';
})

b4.addEventListener("click", function(e){
    e.preventDefault();
    if(resField.value===''){ 
        alert("please enter something!");
        return;
    }
    user.hobbies= resField.value;
    resField.value='';
    d4.style.display='none';
    d5.style.display='inline';
})

b5.addEventListener("click", function(e){
    e.preventDefault();
    if(resField.value===''){
        alert("please enter something!");
        return;
    }
    infoDiv.style.display='none';
    user.fav_animal = resField.value;
    resField.value='';
    d5.style.display='none';
    d6.style.display='inline';
    findAnimal();
    resField.style.display='none';
})

const findAnimal = () => {
    fetch("/cohere?ask="+user.likes+user.hobbies+user.fav_animal)
    .then((response) => response.json())
    .then((data) => animal = data)
    .then(() => animalResult.innerHTML= animal.name);
}

b6.addEventListener("click", function(e){
    e.preventDefault();
    
    d6.style.display='none';
    d7.style.display='inline';
    animalName.forEach(function(element) {
        element.innerHTML=animal.name;
    });
    animalImage.setAttribute("src",animal.photo);
})

b7.addEventListener("click", function(e){
    e.preventDefault();
    
    funFactAni.innerHTML=animal.fun_fact;
    d7.style.display='none';
    d8.style.display='inline';
})

b8.addEventListener("click", function(e){
    e.preventDefault();
    
    threatsAni.innerHTML=animal.threats;
    d8.style.display='none';
    d9.style.display='inline';
})

b9.addEventListener("click", function(e){
    e.preventDefault();
    
    conserveAni.innerHTML=animal.conserve;
    d9.style.display='none';
    d10.style.display='inline';
})

b10.addEventListener("click", function(e){
    e.preventDefault();
    
    furtherReading.innerHTML = animal.cta;
    d10.style.display='none';
    d11.style.display='inline';
})