function getModules() {
	console.log(localStorage.apiUrl+'modulos')
	const paramsObj = {
		url: `${localStorage.apiUrl}modulos`,
		dataObject: {},
		method: 'GET'
	}
	$.ajax(setRequestParams(paramsObj))
  	.done((data) => {
  		const modulesHtml = getModulesHtml(data);
  		$('#divModulos').html(modulesHtml);
	    console.log(data);
	})
	.fail((error) => {
		console.log(error)
	});
}

function getModulesHtml(modules) {
	const modulesHtml = modules.map((module) => {
		const { id, nombre, numero, fechaLimite } = module;
		return `<div class="col-md-6 col-lg-4 mb-4">
    				<div class="card">
    					<div class="card-body">
    						<h4 class="card-title">Módulo ${numero}</h4>
    						<h6 class="card-subtitle mb-3">${nombre}</h6>
    						<p>Fecha límite: ${fechaLimite.substring(0,10)}</p>
							<h6 class="card-subtitle mb-3">Avance:</h6>
							<div class="progress mb-3">
								<div class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
							</div>
    						<a href="${localStorage.baseUrl}/fridas/modulos/${id}" class="btn btn-info btn-sm btn-block">Ver módulo</a>
    					</div>
    				</div>
    			</div>`;
	});
	console.log(modulesHtml);
	return modulesHtml.join('');
}

$(document).ready(function() {
	getModules();
});