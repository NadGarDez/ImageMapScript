var tamanos ={

				'pantallaPequeña':{
					'min':0,
					'max':600,
					'estilo':{'width':100,'height':50}
				},
				'pantallaMediana':{
					'min':601,
					'max':1199,
					'estilo':{'width':50,'height':50}
				},
				'pantallaGrande':{
					'min':1200,
					'max':5000,
					'estilo':{'width':25,'height':50}
				}


			}


			var obj = {

				'milano':{

					'link':'',

					'src':'milano-city.jpg',

					'width':123,
					'height':123,

					'points':[

						[10,2,3],
						[1,2,3]

					]

				},

				'torino':{

					'link':'',

					'src':'torino-city.jpg',

					'width':123,
					'height':123,

					'points':[

						[1,2,3],
						[1,2,3]

					]

				},
				
				'roma':{

					'link':'',

					'src':'roma-city-b.jpg',

					'width':123,
					'height':123,

					'points':[
						[1,2,3],
						[1,2,3]

					]

				}

				


			}

			var anchoVentana = window.innerWidth;
			var altoVentana = window.innerHeight;
			var ancho;
			var alto;

			for(value in tamanos){

				if((anchoVentana>=tamanos[value].min)&&(anchoVentana<=tamanos[value].max)){

					console.log(anchoVentana);

					ancho = tamanos[value].estilo.width*anchoVentana;
					ancho = ancho / 100;

					alto = tamanos[value].estilo.height*altoVentana;
					alto = alto / 100;

					console.log(`ancho : ${ancho}, alto : ${alto}`);
				}

			}

			var mivar = new imageMapCalculator(obj);

			

			//document.getElementById('contenedorImageMap').innerHTML= mivar.crearHTML(ancho,alto);

			
			window.addEventListener("resize", 

				()=>{


					alert('resize');
					var anchoVentana = window.innerWidth;
					var altoVentana = window.innerHeight;
					var ancho;
					var alto;

					for(value in tamanos){

						if((anchoVentana>=tamanos[value].min)&&(anchoVentana<=tamanos[value].max)){



							ancho = tamanos[value].estilo.width*anchoVentana;
							ancho = ancho / 100;

							alto = tamanos[value].estilo.height*altoVentana;
							alto = alto / 100;

							console.log(`ancho : ${ancho}, alto : ${alto}`);
							//document.getElementById('contenedorImageMap').innerHTML= mivar.crearHTML(ancho,alto);

						}

					}


				}

			);

