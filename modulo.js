class imageMapCalculator{

	reference={};


	constructor(imageObject){
		
		this.crearReferencia= this.crearReferencia.bind(this);

		this.redimensionar = this.redimensionar.bind(this);

		this.crearHTML = this.crearHTML.bind(this);

		this.copiar = this.copiar.bind(this);

		this.crearReferencia(imageObject);


	}

	copiar(){

		var preestring = JSON.stringify(this.reference);

		return JSON.parse(preestring);

	}

	crearReferencia(imageObject){

		//this.reference = imageObject;

		Object.assign(this.reference, imageObject);
		

		for(let value in imageObject){



			var points = imageObject[value].points;

			console.log(points);

			for(let i = 0; i< points.length; i++){

				var compare = i % 2;

				if(compare>0){
					for(let j = 0; j< points[i].length; j++){
						

						//console.log(points[i][j]);
						var mod = j + 1;

						console.log(`j : ${mod} mod : ${mod % 2}`);

						if(mod % 2 == 0){

							var y = points[i][j]*100;
							y = y / imageObject[value].height;

							//console.log(`eje y ${y}`);
							this.reference[value].points[i][j]=y;
							console.log(this.reference[value].points[i][j]);

						}

						else{
							var x = points[i][j]*100;
							x = x / imageObject[value].width;
							this.reference[value].points[i][j]= x;
							console.log(this.reference[value].points[i][j]);	
							//console.log(`eje x ${x}`);
							//this.reference.points[i][j] = x;

						}

					}
				}
			}

		}

		

	}

	redimensionar(width,height){

		var objetoRedimensionado=this.copiar(); 

	//	Object.assign(objetoRedimensionado, this.reference);

		

			for(let value in this.reference){



				var points = this.reference[value].points;

				console.log(points);

				for(let i = 0; i< points.length; i++){

					var compare = i % 2;

					if(compare>0){

						for(let j = 0; j< points[i].length; j++){

							var mod = j + 1;

							console.log(mod % 2);
							if(mod % 2 == 0){

								var y = this.reference[value].points[i][j]*height;
								y = y / 100;
								objetoRedimensionado[value].points[i][j]=y;
								console.log(`eje y ${y}`);
								
								

							}

							else{
								var x = this.reference[value].points[i][j]*width;
								x = x / 100;
								objetoRedimensionado[value].points[i][j]=x;
								console.log(`eje x ${x}`);
										
							}
							

							

						}
					}
				}

				
			}


		return objetoRedimensionado;
	}


	crearHTML(width,height){
		

		var redimensionado = this.redimensionar(width,height);

		
		var maps = "";

		var area="";
		


		for(value in redimensionado){

			console.log(this.reference[value].links);

			var  cords = "";

			var points = redimensionado[value].points;

			console.log(points);

			for(let i = 0; i< points.length; i++){

				var compare = i % 2;

				if(compare>0){
					for(let j = 0; j< points[i].length; j++){


						if(j == points[i].length-1){
							cords+= parseInt(points[i][j]);

						}

						else{

							cords+= `${parseInt(points[i][j])},`;

						}
						

							
			
							

					}

					var factor = points[i-1];

					if(value=="roma"){

							
					}

					

					area += `<area shape="poly" coords="${cords}" alt="${this.reference[value].links[factor].alt}" href="${this.reference[value].links[factor].link}" target="_blank">`;
					cords="";
				}
			}





			maps +=`<div class="contenedorImagen" style="width: ${width}px;height: ${height}px">
				<img src="${redimensionado[value].src}" class="imagen" usemap="#mapa${value}">
				<map name="mapa${value}">
				${area}
				</map>
			</div>`;

			area = "";


		}

		console.log(maps);

		return maps;



	}
	







}





/*
MILANO CITY 

['32','5','55','57']
 []
[]


*/