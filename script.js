function togglePopupCall() {
	document.getElementById('popup-call').classList.toggle('active');
}

function togglePopupTech() {
	document.getElementById('popup-tech').classList.toggle('active');
}

$('#thanks1').on('click', function(e) {
	e.preventDefault();
	document.getElementById("popup-tech").innerHTML = `
		<div class="overlay" onclick="togglePopupTech()"></div>
		<div class="card card-thanks">
			<div class="close-btn" onclick="togglePopupTech()">&times;</div>
			<h4>Спасибо! Ваша заявка была принята</h4>
			<p>Скоро с вами свяжется наш менеджер</p>
		</div>
	`;
});

$('#thanks2').on('click', function(e) {
	e.preventDefault();
	document.getElementById("popup-call").innerHTML = `
		<div class="overlay" onclick="togglePopupCall()"></div>
		<div class="card card-thanks">
			<div class="close-btn" onclick="togglePopupCall()">&times;</div>
			<h4>Спасибо! Ваша заявка была принята</h4>
			<p>Скоро с вами свяжется наш менеджер</p>
		</div>
	`;
});