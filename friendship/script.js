var see =document.getElementById('see_more');
see.addEventListener('click',function(){
    for(var i=0; i<10;i++){
    document.getElementsByClassName('members_container')[0].innerHTML += document.getElementsByClassName('member')[0].outerHTML;
}
});