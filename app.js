
/* Arrays that contains a list of Akan names in respect to the days of the weeks */

var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var dayOfWeek = Math.trunc((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
console.log (male[0])
function dayOfWeek(){
    var cc,yy,mm,dd;
    cc = century;
    yy = year;
    mm = month;
    dd = date;
}

$(document).ready(function(){
    $("form#akan").submit(function(event){
        event.preventDefault()
        var calendar = $("#date").val()
        var dateOfBirth = calendar;
        var century = dateOfBirth[0].concat(dateOfBirth[1]);
        var year = dateOfBirth[0].concat(dateOfBirth[1]);
        var month = dateOfBirth[0].concat(dateOfBirth[1]);
        var date = dateOfBirth[0].concat(dateOfBirth[1]);
    })
})