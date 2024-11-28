

let currentslide = 0;

function showSlide(index){
    const slider = document.getElementById("slider");
    const slides =document.getElementsByClassName("slide");
    const indicators =document.getElementById("indicators").children;
    if(index >= slides.length){
        currentslide = 0;
    }else if(index < 0){
        currentslide =slides.length-1;
    }else{
        currentslide = index;
    }
    slider.style.transform = `translateX(${-currentslide * 100}%)`;
    for(i = 0;i < indicators.length;i++){
        indicators[i].classList.remove('active');
    }
    indicators[currentslide].classList.add('active');
}
function currentSlide(event) {
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length-1; i++) {
        if (event.target === dots[i]) {
            showSlide(slideIndex = i + 1);
            break;
        }
    }
}
function nextslide(){
    showSlide(currentslide + 1);
}
function prevslide(){
    showSlide(currentslide - 1);
}

function autoslide(){
    nextslide();
}

setInterval(autoslide, 5000);



const slider = document.getElementById('slider');
const slides = document.getElementsByClassName('slide');
const indicatorsContainer = document.getElementById('indicators');

for (let i = 0; i < slides.length; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicators');
  indicator.onclick = function () {
    showSlide(i);
  };
  indicatorsContainer.appendChild(indicator);
}
// document.addEventListener("DOMContentLoaded", function () {
//     const mobileMenuButton = document.getElementById("pop");
//     const navList = document.querySelector(".slider");
  
//     mobileMenuButton.addEventListener("click", function () {
//       navList.classList.toggle("slider").style.position="fixed";
//     });
//   });


// alert("Click the Menubar button for closed and open Menu List")

// Show the initial slide
showSlide(currentslide);






// JavaScript for Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Smooth scroll to top when button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// map
let arr=[10,20,30,40,50];
arr.map((value)=>{
    console.log(3*value)
})

// filter
let arr1=[20,30,40,50,60];
let arr2=arr1.filter((value)=>{
    return value<50
})
console.log(arr2,arr1)

// reduce

let arr3=[1,2,3,4,5,6,7,8,9,10]
let arr4=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr4,arr3)

// let bimg=document.querySelector('bimg img');
// function showimg(pic){
//     bimg.src=pic;
// }


let  loadscript = async (src)=>{
    return new Promise((resolve, reject) => {
    let script=document.createElement("script")
    script.src=src;
    script.onload=()=>{
        // console.log("Script Loaded!")
        resolve(500);
    }
    document.body.appendChild(script);
})
}
let a= loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
a.then((value)=>{
    console.log(value);
})


let s1=()=>{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hellow! Sharif");
    },3000)
})
}
let s2=()=>{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("How Are You Know!");
    },2000)
})
}

let s3=async ()=>{
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Ima Good!");
    },1000)
})
}
let cal=async ()=>{

    let f1=await s1()
    let f2=await s2()
    let f3=await s3()
    let fd=await Promise.all([f1,f2,f3])
    console.log(fd)

    // let f1=await s1()
    // console.log(f1);
    // let f2=await s2()
    // console.log(f2);
    // let f3=await s3()
    // console.log(f3);
}
cal()

class complex{
    constructor(real,imaginary){
        this.real=real
        this.imaginary=imaginary
    }

    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }

    set real(newreal){
        this._real=newreal
    }

    set imaginary(newima){
        this._imaginary=newima
    }
    add(num){
        this.real=this.real + num.real
        this.imaginary=this.imaginary + num.imaginary
        // console.log(`The Sum Of The Complex Number is ${this.real + this.imaginary}i`)
    }
}
let obj=new complex(20,30)
// console.log(obj.real,obj.imaginary)
obj.real=10
obj.imaginary=10
let obj1=new complex(20,30)
obj.add(obj1)
console.log(`The Sum Of The Complex Number is ${obj.real} + ${obj.imaginary}i`)




class  Human{
    constructor(name,reg){
        this.name=name
        this.reg=reg
    }
    info(){
        console.log(`The Name Of The Students ${this.name} And His Register Nummber is ${this.reg} And These are about The Student Info`)
    }
}
class Stud extends Human{
    info(){
        console.log(`The Name Of The Students ${this.name} And His Register Nummber is ${this.reg} `)
    }
}

let so=new Stud("sharif",31151)
so.info()
let so1=new Human("sharif",31151)
so1.info()



// let key=prompt("Enter The Key :")

// let Value=prompt("Enter The Value :")
// localStorage.setItem(key, Value)

// console.log(`The Key is ${key} at the Value is ${localStorage.getItem(key)}`)

