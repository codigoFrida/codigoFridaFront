function getFridas() {
	return new Promise((res, rej) => {
		console.log(localStorage.apiUrl+'usuarios')
		const paramsObj = {
			url: `${localStorage.apiUrl}usuarios?rol=1&equipo=0`,
			dataObject: {}
		}
		$.ajax(setRequestParams(paramsObj))
			.done((data) => {
				// data = variableTemporal2;
				res(data);
			})
			.fail((error) => {
				console.log(error)
				rej(error);
			});
	})
}

function setFridasHtml(fridas) {
	const fridasHtml = getFridasHtml(fridas);
	$('#divFridas').html(fridasHtml);
	showModalEvent();
	joinMemberEvent();
}

function setProfileImage(imageUrl) {
    if (imageUrl.length > 5)
        return `${localStorage.publicUrl}img/${imageUrl}.jpg`;
    else
        return "/img/image.jpeg";
}

function calcAge(fechaNacimiento) {
	return moment().diff(fechaNacimiento, 'years');
}

function getFridasHtml(fridas) {
	const fridasHtml = fridas.map((frida) => {
		const { id, nombre, apPaterno, apMaterno, createdAt, fechaNacimiento, correo, escuela, fotografia } = frida;
    const fotografiaHtml = setProfileImage(fotografia);
		return `<div class="col-lg-6 mb-3">
							<div class="media">
								<img class="mr-3 imgPerfil" src="${fotografiaHtml}" alt="Mentor">
								<div class="media-body">
									<p class="mb-1">${nombre} ${apPaterno} ${apMaterno}</p>
									<span><b>Edad:</b> ${calcAge(fechaNacimiento)}</span> <br/>
									<span><b>Correo:</b> ${correo}</span> <br/>
									<span><b>Escuela:</b> ${escuela}</span> <br/>
									<p>Fecha de registro: ${moment(createdAt).format('DD-MM-YYYY')}</p>
									<a href="#modalUnirFridaEquipo" data-idUsuario="${id}" data-toggle="modal" class="joinMemberTeam btn btn-primary">
										<i class="fas fa-user-plus"></i>
										Unir a equipo
									</a>
								</div>
							</div>
						</div>`;
	});
	return fridasHtml.join('');
}

function showModalEvent() {
	$('#modalUnirFridaEquipo').on('show.bs.modal', function (e) {
			const $btnTriggered = $(e.relatedTarget);
			const idUsuario = $btnTriggered.attr('data-idUsuario');
			$('#frmUnirFridaEquipo').attr('data-idUsuario', idUsuario)
	});
}

function joinMemberEvent() {
	$('#frmUnirFridaEquipo').submit(function(e) {
		e.preventDefault();
		const idUsuario = $(this).attr('data-idUsuario');
		const idEquipo = $('#inputEquipo').val();
		joinMemberTeam(idUsuario, idEquipo);
	});
}

function joinMemberTeam(idUsuario, idEquipo) {
	const paramsObj = {
		url: `${localStorage.apiUrl}equipos/${idEquipo}/usuario`,
		dataObject: {idUsuario},
		method: 'POST'
	}
	console.log(paramsObj)
	$.ajax(setRequestParams(paramsObj))
  	.done((data) => {
			alert({
				tipo: 'success',
				texto: 'Frida unida al equipo satisfactoriamente.',
				onClose: () => {
					location.reload();
				}
			});

    })
    .fail((error) => {
        console.log(error)
        alert({
					texto: 'Hubo un error al unir a la Frida al equipo, inténtalo más tarde por favor.'
				});
    });
}