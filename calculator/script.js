 var btn =document.getElementsByTagName('button');
  var equal = document.getElementById('comput');
  var out =document.getElementsByClassName('intract')[0];
 
//accept numbers for each
for(var i=1; i<btn.length-1;i++){
        
    btn[i].addEventListener('click',function(){

        if(this.id !="back"){
            out.innerHTML += this.innerHTML;
        }
        if(this.className =="op"){
            var string = out.innerHTML.split("");
            if(string.length ==1){
                out.innerHTML ="";
            }
        }
    });
}
//comput result func
equal.addEventListener('click',function(){
    var givenInputes = out.innerHTML;
    var dividedStrs = [ givenInputes.split("+"), givenInputes.split("-"), givenInputes.split("x"), givenInputes.split("/"), givenInputes.split("%")];
    
    for(var i=0;i<dividedStrs.length;i++){
        if(dividedStrs[i]!=givenInputes){
            switch(i){
                case 0: result = parseFloat(dividedStrs[0][0]) + parseFloat(dividedStrs[0][1]);
                        out.innerHTML =result;
                        break;
                case 1: result = parseFloat(dividedStrs[1][0]) - parseFloat(dividedStrs[1][1]);
                         out.innerHTML =result;
                        break;
                case 2: result = parseFloat(dividedStrs[2][0]) * parseFloat(dividedStrs[2][1]);
                        out.innerHTML =result;
                        break;
                case 3: result = parseFloat(dividedStrs[3][0]) / parseFloat(dividedStrs[3][1]);
                        out.innerHTML =result;
                        break;   
                case 4: if( dividedStrs[4][1]==''){
                            dividedStrs[4].pop();
                            dividedStrs[4].push('1');
                         }
                        result = parseFloat(dividedStrs[4][0])/100 * parseFloat(dividedStrs[4][1]);
                        out.innerHTML =result;
                        break;
            }

        }
    }
});
//clear everything fun
btn[0].addEventListener('click',function(){
    out.innerHTML ="";
});
//back to cancle one digit
btn[15].addEventListener('click',function(){
     var existingString = out.innerHTML;
     var remainingString ="";
     existingString=existingString.split("");
     existingString.pop();
     for(var i=0; i <existingString.length;i++){
          remainingString+= existingString[i];
     }
     out.innerHTML =remainingString;
});

function goBack() {
    window.history.back();
}