/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded',function (){
	console.log('xD');

	const images = document.querySelectorAll('#gallery img');
	const showButton = document.querySelector('#showButton');
	const hideButton = document.querySelector('#hideButton');
	const tagInput = document.querySelector('#tagInput');

	console.log(images);
	console.log(showButton);
	console.log(hideButton);
	console.log(tagInput);
	
	showButton.addEventListener('click',showButtonHandler);
	hideButton.addEventListener('click',hideButtonHandler);
	
	//const dataString = document.querySelectorAll('img').dataset.tag;
	//const dataArray = dataString.split(',');

	//console.log(dataArray);
	
	
	function showButtonHandler(){

		for(img of [...images] ){
			const dataString = img.dataset.tag;
			const dataArray = dataString.split(',');
			
			const isFound = dataArray.indexOf(tagInput.value) !== -1;
			if(isFound){
				console.log(dataArray);
				console.log(img.className);
				img.className = '';
			}
		}
		tagInput.value = "";
	}

	function hideButtonHandler(){
		for(img of [...images] ){
			const dataString = img.dataset.tag;
			const dataArray = dataString.split(',');
			
			const isFound = dataArray.indexOf(tagInput.value) !== -1;
			if(isFound){
				console.log(dataArray);
				console.log(img.className);
				img.className = 'invisible';
			}
		}
		tagInput.value = "";
	}
});

//problemy:
//skad mam wiedziec jaki tag wpisac zeby pokazac brakujace obrazki?
