
/* Arrays that contains a list of Akan names in respect to the days of the weeks */

var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function dayOfWeek(century,year,month,date){
    var cc,yy,mm,dd;
    cc = century;
    yy = year;
    mm = month;
    dd = date;
    var value = Math.trunc((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
    return value
}

$(document).ready(function(){
    $("form#akan").submit(function(e){
      e.preventDefault() 
        var calendar = $("#date").val()
        var gender = $('input[name="gender"]:checked').val();
        var dateOfBirth = calendar;
        var century = parseInt(dateOfBirth[0].concat(dateOfBirth[1]));
        var year = parseInt(dateOfBirth[2].concat(dateOfBirth[3]));
        var month = parseInt(dateOfBirth[5].concat(dateOfBirth[6]));
        var date = parseInt(dateOfBirth[8].concat(dateOfBirth[9]));
        var day = dayOfWeek(century, year, month, date);
        if (gender == "male"){
            alert("Your Akan name is " + male[day - 1])
        } else{
            alert("Your Akan name is " + female[day - 1])
        }
    })

})