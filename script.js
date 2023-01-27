


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


submit.on("click", function(event){
    event.preventDefault();
    let dueDate = dueDateEl.val()

    console.log("hello");
    console.log(projectNameEl);
    const tableRow = $('<tr><td>' + projectNameEl.val() + '</td>    <td>' + projectTypeEl.val() + '</td><td>' + hourlyWageEl.val() + '</td><td>' + moment(dueDate).format("Do MMMM YYYY") + '</td></tr>');
    tableBodyEl.append(tableRow);
    

})




