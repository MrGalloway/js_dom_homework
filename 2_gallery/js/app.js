/**
 * Created by Jacek on 2015-12-16.
 */
/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function (){
	console.log('xD');
	
	//P1
	const listElement = document.querySelectorAll('.gallery li');
	const body = document.querySelectorAll('body');

	//P2
	console.log(listElement);
	console.log(body);

	//P3
	for(element of listElement){
		element.addEventListener('click',imgClickHandler);
	} 
	
	//P4
	function createFullscreen(url) {
		const div = document.createElement('div');
		const img = document.createElement('img');
		const button = document.createElement('button');
		
		img.setAttribute('src',url);
		button.setAttribute('class','close');
		
		button.innerText = 'Close';
		div.appendChild(button);
		div.appendChild(img);

		return div; 
	}

	function imgClickHandler(evt) {
		const url = this.querySelector('img').src;
		const divToAdd = createFullscreen(url);
		body[0].appendChild(divToAdd);
		setButtonHandler(divToAdd);
	}

	function setButtonHandler(div){
		const button = div.querySelector('.close');
		button.addEventListener('click',buttonHandler);
	}

	function buttonHandler(evt){
		body[0].removeChild(evt.target.parentNode);
	}
});

//problem:
//obrazek nie laduje sie w fullscreenie, nad innymi obrazkami, przycisk jest zle umieszczony
