function find(N){
    // conver number to an array of strings
    let digits=N.toString().split("")
    let length = digits.length;
    let index=-1

    // loop through the array to find the decreasing number
    for(let i=0; i<length-1; i++){
        if(digits[i]>digits[i+1]){
            index=i;
            while(index>0 && digits[index]=== digits[index-1]){
                index--;
            }
            break;

        }
    }

    //if no decreasing numbers are found, return same number
    if(index=== -1){
        return N 
    }

    //decrease the increasing number
    digits[index]=(parseInt(digits[index])-1).toString();
    for(let i=index + 1; i<length; i++){
        digits[i]="9"
    }
    return parseInt(digits.join(''))
}






