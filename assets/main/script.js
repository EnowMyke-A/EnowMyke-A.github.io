
function Toggle_Menu_Icon(){
   var icon=document.getElementsByClassName("bi-list");
    icon[0].classList.toggle("bi-x");
}

const text=['A BIG WELCOME TO PAGE','I\'M A WEB DESIGNER', 'A WEB DEVELOPER </>', 'A PROGRAMMER </>','I\'M CURRENTLY BASED IN BUEA, CAMEROON'];
		var i=0;
		var j=0;
		var backspace=true;
		let delay=45;
		var first=true;

		window.onload = function TypeWriter(){
				document.getElementById("Intro").textContent = text[j].substring(0, i);
				if (i > text.length+delay) {
					backspace = true;
					i-=45;
				}
                if (i == 0) {
					backspace = false;
					if(!first)j=(j+1)%text.length;
					first=false;
				}
                i = i + (backspace ? -1 : 1);
				setTimeout(TypeWriter,80);
		}

		function Validation(){

			
			var x = document.getElementById("name");
			var y = document.getElementById("email");
			var z = document.getElementById("message");
			var ret = 0;

			
				if(x.value==""){
					x.classList.add("Empty");
					x.placeholder="Name Required *";
					ret=1;
				}

				if(y.value==""){
					y.classList.add("Empty");
					y.placeholder="Email Required *";
					ret=1;
				}

				if(z.value==""){
					z.classList.add("Empty");
					z.placeholder="Message Required *";
					ret=1;
				}


				if(ret===1)return false;
				else return true;
		
		}