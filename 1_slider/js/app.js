document.addEventListener('DOMContentLoaded', function (){
	console.log('xD');

	//punkt2
	const prevButton = document.querySelector('#prevPicture');
	const nextButton = document.querySelector('#nextPicture');
	const listElements = document.querySelectorAll('.slider li');
	const slider = document.querySelector('.slider');
	
	let pictureIndex = 0;

	console.log(prevButton);
	console.log(nextButton);
	console.log(listElements);
	console.log(slider);
	console.log(pictureIndex);
	console.log(isNaN(pictureIndex));
	
	//punkt3
	listElements[pictureIndex].classList += 'visible';

	//punkt4
	prevButton.addEventListener('click', prevClickHandler); 
	nextButton.addEventListener('click', nextClickHandler);

	function prevClickHandler(){
		if(pictureIndex>0){
			getVisiblePic().classList.remove('visible');
			pictureIndex--;
			listElements[pictureIndex].className = 'visible';
		}
	};
	function nextClickHandler(){
		if(pictureIndex<listElements.length-1){
			getVisiblePic().classList.remove('visible');
			pictureIndex++;
			listElements[pictureIndex].className = 'visible';
		}
	};
	
	function getVisiblePic(){return document.querySelector('.slider .visible')};
});
