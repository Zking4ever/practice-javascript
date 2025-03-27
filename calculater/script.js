 var btn =document.getElementsByTagName('button');
  var oprbtn =document.getElementsByClassName('op');
  var equal = document.getElementById('comput');
  var out =document.getElementsByClassName('intract')[0];
  var inter =document.getElementsByClassName('intermdiate')[0];
 
//accept numbers for each
for(var i=1; i<btn.length-1;i++){
        
    btn[i].addEventListener('click',function(){
        out.innerHTML += this.innerHTML;
    });
}
//comput result func
equal.addEventListener('click',function(){
    var givenInputes = out.innerHTML;
    var dividedStrs = [ givenInputes.split("+"), givenInputes.split("-"), givenInputes.split("x"), givenInputes.split("/")];
    
    for(var i=0;i<dividedStrs.length;i++){
        if(dividedStrs[i]!=givenInputes){
            switch(i){
                case 0: result = parseFloat(dividedStrs[0][0]) + parseFloat(dividedStrs[0][1]);
                        out.innerHTML ="= "+result;
                        break;
                case 1: result = parseFloat(dividedStrs[1][0]) - parseFloat(dividedStrs[1][1]);
                         out.innerHTML ="= "+result;
                        break;
                case 2: result = parseFloat(dividedStrs[2][0]) * parseFloat(dividedStrs[2][1]);
                        out.innerHTML ="= "+result;
                        break;
                case 3: result = parseFloat(dividedStrs[3][0]) / parseFloat(dividedStrs[3][1]);
                        out.innerHTML ="= "+result;
                        break;
            }

        }
    }
});
//clear everything fun
btn[0].addEventListener('click',function(){
    out.innerHTML ="";
});