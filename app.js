
/* Arrays that contains a list of Akan names in respect to the days of the weeks */

var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var female =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var cc,yy,mm,dd;

var century = 19;
var year = 94;
var month = 10;
var date = 14;
cc = century;
yy = year;
mm = month;
dd = date;
var dayOfWeek = Math.trunc((((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
console.log (male[0])