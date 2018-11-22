var module = null;

function getModule() {
	const paramsObj = {
		url: `${localStorage.apiUrl}modulos/${idModulo}`,
		method: 'GET'
	}
	$.ajax(setRequestParams(paramsObj))
  	.done((data) => {
        module = data;
        module.contenidos[0].material = [
            {
                id: 1,
                urlDescarga: 'fjdklsa;.com',
                nombreArchivo: 'Presentación Fridas'
            },
            {
                id: 2,
                urlDescarga: 'fjdklsa;.com',
                nombreArchivo: 'Ecología de medios'
            }
        ]
        showModule();
        showContent(module.contenidos);
    })
    .fail((error) => {
        console.log(error)
    });
}

function showModule() {
    const { id, nombreModulo, descripcion } = module;
    $('#idModulo').text(id)
    $('#nombre').text(nombreModulo)
	$('#descripcion').text(descripcion);
}

function showContent(contents, $template = $('#plantillaContenido')) {
    const $contentTemplate = $($template.html());
    const $contents = contents.map(({id, descripcion, archivoSubido, material, ejercicio, comentarios}, index) => {
        const $clonedTemplate = $contentTemplate.clone();
        $clonedTemplate.find('.numeroContenido').html(index + 1);
        $clonedTemplate.find('.descripcion').html(descripcion);
        $clonedTemplate.find('.contenedorBtns').append(setMaterialsBtn(material));
        $clonedTemplate.find('.contenedorEjercicio').append(cloneExerciseTemplate(ejercicio));
        return $clonedTemplate;
    });
    $('#divContenedorModulo').append($contents);
    initFileStyle();
}

function setMaterialsBtn(materials) {
    const $materialTemplate = $($template.html());
    return materials.map((material) => {
        return cloneMaterialBtn(material);
    });
}

function cloneMaterialBtn(material, $template = $('#plantillaBtnMaterial')) {
    const { urlDescarga, nombreArchivo } = material;
    const $materialTemplate = $($template.html());
    const $clonedTemplate = $materialTemplate.clone();
    $clonedTemplate.attr('href', urlDescarga);
    $clonedTemplate.html(nombreArchivo);
    return $clonedTemplate;
}

function cloneExerciseTemplate(exercise, $template = $('#plantillaEjercicio')) {
    exercise = {
        id: 1,
        descripcion: 'En este módulo identificarás un problema social a partir de la reflexión de tu contexto inmediato. Para ello conocerás los Objetivos de Desarrollo Sostenible (ODS), impulsados por la Organización de las Naciones Unidas (ONU) y la importancia de generar estrategias de solución rumbo a la Agenda 2030. Al finalizar, redactarás el problema y destacarás por qué es vital abordarlo.',
        urlDescarga: ''
    }
    const $exerciseTemplate = $($template.html());
    const $clonedTemplate = $exerciseTemplate.clone();
    const { id, descripcion, urlDescarga } = exercise;
    const nombreArchivo = `Ejercicio ${id}`;
    $clonedTemplate.find('.descripcion').html(descripcion);
    if (urlDescarga) {
        $clonedTemplate.append(cloneMaterialBtn({urlDescarga, nombreArchivo}));        
    } else {
        $clonedTemplate.append(cloneExerciseInputTemplate(id));
    }
    return $clonedTemplate;
}

function cloneExerciseInputTemplate(exerciseId, $template = $('#plantillaInputEjercicio')) {
    const $exerciseInputTemplate = $($template.html());
    const $clonedTemplate = $exerciseInputTemplate.clone();
    $clonedTemplate.find('input').data('id', exerciseId);
    return $clonedTemplate;
}

$(document).ready(function() {
	getModule();
});