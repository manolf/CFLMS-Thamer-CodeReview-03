	function calculateInsurance(){
		name = document.forms['input']['name'].value;
		age = document.forms['input']['age'].value;
		horsepower = document.forms['input']['horsepower'].value;
		country = document.getElementById('country').value;

		output = document.getElementById('output');

		//console.log(`my name is ${name} and my age is ${age} and my horepower is ${horsepower} and I come from ${country}`);
		
		/*var result = `my name is ${name} and my age is ${age} and my horepower is ${horsepower} and I come from ${country}`; */

		//document.write(result);

		land = document.getElementById("country").selectedIndex;
		var insurance = 0;

		switch(land){
			case 0:
			insurance = horsepower * 100 / age + 50;
			break;

			case 1:
			insurance = horsepower * 120 / age + 100;
			break;

			case 2:
			insurance = horsepower * 150 / (age + 3) + 50;
			break;

			default:
			insurance = 0;
			break;		
		}


		output.innerHTML = `Dear ${name}, your insurance costs ${insurance.toFixed(2)} Euro! `;
			return false;
	}


	
