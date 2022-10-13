var i=0;
let dice1=Math.floor(Math.random()*6)+1;
let dice2=Math.floor(Math.random()*6)+1;

if(dice1>dice2){
	document.querySelector('h2').innerHTML="Player 1 Has Won !!!";
}
else if(dice1==dice2){
		document.querySelector('h2').innerHTML="It's A Tie Refresh again";

}
else {
		document.querySelector('h2').innerHTML="Player 2 Has Won !!!";

}


function roll(dice1){

	switch(dice1){
		case 1: document.querySelectorAll('img')[i].setAttribute('src','images/d1.png');
				break;
		case 2:document.querySelectorAll('img')[i].setAttribute('src','images/d2.jpg');
				break;
		case 3:document.querySelectorAll('img')[i].setAttribute('src','images/d3.jpg');
				break;
		case 4:document.querySelectorAll('img')[i].setAttribute('src','images/d4.jpg');
				break;
		case 5:document.querySelectorAll('img')[i].setAttribute('src','images/d5.jpg');
				break;
		case 6:document.querySelectorAll('img')[i].setAttribute('src','images/d6.jpg');
				break;

	};
	i++;

}
roll(dice1);
roll(dice2);