/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded',function (){
	console.log('xD');

	const tooltips = document.querySelectorAll('.tooltip');
	console.log(tooltips);

	for(tooltip of tooltips){
		console.log(tooltip);
		tooltip.addEventListener('mouseover',mouseOverHandler);
		tooltip.addEventListener('mouseout',mouseOutHandler);
	}

	function mouseOverHandler(evt){
		const tooltipText = evt.target.attributes['data-text'].value;
		console.log(tooltipText);
		evt.target.appendChild(createSpanWithText(tooltipText));
	};
	
	function mouseOutHandler(evt){
		const tooltip = evt.target.querySelector('.tooltipText');
		console.log(tooltip);
		evt.target.removeChild(tooltip);
	};

	function createSpanWithText(text){
		const span = document.createElement('span');
		span.className = 'tooltipText';
		span.textContent = text;

		return span;
		
	};
});

//problem:
//tooltipy znikaja za szybko
