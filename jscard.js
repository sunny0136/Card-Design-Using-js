// body 

let body = document.body;


let div = document.createElement("div");
div.style.borderRadius = "5px";
div.addEventListener("mouseenter", box_shadow());
function box_shadow(){
    div.style.boxShadow = "0 0 10px #000";
}




// image 

let img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1679678691007-67ae3f68a13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
img.style.width = "100%";
// img.style.transition ="0.8s";
//add event on hover
img.addEventListener("mouseenter", get_img);
function get_img(){
    img.src = "https://media.istockphoto.com/id/1272043604/photo/foods-rich-in-vitamin-d.jpg?s=1024x1024&w=is&k=20&c=N05UHuWH9Ww57uxHPkvAonY9C5bWp7rOcznjF-47xdE=";
}
img.addEventListener("mouseleave", get_default);
function get_default(){
    img.src = "https://images.unsplash.com/photo-1679678691007-67ae3f68a13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
}

// h1


let h1 = document.createElement("h1");
let heading = document.createTextNode("hello world");
h1.appendChild(heading);


// p 

let p = document.createElement("p");
let para = document.createTextNode("this is my first card through javascript");
p.appendChild(para);

//cta 
let cta = document.createElement("a");
let  cta_text = document.createTextNode("visit our link")
cta.appendChild(cta_text);
// cta.href = "https://www.google.com";
cta.style.textAlign = "center";
//add event 
cta.addEventListener("mouseleave",add_evv);
function add_evv(){
    cta.style.background = "red";
}
cta.addEventListener("mouseenter",add_ev);
function add_ev(){
    cta.style.background = "green";
}

 // merging all the data

body.appendChild(div);
div.appendChild(img);
div.appendChild(h1);
div.appendChild(p);
div.appendChild(cta)

// styling

div.style.width = "300px"
div.style.padding = "10px"
// div.style.boxShadow = "6px 5px 12px #bfb7b7";
cta.style.transition = "0.8s";






