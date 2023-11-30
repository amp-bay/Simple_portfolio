const imageLook=document.getElementById("imageLook");
const myPicture =document.getElementById("myPicture");
const workStation =document.getElementById("workStation");

const imageOne =document.getElementById("imageOne");
const imageTwo =document.getElementById("imageTwo");



function changeImageOne(){
    imageOne.style.display="flex";
    imageTwo.style.display="none";



}

function changeImageTwo(){

    imageOne.style.display="none";
    imageTwo.style.display="flex";



}

function accessCertification(){
   

    document.getElementById("dashboard").style.display="none";
    document.getElementById("mobile-nav-container").style.display="flex";


}



function openNav(){
    document.getElementById("dashboard").style.display="flex";
    document.getElementById("mobile-nav-container").style.display="none"
}

function closeNav(){
    document.getElementById("dashboard").style.display="none"
    document.getElementById("mobile-nav-container").style.display="flex"
}