


let timeDisplay = null;
let display = $("#time");
console.log(display);



function time() {
    timeDisplay = setInterval(function(){
         
        let curDatTime = moment().format("h:mm:ss a dddd Do MMMM YYYY");
        console.log(typeof curDatTime);
        display.text(curDatTime);
        return curDatTime;
        
    }, 1000)
}

time();



