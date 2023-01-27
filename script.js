


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
    let removeButt = $('<button type="button" class="btn btn-danger">Remove</button>')
    console.log(removeButt);
    

    console.log("hello");
    console.log(projectNameEl);
    const tableRow = $('<tr><td>' + projectNameEl.val() + '</td>    <td>' + projectTypeEl.val() + '</td><td>' + hourlyWageEl.val() + '</td><td>' + a.format("Do MMMM YYYY") + '</td><td>' + difference + '</td><td>$' + total + '.00</td></tr>');
    tableRow.append(removeButt);
    tableBodyEl.append(tableRow);
    
    projectNameEl.val('');
    projectTypeEl.val('');
    hourlyWageEl.val('');
    dueDateEl.val('');
    
    removeButt.on("click", function(event){
        event.preventDefault();
        alert('1')
        tableRow.remove();
    })



})




