


let clock = null;
let display = $("#time");
console.log(display);



function time() {
    clock = setInterval(function(){
         
        let curDatTime = moment().format("h:mm:ss a dddd Do MMMM YYYY");
        console.log(typeof curDatTime);
        display.text(curDatTime);
        return curDatTime;
        
    }, 1000)
}

time();



