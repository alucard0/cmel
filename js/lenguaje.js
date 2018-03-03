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
                'inicio_lema':'La Salle: one heart, one committment, one life.',
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
    		}
    	};

    	$(function(){
    		$('.translate').click(function(){
    			var lang = $(this).attr('id');
    			$('.lang').each(function(index, element){
	    			$(this).html(arrLang[lang][$(this).attr('key')]);
	    		});
    		});
    	});
});