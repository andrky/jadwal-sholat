function prayerTimes(latitude, longitude) {
	fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
	.then(Response => Response.json())
	.then(function (response) {
		let date 	= new Date();
		let today = date.getDate() - 1;
		let data 	= response.data[today].timings;

		let app 	= document.getElementById('app');
		let table = document.createElement('table');
		let tbody = document.createElement('tbody') ;
		console.log(data);

		for(i in data) {
			let row		= tbody.insertRow();
			let name	= row.insertCell(0);
			let time 	=	row.insertCell(1) ;
			name.innerHTML = i;
			time.innerHTML = data[i];
			tbody.appendChild(row);
		}
		table.appendChild(tbody);
		app.appendChild(table);
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
