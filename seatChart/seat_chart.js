
const seats=document.getElementsByClassName("seat");
// loop through html collection to add class available to each seat
for(let i=0; i<seats.length; i++){
    seats[i].classList.add("available");
}

let row_num;
let col_num;

//initialze an array to represnt index of seats
var seatsArray=[];
// create an array of arrays representing the seats. 
//External array represents the index of rows and internal arrrays represents the col 
function createSeatsArr(row, col){       
    for (let i=0; i<row; i++){
        let rowArr= [];
        for(let j= 0; j<col; j++){
            rowArr.push(j)
        }
        seatsArray.push(rowArr)  
    }
    
    //console.log("seatsArray", seatsArray)
}

createSeatsArr(3, 3);

function reserveSeat(row,col){
    //console.log(seats)
    const index = row * 3 + col; // Ensure this index is correct for your structure
 
    seats[index].classList.remove('available')
    seats[index].classList.add('reserved')
   
}

let availableSeats;
function getAvailableSeats(){
    availableSeats = [];
    for(let i=0; i<seats.length; i++){
        if (seats[i].classList.contains("available")){
            availableSeats.push(seats[i])
            //console.log("availableSeats", availableSeats)
        }        
    }

}


function reserveRandom(){  
    getAvailableSeats()
    console.log(availableSeats.length)
    if(availableSeats.length == 0){
        alert('All seats are already booked.');
    } else {
        getRandomenumbers()  
        const index = row_num * 3 + col_num;
        //console.log(row_num, col_num)
        //console.log(index)
        // console.log("availableSeats", availableSeats)
            if (seats[index].classList.contains("available")) {              
                reserveSeat(row_num, col_num);
            } else {               
                reserveRandom();                            
            }  
                   
        }
} //function

function getRandomenumbers(){
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }
      row_num = getRandomIntInclusive(0, 2);
      col_num= getRandomIntInclusive(0, 2); 
      return row_num, col_num; 
}    




