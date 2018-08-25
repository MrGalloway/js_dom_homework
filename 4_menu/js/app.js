/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded',function (){
	console.log('xD');

	const mainListElements = document.querySelectorAll('div > ul > li');
	console.log(mainListElements);

	document.querySelector('div').className="nav";

	for(element of mainListElements){
		console.log(element);
		element.addEventListener('mouseover',mouseOverHandler);
		element.addEventListener('mouseout',mouseOutHandler);
	}

	function mouseOverHandler(evt){
		if(evt.target.querySelector('ul') !== null){
			console.log(evt.target);
			console.log(evt.target.querySelector('ul'));
			evt.target.querySelector('ul').style.display = 'block';
		}
	};
	function mouseOutHandler(evt){
		if(evt.target.querySelector('ul') !== null){
			console.log('Mouse out');
			evt.target.className='';
			evt.target.querySelector('ul').style.display = 'none';
		}
	};
});

//problem:
//nie da sie najechac na elementy submenu
