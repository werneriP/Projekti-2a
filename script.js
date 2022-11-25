window.onload = document.getElementById("Teatterit").select()

var TeatteriID;
var searchWord;
function näytäElokuvat()   {
   document.getElementById("Teatterit").select();
   switch (document.getElementById("Teatterit").value)   {
      case "Pääkaupunkiseutu":
         teatteriID = 1014;
      default:
         TeatteriID = null;
   }
   loadXML ();
}

function loadXML()   {
   if (TeatteriID != undefined)  {
      var url = "https://www.finnkino.fi/xml/Schedule/" + TeatteriID + "&dt" + date;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function()  {
         if (this.readyState == 4 && this.status == 200) {
            parseXML(this);
         }
      }
      xhttp.open("GET", url, true);
      xhttp.send();
   }
}
