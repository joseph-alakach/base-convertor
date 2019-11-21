
function convertToBinary(number){
    let result = "";
    while(number>=1){
        if(number%2 == 0){
            result="0"+result;
            number=number/2;
        }
        
        result="1"+result;
        number=Math.floor(number/2);
            
        
    }
    return result;
}
function convertToHexa(input){
    let res="";
    while(input>=1){
        switch(input%16){
            case 1:
                res="1"+res;
                break;
            case 2:
                res="2"+res;
                break;
            case 3:
               res="3"+res;
               break; 
            case 4:
                res="4"+res;
                break; 
            case 5:
              res="5"+res;
             break; 
            case 6:
             res="6"+res;
            break; 
            case 7:
             res="7"+res;
             break;
            case 8:
             res="8"+res;
              break; 
            case 9:
             res="9"+res;
             break;
            case 10:
             res="A"+res;
             break;   
            case 11:
             res="B"+res;
             break;
            case 12:
             res="C"+res;
             break;
            case 13:
             res="D"+res;
             break;
            case 14:
             res="E"+res;
             break;
            case 15:
             res="F"+res;
             break;
        }
        input=Math.floor(input/16);
    }
    return res;
}
module.exports={
    convertToBinary,
    convertToHexa,
}