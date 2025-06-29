
var container = document.getElementsByClassName("container")[0];


let count=0;
async function move(){
        var item = document.getElementsByClassName("item");

        let lastName=item[item.length-1].className;
           for(let i=item.length-1;i>=0;i--){
                    if(i!=0){
                        /*
                        prev = Math.floor(parseInt(window.getComputedStyle(item[i-1]).left) / parseInt(window.getComputedStyle(container).width)*100 );
                        item[i].style.left = prev+"%";
                        */
                       item[i].className = item[i-1].className;
                    }
            }
            item[0].className = lastName;
            item[count].style.opacity = "0";
            await new Promise(response => setTimeout(response,1500));
            item[count].style.opacity = "1";
            count++;
            if(count==item.length){
                count=0;
            }
    }