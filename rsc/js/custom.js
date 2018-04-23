/* Devuelve la posición de la parte baja visualizada. Análoga a scrolLTop() */
$.fn.scrollBottom = function() { 
    return this.scrollTop() + $(window).height();
}

/* Rellena las barras de porcentaje de la sección de skills  */
function rellenarBarras(){
	$(".progress-bar").each(function(){
		if($(this).css('display') != 'flex'){
			$(this).css('display','flex');
			$.when($(this).animate({width: $(this).data('width'), 'min-width': '20%'},300))
			mostrarPorcentajes();
		}
	});
}

/* Oculta las barras de porcentaje de la sección de skills  */
function ocultarBarras(){
	$(".progress-bar").css('display','none').css('width',0);
}

/* Oculta las barras de porcentaje de la sección de skills  */
function mostrarPorcentajes(){
	$(".progress-bar").each(function(){
		$(this).html($(this).data('width'));
	});
}

/* Oculta las barras de porcentaje de la sección de skills  */
function ocultarPorcentajes(){
	$(".progress-bar").html('');
}

/* Marca el botón de menú correspondiente a la sección actual */
function marcarMenu(){
	$('.nav-link').removeClass('active');
	if($(this).scrollTop() < $('#infoSection').position().top - ($(window).height()/2)){
		$('#linkHome').addClass('active');
	}else if($(this).scrollTop() < $('#skillsSection').position().top - ($(window).height()/2)){
		$('#linkInfo').addClass('active');
	}else if($(this).scrollTop() < $('#experienceSection').position().top - ($(window).height()/2)){
		$('#linkSkills').addClass('active');
	}else if($(this).scrollTop() < $('#contactSection').position().top - ($(window).height()/2)){
		$('#linkExperience').addClass('active');
	}else{		
		$('#linkContact').addClass('active');
	}
}

/* Controla cuándo mostrar las barras de skills */
$(document).on('scroll', function() {
	marcarMenu();

	/* NOTA: otra opción es mostrar las barras cuando aparecen en pantalla INDIVIDUALMENTE */
    if($(this).scrollBottom()>=$('#skillsSection').position().top && $(this).scrollTop() <= $('#experienceSection').position().top){
        rellenarBarras();
    }
    else if($(this).scrollBottom()<$('#skillsSection').position().top || $(this).scrollTop() > $('#experienceSection').position().top){
    	ocultarBarras();
        ocultarPorcentajes();
    }
});


$(document).ready(function(){
	marcarMenu();

	alert('La página actual se encuentra en construcción.\nDisculpe las molestias.');
});