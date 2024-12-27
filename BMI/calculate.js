

function calculate() {
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;

	if (weight > 0 && height > 0) {
		const bmi = parseFloat(weight) / (height * height);
		const result = document.getElementById('result');

		if (bmi > 18.5 && bmi< 17.5) {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
		} else if (bmi > 25 && bmi <23.5) {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are normal weight.`;
		} else if (bmi > 24 && bmi < 29.8) {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
		} else {
			result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
		}
	} else {
		alert('Please enter valid weight and height values.');
	}
}





    


