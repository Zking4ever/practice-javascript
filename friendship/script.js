var see =document.getElementById('see_more');
var less =document.getElementById('see_less');
see.addEventListener('click',function(){
    var prevheight = parseInt(window.getComputedStyle(document.getElementsByClassName('members_container')[0]).height);
    document.getElementsByClassName('members_container')[0].style.height = 2*prevheight+"px";
    see.style.right = "60%";
    less.style.display = "block";
});
less.addEventListener('click',function(){
    var prevheight = parseInt(window.getComputedStyle(document.getElementsByClassName('members_container')[0]).height);
    document.getElementsByClassName('members_container')[0].style.height = prevheight/2 +"px";
    see.style.right = "60%";
    less.style.display = "block";
});