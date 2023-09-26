function prayerTimes(latitude, longitude) {
	fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
	.then(Response => Response.json())
	.then(function (response) {
		let data = new Date();
		let today = data.getDate() - 1;
		// console.log(today)
		// console.log(response.data[today]);
	});
}

function success(position) {
	prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
	alert('Posisi tidak dapat diakses')
}

function userLocation() {
	if (!navigator.geolocation) {
		alert('Geolocation tidak didukung browser anda, silahkan gunakan browser lain');
	} else {
		navigator.geolocation.getCurrentPosition(success, error);
	}
}

function index() {
	let app = document.getElementById('app');
	let h3 = document.createElement('h3');
	h3.innerHTML = 'Jadwal Sholat';

	app.appendChild(h3);

	userLocation();
}

index();
