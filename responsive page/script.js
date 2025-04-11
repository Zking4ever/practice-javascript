var item = document.getElementsByClassName("item");
var currentPosition;

for(var i=0;i<item.length;i++){
    item[i].addEventListener('click',function(){
        currentPosition= currentPointerCounter(this);
        clearId(); // to mark only the current id
        this.id ="current";
    });
}
function currentPointerCounter(e){
    for(var i=0;i<item.length;i++){
        if(e==item[i]){
            return i;
        }
    }

}
function clearId(){
    for(var i=0;i<item.length;i++){
        item[i].removeAttribute('id');
        arrange();
    }
}
function arrange(){
    for(var i=0;i<item.length;i++){
        item[i].style.transform ="";
        item[i].style.transform ="translateX(calc(var(--i)*100px)) translateZ(-300px)";
        item[i].innerHTML = currentPosition;
    }
}