var index = 1
    setInterval(function(){
        document.getElementById('o-chon'+index).checked = true;
        index++;
        if(index>=4){
             index=1;
         }
    },3000);