// NOTE
// let n=localStorage.getItem("note")
// alert("The Note is This " + n)

// let a1=prompt("Enter The Note :")
// if(a1){
//     localStorage.setItem("note",a1)
// }

// let c1=confirm("You Want to Delete or Not :")
// if(c1){
//     localStorage.removeItem("note")
// }
// let q1=()=>{
// return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject(new Error("Some! Eror Occered!"));
//         },3000)
//     })
// }
// let con=async ()=>{
//     try{
//     let a=await q1()
//     console.log(a);
//     }
//     catch (err){
//         console.log("Some Error Occered!")
//     }
// }
// con()
// async function con(){ 
// let q1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("Some Eror Occered!");
//     },3000)
// })
// let a=await q1.then(value);
// console.log(a);
// }
// con()
// const ssd= async ()=>{
//     let a= await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"); 
//     console.log(a);
// }
// ssd() 
 

    




let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 2000);
})
p1.then((value)=>{
    console.log("Promise is Resolved With This Value ",value);
})



let fic=document.querySelector(".cart-ovrlay")
let carrt=document.querySelector(".carrt")
let crrt=document.querySelector(".home120")
let cross=document.querySelector(".cros")
let pre=document.querySelector(".prev")
let nxt=document.querySelector(".next")
let baaar=document.querySelector(".baaar")
let baa=document.querySelector(".baar-overlay")
let dds=document.querySelector(".baar")
let cos=document.querySelector(".cross")

crrt.addEventListener('click',showcart)
cross.addEventListener('click',hidecart)

function showcart(){
    fic.classList.add('show')
    carrt.classList.add('show')
    pre.style.display="none";
    nxt.style.display="none";
}

function hidecart(){
    fic.classList.remove('show')
    carrt.classList.remove('show')
    pre.style.display="block";
    nxt.style.display="block";
}


dds.addEventListener('click',showbar)
cos.addEventListener('click',hidecart2)

function showbar(){
    baa.classList.add('show')
    baaar.classList.add('show')
    pre.style.display="none";
    nxt.style.display="none";
}

function hidecart2(){
    baa.classList.remove('show')
    baaar.classList.remove('show')
    pre.style.display="block";
    nxt.style.display="block";
}

let lood=document.querySelector(".loader")

window.addEventListener('load',function(){
    lood.classList.add("loader-hidden")
    lood.document.body.addEventListener('transitionend',function(){
        document.removeChild("loader");
    })
})

// function cartovrlay(){
    // let fic=document.querySelector(".cart-ovrlay")
    // let carrt=document.querySelector(".carrt")
    // fic.classList.toggle('show')
    // carrt.classList.toggle('show')
    // let p=document.querySelector(".prev")
    // let n=document.querySelector(".next")
    // p.style.display="none";
    // n.style.display="none";
// }

let fft=fetch("https://goweather.herokuapp.com/weather/Vaniyambadi")
fft.then((response)=>{
    return response.json()
}).then((value)=>{
    console.log(value);
})
let  fet = async ()=>{
    let abs=await fft
    console.log(abs)
}
fet()
// let pop=async ()=>{
   
// }
// pop()


// function cartovrlay(){
// let cart=document.querySelector(".cart-ovrlay");
// let carrt=document.querySelector(".carrt");
// cart.classList.add('show');
// carrt.classList.add(show);
// }



//  function Hello(){
//     alert("Script Loaded Successfully")
//  }

// let loadscript=(callback,src)=>{
//     let script=document.createElement("script");
//     script.src=src;
//     script.onload=()=>{
//         console.log("Script Loaded Successfully");
//         // alert("Script Loaded Successfully");
//     }
//     script.onerror=()=>{
//         console.log("OH O! Some Error Occured");
//     }
//     callback();
//     document.body.appendChild(script);
// }
// loadscript(Hello,"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");


// let into=document.get/

// into.addEventListener('click',function(){
//     alert("Hello");
// })

// let  per=function(a,b){
// let div=document.createElement("div")
// div.innerHTML="<h1>Hello Iam Sharif Rayan Dude!</h1>"
// // div.setAttribute("class","ksr")
// into.appendChild(div)

// into.insertAdjacentElement("afterend","<h1>Hello Iam Sharif!</h1>")

// setInterval((a,b) => {
//     console.log("The Sum of Two Number is to ",(a + b))
// },2000,10,20);

// let x=function(e){
//     alert("Iam The Best Programmer of Javascript Language");
// }
// div.console.log("Hello Ima a New div")
// into.addEventListener('click',x)