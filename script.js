


let timeDisplay = null;
let display = $("#time");
console.log(display);



function time() {
    timeDisplay = setInterval(function(){
         
        let curDatTime = moment().format("h:mm:ss a dddd Do MMMM YYYY");
        display.text(curDatTime);
        return curDatTime;
        
    }, 1000)
}

time();

let projectNameEl = $("#project-name");
let projectTypeEl = $("#project-type");
let hourlyWageEl = $("#hourly-wage");
let dueDateEl = $("#due-date");
let submit = $("#submit");
let tableBodyEl = $("#table-body");
let form = ("#form");


submit.on("click", function(event){
    event.preventDefault();
    let dueDate = dueDateEl.val()
    let a = moment(dueDate);
    let b = moment();
    let difference = a.diff(b, 'days');
    let total = hourlyWageEl.val() * 8 * difference;
    

    console.log("hello");
    console.log(projectNameEl);
    const tableRow = $('<tr><td>' + projectNameEl.val() + '</td>    <td>' + projectTypeEl.val() + '</td><td>' + hourlyWageEl.val() + '</td><td>' + a.format("Do MMMM YYYY") + '</td><td>' + difference + '</td><td>' + total + '</td></tr>');
    tableBodyEl.append(tableRow);
    

})




