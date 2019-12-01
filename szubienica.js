var haslo="darowanemu koniowi w zęby się nie zagląda";


/*document.getElementById('toGuess').value;*/
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var end = new Audio("end.wav");
var badEnd = new Audio("endingbad.wav");

var points = 0;
var haslo1="";
for (i=0; i<dlugosc; i++){
	if( haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
	else haslo1=haslo1 + "-";
}
function wypisz_haslo()
{
	
	document.getElementById("plansza").innerHTML = haslo1;
	
}

window.onload = start;

var letters = new Array(35) ;
letters [0]= "A";
letters[1]="Ą";
letters[2]= "B";
letters[3]="C";
letters[4]="Ć";
letters[5]="D";
letters[6]="E";
letters[7]="Ę"; 
letters[8]="F";
letters[9]="G";
letters[10]="H";
letters[11]="I";
letters[12]="J";
letters[13]="K";
letters[14]="L";
letters[15]="Ł";
letters[16]="M";
letters[17]="N";
letters[18]="Ń";
letters[19]="O";
letters[20]="Ó";
letters[21]="P";
letters[22]="Q";
letters[23]="R"
letters[24]="S";
letters[25]="Ś";
letters[26]="T";
letters[27]="U";
letters[28]="V";
letters[29]="W";
letters[30]="X";
letters[31]="Y";
letters[32]="Z";
letters[33]="Ź";
letters[34]="Ż";
function start(){
	var div_content = "";
	for (i=0;i<=34;i++) {
			var element = "lett"+i;
 
	  div_content = div_content + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i+1) % 7 ==0) div_content =div_content + '<div style="clear:both;"></div>';
	}
	document.getElementById("alfabet").innerHTML = div_content;
	wypisz_haslo();
}

String.prototype.ustawZnak = function (miejsce, znak){
	if(miejsce > this.length -1) return this.toString();
	else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
}



function sprawdz(numer){


var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == letters[numer]) 
		{
			haslo1 = haslo1.ustawZnak(i,letters[numer]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		points++;
		var element = "lett" + numer;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		
		var element = "lett" + numer;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1){
		end.play().loop;
	document.getElementById("alfabet").innerHTML  = "That's correct! You've guessed the pass: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

	}
	
	//przegrana
	if (ile_skuch>=9) {
		badEnd.play();
	document.getElementById("alfabet").innerHTML  = "You've lost! The solution is: "+haslo+'<br />   <br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	}
}