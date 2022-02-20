window.onkeypress = function(event) {
	if (event.which == 32) {
	  generate()
	}
  }

var cards=document.getElementsByClassName("card");
var favlist=document.getElementById("favlist");
var colorname=document.getElementsByClassName("copy");
var locked=[0,0,0,0,0,0]
var colors=["","","","","",""]
generate()


function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function generate(){
	for (let i =0;i<cards.length;i++){

	    if(locked[i]===0){


			colors[i]=generateRandomColor();
			colorname[i].innerHTML="copy:"+colors[i];
			cards[i].style.backgroundColor=colors[i];
		}

		
	}
	setfavcolors();

}

function save(i)
{
	
	localStorage.setItem("lastname", localStorage.getItem("lastname")+'<li class="list-group-item" style="background-color:'+colors[i]+'">'+colors[i]+'</li>');
    setfavcolors();
}

function clean()
{
	localStorage.setItem("lastname"," ");
	setfavcolors();
	
}

function setfavcolors(){

	
	favlist.innerHTML=localStorage.getItem("lastname");


}

function copy(i)
{
	
	navigator.clipboard.writeText(colors[i]);
	console.log(colors[i]);


}

function lock(i){
	
	if(locked[i]===1)
		locked[i]=0;
	else
		locked[i]=1;	
}