 jQuery(function($){
    	var arrLang ={
    		'en' :{
    			/*General*/
    			'page_title':'ICLE 2019 | La Salle',
    			/*Menu*/
    			'menu_inicio':'Home',
    			'menu_informacion': 'Information',
                'menu_comoParticipar':'¿How can I participate? ',
                'menu_programa':'Program',
                'menu_registro':'Registration',
                'menu_en':'en',
                'menu_es':'sp',

                /*Inicio*/
                'inicio_titulo':'WORLD CONGRESS<br>OF LASALLIAN EDUCATION',
                'inicio_subtitulo':'Lasallian Education<br>for the 21st Century',
                'inicio_lema':'La Salle: one heart, one commitment, one life.',
                'inicio_fecha':'From March 14 to 16, 2019',

                /*Carta*/
                'carta_titulo':'Dear<br>Lasallians',
                'carta_parrafo_1':'The year 2019 marks the 300th anniversary of our Holy Founder’s entry to eternal life. This anniversary provides an opportunity for us to celebrate our Lasallian heritage, and to renew our commitment to protect the viability and vitality of the Lasallian educational mission through our work. Finally, this anniversary is a fitting occasion to express our trusting vision towards a future full of hope.',
                'carta_parrafo_2':'To emphasize the meaning of this celebration, and on behalf of the Superior General and the members of his council, I am honored to invite you to the World Congress of Lasallian Education (CMEL300) introduced by the Preparatory Committee.',
                'carta_parrafo_3':'The Congress will be focused on the path towards the Declaration of Lasallian Pedagogy. Therefore, the selected theme is <strong>Lasallian Education for the 21st Century.</strong> This academic event aims to provide a space for us to analyze the perspectives for the future of education and to share our reflections and good practices.',
                'carta_parrafo_4':'We hope that educators from around the Lasallian world will join us at <strong>Universidad La Salle Mexico City, from March14 to 16, 2019.</strong>',
                'carta_parrafo_5':'Experts from the Global Agenda and education will participate in this Congress. Moreover, Lasallian scholars will share with us the insights from their research studies. Also, transformative educational practices will be presented through workshops and a graphic exhibition.',
                'carta_parrafo_6':'Those who are interested can visit our website: <a href="http://www.lasalle.org/ICLE300" target="_blak" rel="noopener">www.lasalle.org/ICLE300</a>  which provides wide and detailed information about the Congress. Registration will be open also in this site from October 8, 2018 to February 15, 2019. ',
                'carta_parrafo_7':'Inspired by Saint John Baptist De La Salle, specially by his determination to creatively meet the educational needs of the most vulnerable, let us unite our voices in the World Congress of Lasallian Education to let the world and the young know that we are still determined to build a fairer fraternal future for all. Our association, strong and committed, will give faith to our word of hope. ',
                'carta_parrafo_8':'Lasallians from PARC, RELAN, RELAF, RELEM y RELAL, we look forward to seeing you in Mexico! Our home is your home!',
                'carta_parrafo_9':'<span class="nombre">Brother Gustavo Ramírez B., <i>fsc</i></span><br>General Councilor<br>General Coordinator of the Tercentenary celebrations',

                /*ejes tematicos y que voy a encontrar*/
                'ejes_titulo':'Thematic areas',
                'ejes_1':'<span class="numeroEje">1</span>Educational<br>challenges',
                'ejes_2':'<span class="numeroEje">2</span>Lasallian Association and<br>Educational Community',
                'ejes_3':'<span class="numeroEje">3</span>The Declaration<br>of Lasallian Pedagog',
                'que_encontrar_titulo':'¿What will I find<br>in the Congress?',
                'que_encontrar_1':'Keynote<br>presentations',
                'que_encontrar_2':'Round tables<br>for reflection ',
                'que_encontrar_3':'Dialogue roundtables',
                'que_encontrar_4':'Workshops /<br>Presentations',
                'que_encontrar_5':'Cultural<br>fair',
                'que_encontrar_6':'Analysis and reflection<br>with experts',

                /*Fechas Importantes*/
                'congres_titulo':'ABOUT THE CONGRESS',
                'congres_1':'<span class="titulo">Theme:</span><br>Lasallian education for the 21st Century',
                'congres_2':'<span class="titulo">Motto:</span><br>La Salle: one heart, one committment, one life',
                'congres_3':'<span class="titulo">Place:</span><br>Universidad La Salle Mexico City',
                'congres_4':'<span class="titulo">To:</span><br>Lasallian educators from around the world',
                'fechas_importantes_titulo':'Important<br>dates',
                'fechas_importantes_1':'Notice',
                'fechas_importantes_fecha_1':'March 1, 2018',
                'fechas_importantes_2':'Reception of presentations / workshops',
                'fechas_importantes_fecha_2':'From March 26 to September 1,  2018',
                'fechas_importantes_3':'General<br>Registration',
                'fechas_importantes_fecha_3':'October 8, 2018',
                'fechas_importantes_4':'Deadline for<br>Registration',
                'fechas_importantes_fecha_4':'February 15,  2019',
                'fechas_importantes_5':'Congress days',
                'fechas_importantes_fecha_5':'From March 14 to 16 <span class="fecha">, 2019</span>',
                
                /*Como participar*/
                'como_participar_titulo':'¿How can I participate? ',
                'como_participar_op_1':'Transformative educational experience presentation',
                'como_participar_descarga_1':'descargables/en/ICLE_EDUCATIONAL_PRACTICES.pdf',
                'como_participar_op_2':'Research<br>presentations',
                'como_participar_descarga_2':'descargables/en/ICLE_RESEARCH_PRESENTATIONS.pdf',
                'como_participar_op_3':'Workshops',
                'como_participar_descarga_3':'descargables/en/ICLE_WORKSHOPS.pdf',
                'como_participar_op_4':'Photographic<br>exhibition ',
                'como_participar_descarga_4':'javascript: window.location.replace(\'descargables/en/outdoorGallery.zip\');',

                /*Programa*/
                'programa_titulo':'Program',
                'programa_d1_titulo':'Day 1',
                'programa_d1_fecha':'Thursday, March 14',
                'programa_d1_sch_1':'Reception',
                'programa_d1_sch_2':'Opening ceremony',
                'programa_d1_sch_3':'Keynote presentation: Educational answers and calls',
                'programa_d1_sch_4':'Break',
                'programa_d1_sch_5':'Round table with experts',
                'programa_d1_sch_6':'Round tables for reflection',
                'programa_d1_sch_7':'Lunch',
                'programa_d1_sch_8':'Simultaneous workshops 1 / Presentations 1',
                'programa_d1_sch_9':'Break',
                'programa_d1_sch_10':'Simultaneous workshops 2 / Presentations 2',
                'programa_d1_sch_11':'Analysis and reflection with experts. Round of questions',
                
                'programa_d2_titulo':'Day 2',
                'programa_d2_fecha':'Friday, March 15',
                'programa_d2_sch_1':'Prayer. Brief recap',
                'programa_d2_sch_2':'Keynote presentation: The Educational Community and the    Association',
                'programa_d2_sch_3':'Break',
                'programa_d2_sch_4':'Round table with experts',
                'programa_d2_sch_5':'Round tables for reflection ',
                'programa_d2_sch_6':'Lunch',
                'programa_d2_sch_7':'Simultaneous workshops 3 / Presentations 3',
                'programa_d2_sch_8':'Break',
                'programa_d2_sch_9':'Simultaneous workshops 4 / Presentations 4',
                'programa_d2_sch_10':'Photo',
                'programa_d2_sch_11':'Analysis and reflection with experts. Round of questions',

                'programa_d3_titulo':'Day 3',
                'programa_d3_fecha':'Saturday, March 16',
                'programa_d3_sch_1':'Prayer. Breif recap',
                'programa_d3_sch_2':'Keynote Presentation: The Decaration of Lasallian Pedagogy',
                'programa_d3_sch_3':'Break',
                'programa_d3_sch_4':'Round table with experts',
                'programa_d3_sch_5':'Round tables for reflection by Regions, Districts, Sectors or Projects',
                'programa_d3_sch_6':'Eucharist',
                'programa_d3_sch_7':'Closure – Artistic Event',
                'programa_d3_sch_8':'Lunch',

                /*Registro*/
                'registro_titulo':'Pre-registration',
                'registro_p1':'The registration fee to participate in CMEL is of <strong>$225 USD</strong> per participant and covers: the activities, transportation and meals within the working agenda.',
                'registro_p2':'Registration will be open in the same website from October 8, 2018 to February 15, 2019.',
                'registro_registro_in_1':'Name',
                'registro_registro_in_2':'Institution',
                'registro_registro_in_3':'District',
                'registro_registro_in_4':'Email address',
                'registro_boton':'Send',
                'registro_modal_titulo':'Successful registration',
                'registro_modal_p':'We look forward to seeing you in Mexico!',
                'registro_modal_boton':'Accept',

                /*Footer*/
                'footer_direccion':'Benjamin Franklin 45, Col. Condesa, Zip Code 06140, Mexico, Mexico City Phone. +52 (55) 5278 9500',
                'footer_aviso':'Privacy Notice',
                'footer_terminos':'Terms and Conditions'

    		},
    		'es':{
    			'page_title':'ICLE 2019 | La Salle',
    			/*Menu*/
    			'menu_inicio':'Inicio',
    			'menu_informacion': 'Información',
                'menu_comoParticipar':'¿Cómo puedo participar?',
                'menu_programa':'Programa',
                'menu_registro':'Preregistro',
                'menu_en':'en',
                'menu_es':'es',

                /*Inicio*/
                'inicio_titulo':'Congreso Mundial<br>de Educación Lasaliana',
                'inicio_subtitulo':'La Educación Lasaliana<br>para el S. XXI',
                'inicio_lema':'La Salle: un corazón, un compromiso, una vida.',
                'inicio_fecha':'14 al 16 de marzo de 2019',

                /*Carta*/
                'carta_titulo':'Estimados<br>Lasalianos',
                'carta_parrafo_1':'El año 2019 marca el 300 aniversario de la entrada de nuestro Santo Fundador a la vida eterna. Este aniversario nos brinda la oportunidad de encontrarnos para celebrar nuestra herencia Lasaliana. Este aniversario es, también, oportunidad para renovar nuestro compromiso de trabajar para asegurar la viabilidad y vitalidad de la misión educativa Lasaliana. Finalmente, este aniversario es ocasión para expresar nuestra visión confiada en un futuro lleno de esperanza.',
                'carta_parrafo_2':'Para resaltar el significado de esta celebración, el comité preparatorio propuso la celebración de un Congreso Mundial de Educación Lasaliana (CMEL300), al cual tengo el honor de convocarlos, en nombre del H. Superior General y de su Consejo.',
                'carta_parrafo_3':'El Congreso se realizará en el contexto del camino hacia la Declaración de la Pedagogía Lasaliana. Por ello, el tema elegido es La Educación <strong>Lasaliana para el S. XXI.</strong> Este encuentro académico pretende ofrecer un espacio que nos permita analizar perspectivas del futuro de la educación, así como compartir reflexión y buenas prácticas.',
                'carta_parrafo_4':'Esperamos contar con educadores provenientes de todo el mundo Lasaliano, quienes se reunirán en la <strong>Universidad La Salle de la Ciudad de México, del 14 al 16 de marzo de 2019.</strong>',
                'carta_parrafo_5':'Contaremos con la participación de expertos en la agenda global y la educación.  Además, los académicos Lasalianos podrán compartir el fruto de su investigación, así como prácticas educativas transformadoras, en talleres y una exposición gráfica.',
                'carta_parrafo_6':'Los interesados pueden consultar el sitio en la red (<a href="http://www.lasalle.org/ICLE300" target="_blak" rel="noopener">www.lasalle.org/ICLE300</a>) creado para ofrecer información amplia y detallada acerca del Congreso. En el mismo sitio podrán inscribirse, a partir del 8 de octubre de 2018 y hasta el 15 de febrero de 2019.',
                'carta_parrafo_7':'Inspirados en San Juan Bautista De La Salle, específicamente en su determinación a responder con creatividad a las necesidades educativas de los más vulnerables, unamos nuestras voces en el Congreso Mundial de Educación Lasaliana, para decir al mundo y a los jóvenes que seguimos empeñados en la construcción de un futuro más justo y fraterno para todos. Nuestra asociación, fuerte y comprometida, dará credibilidad a nuestra palabra que da razones a la esperanza.',
                'carta_parrafo_8':'Lasalianos de PARC, RELAN, RELAF, RELEM y RELAL, los esperamos en México. ¡Nuestra casa es su casa!',
                'carta_parrafo_9':'<span class="nombre">H. Gustavo Ramírez B., <i>fsc</i></span><br>Consejero General<br>Coordinador General de los eventos del Tricentenario',

                /*ejes tematicos y que voy a encontrar*/
                'ejes_titulo':'Ejes temáticos',
                'ejes_1':'<span class="numeroEje">1</span>Retos<br>Educativos',
                'ejes_2':'<span class="numeroEje">2</span>Asociación Lasallista y<br>Comunidad Educativa',
                'ejes_3':'<span class="numeroEje">3</span>La Declaración<br>de la Pedagogía Lasaliana',
                'que_encontrar_titulo':'¿Qué voy a encontrar<br> en el Congreso?',
                'que_encontrar_1':'Conferencias<br>Magistrales',
                'que_encontrar_2':'Mesas de<br>Reflexión',
                'que_encontrar_3':'Mesas con<br>expertos',
                'que_encontrar_4':'Talleres /<br>Ponencias',
                'que_encontrar_5':'Feria<br>Cultural',
                'que_encontrar_6':'Análisis y reflexión entre expertos',

                /*Fechas Importantes*/
                'congres_titulo':'Congreso Mundial<br>de Educación Lasaliana',
                'congres_1':'<span class="titulo">Tema:</span><br>La Educación Lasaliana para el S. XXI',
                'congres_2':'<span class="titulo">Lema:</span><br>La Salle: un corazón, un compromiso, una vida',
                'congres_3':'<span class="titulo">Lugar:</span><br>Universidad La Salle, Ciudad de México',
                'congres_4':'<span class="titulo">Dirigido a:</span><br>Educadores Lasalianos de todo el mundo',
                'fechas_importantes_titulo':'Fechas<br>importantes',
                'fechas_importantes_1':'Lanzamiento<br>de la convocatoria',
                'fechas_importantes_fecha_1':'1 <span class="fecha">marzo 2018</span>',
                'fechas_importantes_2':'Recepción de taller<br>/ ponencia',
                'fechas_importantes_fecha_2':'26 <span class="fecha">marzo 2018  al</span><br>1 <span class="fecha">septiembre 2018</span>',
                'fechas_importantes_3':'Inscripciones<br>generales',
                'fechas_importantes_fecha_3':'8 <span class="fecha">octubre 2018',
                'fechas_importantes_4':'Cierre de<br>inscripciones',
                'fechas_importantes_fecha_4':'15 <span class="fecha">febrero 2019',
                'fechas_importantes_5':'Días del congreso',
                'fechas_importantes_fecha_5':'14 al 16 <span class="fecha">marzo 2019</span>',

                /*Como participar*/
                'como_participar_titulo':'¿Cómo puedo<br>participar?',
                'como_participar_op_1':'Ponencias<br>educativas',
                'como_participar_descarga_1':'descargables/es/ICLE_CONVOCATORIA-PONENCIAS-EDUCATIVAS_ES.pdf',
                'como_participar_op_2':'Ponencias de<br>investigación',
                'como_participar_descarga_2':'descargables/es/ICLE_CONVOCATORIA-PONENCIAS-INVESTIVACION_ES.pdf',
                'como_participar_op_3':'Convocatoria<br>talleres',
                'como_participar_descarga_3':'escargables/es/ICLE_CONVOCATORIA TALLERES_ES.pdf',
                'como_participar_op_4':'Exposición<br>fotográfica',
                'como_participar_descarga_4':'javascript: window.location.replace(\'descargables/es/exposicionFotografica.zip\');',

                /*Programa*/
                'programa_titulo':'Programa',
                'programa_d1_titulo':'Día 1',
                'programa_d1_fecha':'Jueves, marzo 14',
                'programa_d1_sch_1':'Recepción',
                'programa_d1_sch_2':'Acto Inaugural',
                'programa_d1_sch_3':'Conferencia Magistral: Llamadas y respuestas educativas',
                'programa_d1_sch_4':'Descanso',
                'programa_d1_sch_5':'Mesa de diálogo con expertos',
                'programa_d1_sch_6':'Mesas de Reflexión',
                'programa_d1_sch_7':'Comida',
                'programa_d1_sch_8':'Talleres Simultáneos 1 / Ponencia 1',
                'programa_d1_sch_9':'Descanso',
                'programa_d1_sch_10':'Talleres Simultáneos 2 / Ponencia 2',
                'programa_d1_sch_11':'Análisis y reflexión entre expertos. Sesión de Preguntas',

                'programa_d2_titulo':'Día 2',
                'programa_d2_fecha':'Viernes, marzo 15',
                'programa_d2_sch_1':'Oración. Recapitulación del día anterior',
                'programa_d2_sch_2':'Conferencia Magistral: La Comunidad Educativa y la Asociación',
                'programa_d2_sch_3':'Descanso',
                'programa_d2_sch_4':'Mesa de diálogo con expertos',
                'programa_d2_sch_5':'Mesas de Reflexión',
                'programa_d2_sch_6':'Comida',
                'programa_d2_sch_7':'Talleres Simultáneos 3 / Ponencia 3',
                'programa_d2_sch_8':'Descanso',
                'programa_d2_sch_9':'Talleres Simultáneos 4 / Ponencia 4',
                'programa_d2_sch_10':'Foto conmemorativa',
                'programa_d2_sch_11':'Análisis y reflexión entre expertos. Sesión de Preguntas',

                'programa_d3_titulo':'Día 3',
                'programa_d3_fecha':'Sábado, marzo 16',
                'programa_d3_sch_1':'Oración. Recapitulación del día anterior',
                'programa_d3_sch_2':'Conferencia Magistral: La Declaración de la Pedagogía lasallista',
                'programa_d3_sch_3':'Descanso',
                'programa_d3_sch_4':'Mesas de diálogo con expertos',
                'programa_d3_sch_5':'Mesas de Reflexión por Regiones, Distritos, Sectores u Obras',
                'programa_d3_sch_6':'Eucaristía',
                'programa_d3_sch_7':'Clausura - Evento Artístico',
                'programa_d3_sch_8':'Comida',

                /*Registro*/
                'registro_titulo':'Preregistro',
                'registro_p1':'La tarifa de inscripción para participar en el CMEL es de <strong>US $225</strong> por persona. La tarifa incluye las actividades, transportación y alimentos durante la agenda de trabajo.',
                'registro_p2':'La inscripción se realizará del 8 de octubre de 2018 al 15 de febrero de 2019 en esta misma página.',
                'registro_registro_in_1':'Nombre',
                'registro_registro_val_1':'Campo Requerido',
                'registro_registro_in_2':'Institución',
                'registro_registro_in_3':'Región',
                'registro_registro_in_4':'e-mail',
                'registro_boton':'Registrar',
                'registro_modal_titulo':'Registro Exitoso',
                'registro_modal_p':'Te esperamos en México!',
                'registro_modal_boton':'Aceptar',

                /*Footer*/
                'footer_direccion':'Benjamín Franklin 45, Col. Condesa, C.P. 06140, México, Ciudad de México Tel. +52 (55) 5278 9500',
                'footer_aviso':'Aviso de privacidad',
                'footer_terminos':'Términos y condiciones'


    		}
    	};

    	$(function(){
    		$('.translate').click(function(){
    			var lang = $(this).attr('id');
                /*Cambiar textos*/
    			$('.lang').each(function(index, element){
	    			$(this).html(arrLang[lang][$(this).attr('key')]);
	    		});
                /*Cambiar descargables*/
                $('.descargable').each(function(index, element){
                    $(this).attr("href",arrLang[lang][$(this).attr('key')]);
                });
                /*Cambiar place holder*/
                $('.placeForm').each(function(index, element){
                    $(this).attr("placeholder",arrLang[lang][$(this).attr('key')]);
                });

                if (lang=='en'){
                    $('[name="cmpNombre"]').rules('add', {
                        messages: {
                            required: "Required",
                            lettersonly:'Letters Only'
                        }
                    });
                    $('[name="cmpInstitucion"]').rules('add', {
                        messages: {
                            required: "Required",
                            lettersonly:'Letters Only'
                        }
                    });
                    $('[name="cmpMail"]').rules('add', {
                        messages: {
                            required: "Required",
                            email: "Invalid email"
                        }
                    });
                    $('[name="cmpRegion"]').rules('add', {
                        messages: {
                            required: "Choose a district"
                        }
                    });
                }
                else//es
                {
                    $('[name="cmpNombre"]').rules('add', {
                        messages: {
                            required: "Campo Requerido",
                            lettersonly: "Carácter inválido"
                        }
                    });
                    $('[name="cmpInstitucion"]').rules('add', {
                        messages: {
                            required: "Campo Requerido",
                            lettersonly: "Carácter inválido"
                        }
                    });
                    $('[name="cmpMail"]').rules('add', {
                        messages: {
                            required: "Campo Requerido",
                            email: "Ingresa un email válido"
                        }
                    });
                    $('[name="cmpRegion"]').rules('add', {
                        messages: {
                            required: "Seleccione una región"
                        }
                    });
                }

                 

    		});
    	});
});