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
            switch(i){
                case 0: return 7;
                           break;
                case 1: return 5;
                  break;
                case 2: return 3;
                    break;
                case 3: return 0;
                      break;
                case 4: return -3;
                        break;
                case 5: return -5;
                          break;
                case 6: return -7;
                         break;
            }
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
       var interm=[]; //array to contain items to move or to append and deappend
        switch(currentPosition){
            case 7:  for(var i=3;i<item.length;i++){
                            interm[i]=item[i];
                            container.removeChild(item[i]);
                     }
                     container.innerHTML = interm[1]+container.innerHTML;
                       break;
            case 5: return 5;
              break;
            case 3: return 3;
                break;
            case 0: return 0;
                  break;
            case 4: return -3;
                    break;
            case 5: return -5;
                      break;
            case 6: return -7;
                     break;
        }
    }
}