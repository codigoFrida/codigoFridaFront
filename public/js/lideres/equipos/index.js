function getTeams() {
	console.log(localStorage.apiUrl+'equipos')
	$.get(`${localStorage.apiUrl}equipos`)
  	.done(function(data) {
      // TODO
  		// const teamsHtml = getTeamsHtml(data);
  		// $('#divEquipos').html(teamsHtml);
	    console.log(data);
	});
}

function getTeamsHtml(teams) {
	const teamsHtml = teams.map((team) => {
		const { numero } = team;
		return `<div class="col-md-6 mb-4">
              <a href="${localStorage.baseUrl}/lideres/equipos/${ID_EQUIPO}" class="text-dark">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Equipo ${numero}</h4>
                    <p>Integrante 1</p>
                    <p>Integrante 1</p>
                    <p>Integrante 1</p>
                    <p>Integrante 1</p>

                    <h6 class="card-subtitle mb-3">Avance</h6>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>`;
	});
	console.log(teamsHtml);
	return teamsHtml.join('');
}

$(document).ready(function() {
	getTeams();
});