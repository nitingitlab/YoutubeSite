var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var sbr = document.querySelector(".sbr");
var subs = document.querySelector(".publisher");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

}
subs.onclick = function () {
    sbr.classList.toggle("ssbr");

}
const Like = () => {
    let likeactive = document.getElementById('Likeid');
    let disactive=document.getElementById('Dislikeid');
    let ad =document.getElementById('ad');
    let ad2=document.getElementById('ad2');
    if (likeactive.src.match('images/like.png')) {
       ad.innerText=126;
       ad2.innerText=2;
        likeactive.src = "images/likeBlue.png";
        disactive.src='images/dislike.png'
        
    }
    else {
        likeactive.src = "images/like.png";
        disactive.src='images/dislike.png';
        ad.innerText=125;
        ad2.innerText=2;
    }
}
const DisLike =()=>{
    let disactive=document.getElementById('Dislikeid');
    let likeactive = document.getElementById('Likeid');
    let ad =document.getElementById('ad');
    let ad2=document.getElementById('ad2');
    if(disactive.src.match('images/dislike.png')){
        disactive.src="images/dislikeBlue.png";
        likeactive.src = "images/like.png";
        ad2.innerText=3;
        ad.innerText=125;
    }
    else{
        disactive.src='images/dislike.png'
        likeactive.src = "images/like.png";
        ad2.innerText=2;
        ad.innerText=125;
    }
}