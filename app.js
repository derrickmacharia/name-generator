
/* Arrays that contains a list of Akan names in respect to the days of the weeks */

var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function dayOfWeek(century,year,month,date){
    var cc,yy,mm,dd;
    cc = century;
    yy = year;
    mm = month;
    dd = date;
    return  Math.trunc((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
}

$(document).ready(function(){
    $("form#akan").submit(function(event){
        event.preventDefault()
        var calendar = $("#date").val()
        var dateOfBirth = calendar;
        var century = parseInt(dateOfBirth[0].concat(dateOfBirth[1]));
        var year = parseInt(dateOfBirth[0].concat(dateOfBirth[1]));
        var month = parseInt(dateOfBirth[0].concat(dateOfBirth[1]));
        var date = parseInt(dateOfBirth[0].concat(dateOfBirth[1]));
        var dayOfWeek = dayOfWeek(century,year,month,date)
    })
})