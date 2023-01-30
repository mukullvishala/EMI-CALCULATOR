function Calculate() {

	let amount = document.querySelector("#amount").value;

	let rate = document.querySelector("#rate").value;

	let months = document.querySelector("#months").value;

	let interest = (amount * (rate * 0.01)) / months;
	
	let total = ((amount / months) + interest);

	document.querySelector("#total")
		.innerHTML = "EMI : (₹)" + total;
}
