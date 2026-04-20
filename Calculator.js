let display = "";
function clickBtn(value){
    if(value=='ac'){
        display="";
    } else if(value=='1'){
        display=display+'1';
        
    } else if(value=='2'){
        display=display+'2';
        
    } else if(value=='3'){
        display=display+'3';
        
    } else if(value=='4'){
        display=display+'4';
        
    } else if(value=='5'){
        display=display+'5';
        
    } else if(value=='6'){
        display=display+'6';
        
    } else if(value=='7'){
        display=display+'7';
        
    } else if(value=='8'){
        display=display+'8';
        
    } else if(value=='9'){
        display=display+'9';
        
    } else if(value=='0'){
        display=display+'0';
        
    } else if(value=='+'){
        display=display+'+';
        
    }else if(value=='-'){
        display=display+'-';
        
    } else if(value=='*'){
        display=display+'*';
        
    } else if(value=='/'){
        display=display+'/';
        
    } else if(value=='.'){
        display=display+'.';
        
    } else if(value=='='){
        display = eval(display);
        
    }
    document.querySelector('#input').value = display;
}