function getTeams() {
	return new Promise((res, rej) => {
		console.log(localStorage.apiUrl+'equipos')
		const paramsObj = {
			url: `${localStorage.apiUrl}equipos`,
			dataObject: {}
		}
		$.ajax(setRequestParams(paramsObj))
	  	.done((data) => {
				res(data);
			})
			.fail((error) => {
				console.log(error)
				rej(error);
			});
	})
}

function setTeamsHtml(teams) {
	const teamsHtml = getTeamsHtml(teams);
	$('#divEquipos').html(teamsHtml);
}

function getTeamsHtml(teams){
  const teamsHtml = teams.map((team) =>{
    const { id, nombre, integrantes, mentores, avance} = team;
    const membersHtml = getTeamsMembersHtml(integrantes);
    const mentorsHtml = getTeamsMentorsHtml(mentores);
    return `<div class="col-md-6 mb-4">
    	    				<div class="card">
    	    					<div class="card-body">
    	    						<h4 class="card-title">Equipo: ${nombre}</h4>
                       <p class="font-weight-bold">Integrantes:</p>
    	    					   ${membersHtml}
                       <p class="font-weight-bold">Mentores:</p>
                       ${mentorsHtml}
    	    						<h6 class="card-subtitle mb-3"><p>Avance:</p></h6>
                      <br>
                      <a href="${localStorage.baseUrl}/lideres/equipos/${id}" class="btn btn-info btn-sm btn-block">Ver equipo</a>
    	    					</div>
    	    				</div>
    	    			</div>`;
  });


	return teamsHtml.join('');
}

function getTeamsMembersHtml(members)
{
  const teamsMembersHtml = members.map((member) =>
  {
    const {nombre} = member;
    return `<p>${nombre}</p>`;
  });
  return teamsMembersHtml.join('');
}

function getTeamsMentorsHtml(mentors)
{
  const teamsMentorsHtml = mentors.map((mentor) =>
  {
    const {nombre} = mentor;
    return `<p>${nombre}</P>`;
  });
  return teamsMentorsHtml.join('');
}
