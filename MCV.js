srcs = ["./Assets/submitted/1.png","./Assets/submitted/2.jpg","./Assets/submitted/3.jpg","./Assets/submitted/4.jpg","./Assets/submitted/5.jpg","./Assets/submitted/6.jpg","./Assets/submitted/7.jpg","./Assets/submitted/8.jpg","./Assets/submitted/9.jpg","./Assets/submitted/10.jpg","./Assets/submitted/11.jpg"]
titles = ["DID HE WIN OR LOSE?","Hope","Peace in the Sky","Moonshot","Golden Hour","Neighbour's Little Flower","Food for Mental Health","Crepuscule","The Blue Sky Walk","The Peaceful Beach","Dusk's Rose"]
authors = ["SCOOB DAUG","Yoong Hui Hui","Lily C","Anonymous","Low Wei Lun","YüJun :) ","Low Wei Lun","Sisyphus7","Low Wei Lun","Anonymous","YY"]

menuicon = document.getElementById("menu-icon")
menudiv = document.getElementById("menu")


document.getElementById("closedisplay").onclick=function(){
    document.getElementById("display").classList.remove("active");
}

window.onload=function(){
    document.getElementById("description1").style.display="block";
    if(window.innerWidth>800){proceed(1)}
}

var contents = document.getElementsByClassName("content");

var titlestag = document.getElementsByTagName("h4");
var authorstag = document.getElementsByTagName("p");
var pieces = document.getElementsByClassName("piece");

for(var x=0;x<contents.length;x++){
    titlestag[x].innerHTML=titles[x]
    authorstag[x].innerHTML="By: "+authors[x];
    pieces[x].setAttribute("src",srcs[x]);
}

menuicon.onclick=function(){
    let contacts = document.getElementById("contacts");
    if(contacts.style.display=="block"){
        contacts.style.display="none";
        menuicon.setAttribute("src","./Assets/menu.svg");
    }else{
        contacts.style.display="block";
        menuicon.setAttribute("src","./Assets/close.svg");
    }
}

function proceed(x){
    document.getElementById("display").classList.add("active");
    document.getElementById("displaypiece").setAttribute("src",srcs[x-1]);
    document.getElementById("displaytitle").innerHTML=titles[(x-1)];
    document.getElementById("displayauthor").innerHTML="By: "+authors[(x-1)];
    for(var i=1;i<=contents.length;i++){
        document.getElementById("description"+i).style.display="none";
    }
    document.getElementById("description"+x.toString()).style.display="block"  
}

for(var x=0;x<contents.length;x++){
    contents[x].addEventListener('click', (event) => proceed(event.target.classList.item(event.target.classList.length-1)))
}

window.onresize = function(){
    if(window.innerWidth>800){
        document.getElementById("display").style.display= "block";
        document.getElementById("display").style.left = document.getElementById("contentcontainer").offsetWidth + 20; 
        contacts.style.display="block";
    }else{
        document.getElementById("display").style.display= "none";
        contacts.style.display="none";
    }
}

// document.getElementById("instagram").onmouseover = function(){
//     document.getElementById("instagram-tag").style.display="inline";
// }
// document.getElementById("instagram").onmous = function(){
//     document.getElementById("instagram-tag").style.display="inline";
// }