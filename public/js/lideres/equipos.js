const variableTemporal = [
    {
        id:1,
        nombreEquipo: 'Friditas chidas',
        integrantes: [
            {
                id: 2,
                nombre: 'Ana Paula Rodríguez Mora'
            },
            {
                id: 4,
                nombre: 'Paulina Gómez Macías'
            },
            {
                id: 5,
                nombre: 'Laura Pérez Torres'
            },
            {
                id: 8,
                nombre: 'Ángeles Pinson Gutiérrez'
            }
        ],
        mentores: [
            {
                id: 2,
                nombre: 'José Ángel Torres Martínez'
            },
            {
                id: 4,
                nombre: 'Alejandra Peralta Escamilla'
            }
        ],
        avance: 15
    },
    {
        id:1,
        nombreEquipo: 'Friditas chidas',
        integrantes: [
            {
                id: 2,
                nombre: 'María Fernanda Martínez Valdepeña'
            },
            {
                id: 4,
                nombre: 'Ivanna Couturier Ángel'
            },
            {
                id: 5,
                nombre: 'María Alejandra Sánchez García'
            }
        ],
        mentores: [
            {
                id: 2,
                nombre: 'Francisco Xavier Batista Ibarra'
            },
            {
                id: 4,
                nombre: 'Andrea Muñoz Liy'
            }
        ],
        avance: 30
    },
];



function getTeams() {
	console.log(localStorage.apiUrl+'equipos')
	const paramsObj = {
		url: `${localStorage.apiUrl}equipos?page=1&perPage=1000`,
		dataObject: {}
	}
	$.ajax(setRequestParams(paramsObj))
  	.done((data) => {
			// data = variableTemporal;
  		const teamsHtml = getTeamsHtml(data);
  		$('#divEquipos').html(teamsHtml);
	    console.log(data);
		})
		.fail((error) => {
			console.log(error)
		});
}

function getTeamsHtml(teams){
  const teamsHtml = teams.map((team) =>{
    const { id, nombre, integrantes, mentores, avance} = team;
    const membersHtml = getTeamsMembersHtml(integrantes);
    const mentorsHtml = getTeamsMentorsHtml(mentores);
    return `<div class="col-md-6 mb-4">
    	    				<div class="card" style="width: 18rem;">
    	    					<div class="card-body">
    	    						<h4 class="card-title">Equipo: ${nombre}</h4>
                       <p class="font-weight-bold">Integrantes:</p>
    	    					   <a>${membersHtml}</a>
                       <p class="font-weight-bold">Mentores:</p>
                       <a>${mentorsHtml}</a>
    	    						<h6 class="card-subtitle mb-3"><p>Avance:</p></h6>
    	    						<div class="progress">
    									  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${avance}%;" aria-valuenow="${avance}" aria-valuemin="0" aria-valuemax="100">${avance}%</div>
    									</div>
                      <br>
                      <a href="${localStorage.baseUrl}/lideres/equipos/${id}" class="btn btn-info btn-sm btn-block">Ver equipo</a>
    	    					</div>
    	    				</div>
    	    			</div>`;
  });

  console.log(teamsHtml);
	return teamsHtml.join('');
}

function getTeamsMembersHtml(members)
{
  const teamsMembersHtml = members.map((member) =>
  {
    const {nombre} = member;
    return `<p>${nombre}</p>`;
  });
  console.log(teamsMembersHtml);
  return teamsMembersHtml.join('');
}

function getTeamsMentorsHtml(mentors)
{
  const teamsMentorsHtml = mentors.map((mentor) =>
  {
    const {nombre} = mentor;
    return `<p>${nombre}</P>`;
  });
  console.log(teamsMentorsHtml);
  return teamsMentorsHtml.join('');
}



$(document).ready(function() {
	getTeams();
});
