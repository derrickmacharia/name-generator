
/* Arrays that contains a list of Akan names in respect to the days of the weeks */

var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var cc,yy,mm,dd
var century 
var year
var month
var date 
cc = century
yy = year
mm = month
dd = date

function getDayOfWeek(cc,yy,mm,dd){
    var dayOfWeek = Math.trunc((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7 )
    return dayOfWeek;
}

/**/
$(document).ready(function(){
    $("form#akan").submit(function(event){
        event.preventDefault()
        var gender = $('input[name="gender"]:checked').val();
        var date = $("#date").val()
        century = parseInt(date[0]+ date[1])
        year = parseInt(date[2]+ date[3])
        month = parseInt(date[5]+ date[6])
        date = parseInt(date[8]+ date[9])
        if (gender == "male"){
            var day = getDayOfWeek(century,year,month,date)
            alert("Your Akan name is " + male[day - 1])
        } else{
            var day = getDayOfWeek(century,year,month,date)
            alert("Your Akan name is " + female[day - 1])
        }
    })
})