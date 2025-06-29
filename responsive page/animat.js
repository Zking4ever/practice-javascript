
var container = document.getElementsByClassName("container")[0];
var item = document.getElementsByClassName("item");

let count=0;
let count2=item.length-1;
async function moveL(){

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
            count2++;
            if(count<0){
                    count=item.length-1;
            }else if(count==item.length){
                count=0;
            }
            if(count2<0){
                    count2=item.length-1;
            }else if(count2==item.length){
                count2=0;
            }
}

async function moveR(){

        let firstName=item[0].className;
           for(let i=0;i<item.length;i++){
                    if(i!=item.length-1){
                       item[i].className = item[i+1].className;
                    }
            }
            item[item.length-1].className = firstName;
            item[count2].style.opacity = "0";
            await new Promise(response => setTimeout(response,1500));
            item[count2].style.opacity = "1";
            count--;
            count2--;
            if(count<0){
                    count=item.length-1;
            }else if(count==item.length){
                count=0;
            }
            if(count2<0){
                    count2=item.length-1;
            }else if(count2==item.length){
                count2=0;
            }
}