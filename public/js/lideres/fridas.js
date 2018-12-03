const variableTemporal2 = [
    {
        id:1,
        nombre: 'Karla',
        apP: 'Torres',
        apM: 'Castaneda',
        edad: 15,
        correo: 'm@ucol.mx'
    },
    {
        id:2,
        nombre: 'Karla',
        apP: 'Torres',
        apM: 'Castaneda',
        edad: 15,
        correo: 'm@ucol.mx'
    },
];

function getFridas() {
	console.log(localStorage.apiUrl+'usuarios')
	const paramsObj = {
		url: `${localStorage.apiUrl}/usuarios/rol=1&equipo=0`,
		dataObject: {}
	}
	$.ajax(setRequestParams(paramsObj))
  	.done((data) => {
      // data = variableTemporal2;
  		const fridasHtml = getFridasHtml(data);
  		$('#divFridas').html(fridasHtml);
	    console.log(data);
		})
		.fail((error) => {
			console.log(error)
		});
}

function getFridasHtml(fridas) {
	const fridasHtml = fridas.map((frida) => {
		const { id, nombre, apP, apM, edad, correo } = frida;
		return `<div class="col-12 col-md-6 mb-3">
      <div class="media">
        <img class="mr-3 imgPerfil" src="/img/image.jpeg" alt="Mentor">
        <div class="media-body">
          <p>${nombre} ${apP} ${apM}</p>
          <p>${correo}</p>
          <p>${edad}</p>
        </div>
      </div>
    </div>`;
	});
	console.log(fridasHtml);
	return fridasHtml.join('');
}

$(document).ready(function() {
	getFridas();
});
