var item = document.getElementsByClassName("item");
var container = document.getElementsByClassName("container")[0];
var currentPosition;

for(var i=0;i<item.length;i++){
    item[i].addEventListener('click',function(){
        currentPosition = currentPointerCounter(this);
        clearId(); // to mark only the current id
        arrange();
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
    }
}
function arrange(){
    for(var i=0;i<item.length;i++){
        container.style.transform= "translateX("+currentPosition+"00px)";
        item[i].innerHTML = currentPosition;
    }
}