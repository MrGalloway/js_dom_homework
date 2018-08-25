document.addEventListener('DOMContentLoaded',function (){
	console.log('xd');

	/*
	 * IMPORTANT: ALL CURRENCY VALUES ARE MULTIPLIED BY 100
	 * TO WORK AROUND ROUNDING ISSUES
	 * */

	const checkboxes = document.querySelectorAll('.checkbox input');
	const priceSpan = document.querySelector('#price');
	const submitButton = document.querySelector('.btn');
	const allItemsCheckbox = document.querySelector('#allitems input');
	const extrasCheckboxes = [...checkboxes].filter((c)=> c.attributes['data-price'] !== undefined);

	let extrasTotalMax = 0;


	//initial values setup
	for(checkbox of extrasCheckboxes){
		checkbox.checked = false;

		const itemPrice = parseFloat(checkbox.attributes['data-price'].value);
		extrasTotalMax += itemPrice*100;

		checkbox.addEventListener('change',checkboxChangeHandler);

	}

	let extrasTotal = extrasTotalMax;

	submitButton.addEventListener('click',submitButtonHandler);
	allItemsCheckbox.addEventListener('change',allItemsHandler);
	
	function allItemsHandler(evt){
		const allItems = evt.target;
		let valueToSet = null;
		let event = new Event('change');
		console.log(allItems);

		if(allItems.checked){
			valueToSet = true;
		}else{
			valueToSet = false;
		}

		for(checkbox of extrasCheckboxes){
				if(checkbox.checked !== valueToSet){
					checkbox.checked = valueToSet;
					checkbox.dispatchEvent(event);
				}
		}
	}

	function submitButtonHandler(){
		const container = document.querySelector('body > .container');
		const pageInfo = document.createElement('div');
		const existingInfo = document.querySelector('.page-info');

		pageInfo.className = 'page-info col-xs-12 col-sm-6 col-sm-offset-3';

		const infoText = 'Do zapłaty: ' + ((extrasTotalMax-extrasTotal)/100).toString() + ' zł';
		pageInfo.innerText = infoText;
		if(existingInfo === null){
			container.appendChild(pageInfo);
		}else{
			container.replaceChild(pageInfo,existingInfo)
		}
	};

	function checkboxChangeHandler(evt){

		const extraPrice = evt.target.attributes['data-price'].value;

		if(evt.target.checked === true){
				extrasTotal -= extraPrice * 100;
				const currentPrice = extrasTotalMax-extrasTotal;
				spanDisplayPrice(currentPrice);
		}else{
				extrasTotal += extraPrice * 100;
				const currentPrice = extrasTotalMax-extrasTotal;
				spanDisplayPrice(currentPrice);
				allItemsCheckbox.checked = false;
		}
	};

	function spanDisplayPrice(price){
		const spanText = (price/100).toString() + ' zł';
		priceSpan.innerText = spanText;
	};

});
