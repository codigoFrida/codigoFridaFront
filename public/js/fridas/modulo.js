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
    const $contents = contents.map(({id, descripcion, archivoSubido, material, comentarios}, index) => {
        const $clonedTemplate = $contentTemplate.clone();
        $clonedTemplate.find('.numeroContenido').html(index + 1);
        $clonedTemplate.find('.descripcion').html(descripcion);
        $clonedTemplate.find('.contenedorBtns').append(cloneMaterialBtn(material));
        return $clonedTemplate;
    });
    $('#divContenedorModulo').append($contents);
}

function cloneMaterialBtn(materials, $template = $('#plantillaBtnMaterial')) {
    const $materialTemplate = $($template.html());
    return materials.map(({id, urlDescarga, nombreArchivo}) => {
        const $clonedTemplate = $materialTemplate.clone();
        console.log(nombreArchivo, $clonedTemplate)
        $clonedTemplate.html(nombreArchivo);
        return $clonedTemplate;
    });
}

$(document).ready(function() {
	getModule();
});