var item = document.getElementsByClassName("item");
var container = document.getElementsByClassName("container")[0];


for(var i=0;i<item.length;i++){
    item[i].addEventListener('click',function(){
        sort(getIndex(this));
    });
}
function getIndex(obj){
    for(var i=0;i<item.length;i++){
        if(item[i]==obj){
            return i;
        }
    }
}
function sort(current){
    clearStyle();
    if(current<3){
        for(var i=0;i<=current+3;i++){
            var temp = item[0];
            container.removeChild(temp);
            container.appendChild(temp);
         }
    }
    else if(current>3){
        for(var i=0;i<=current-4;i++){
            var temp = item[0];
            container.removeChild(temp);
            container.appendChild(temp);
        }
    }
    item[3].style.backgroundColor = "red";
}
function clearStyle(){
    for(var i=0;i<item.length;i++){
        item[i].style.backgroundColor = "white";
    }
}
/*
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
*/