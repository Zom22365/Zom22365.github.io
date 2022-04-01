var index = 1
    setInterval(function(){
        document.getElementById('radio'+index).checked = true;
        index++;
        if(index>3){
             index=1;
         }
    },3000);