	function map(){
		d3.select("#txt").remove();
		d3.selectAll("svg").remove();
		d3.selectAll(".tooltip").remove();
		var width = 1200;
		var height = 720;
	
		// var svg = d3.select("body")
		    // .append("svg")
		    // .style("background-color", "grey")
		    // .attr("width", width)
		    // .attr("height", height)
			// ;

		var projection = d3.geo.equirectangular()
			.scale(153) //153
		    .translate([width/2,height/2])  // /2, /2


		var path = d3.geo.path()
		    .projection(projection);

		var graticule = d3.geo.graticule();
		
		//add draw

        queue()
		   .defer(d3.json, "world-110m2.json")
		   .defer(d3.tsv, "world-110m-country-names.tsv")
		   .defer(d3.csv, "Death and Injury number.csv")
		   .await(ready);
		
		var projection1 = d3.geoMercator()
		         .translate([width/2,height/2])
				 
				 
		var path1 = d3.geo.path()
		    .projection(projection1);
			
		var graticule1 = d3.geo.graticule();
		
		var Acountry = ["Iraq", 
		                "United States of America", 
						"India", 
						"Nigeria", 
						"Syrian Arab Republic",
						"Afghanistan",
						"Pakistan",
						]
						

						
		var g = d3.select("body").append("svg")		          
		          .attr("width", width)
			      .attr("height", height)
				  .style("background-color","grey")
		          .append("g");
		
		function ready(error, data, names, csvdata){

			//now adding countries
			var countries  = topojson.feature(data, data.objects.countries).features
			
			countries = countries.filter(function(d){
				 return names.some(function(n) {
					if (d.id == n.id) return d.name = n.name
			     })
			})
			
			        action = g.selectAll(".country")
			        .data(countries)
					.enter().append("path")
			        .attr("class", "country")
					.attr("fill", "#cccccc")
					.attr({
                           'data-name': function(d) {
                            return d.name
                          },
                           'data-x-centroid': function(d) {
                            return path.centroid(d)[0]
                          },
                           'data-y-centroid': function(d) {
                            return path.centroid(d)[1]   // path.bounds(d)[1][1]
                          }
                    })
					.attr("d", path1)
					.on('mouseover', function(){
					    
						if(Acountry.includes(d3.select(this).attr('data-name'))){
						country = d3.select(this).attr("fill", "darkorange")
						}
						else{
						country = d3.select(this).attr("fill", "yellow")
						}
						countryName = country.attr('data-name')
						xCentroid = country.attr('data-x-centroid')
						yCentroid = country.attr('data-y-centroid')  
						
						nameTag.style('visibility', 'hidden')
						if(Acountry.includes(countryName)){
						nameTag.text(countryName)
						       .attr('font-size', '25px')
					           .attr("fill", "red")
							   .attr('font-style', 'bold')
						}
						else{
						nameTag.text(countryName)
						       .attr('font-size', '10px')
					           .attr("fill", "black")
						}
						
                        textWidth = nameTag.node().getComputedTextLength()
						
						nameTag.attr({
							x: xCentroid - (textWidth / 2),
							y: yCentroid       //Number(yBottom) + (countryName === 'Antarctica' ? -70 : 15),
						})
						nameTag.style('visibility', 'visible')
				//		console.log('in') show mouse in action
				//		console.log(d)
					})
					.on('click', function(){
						if(Acountry.includes(countryName)){
						nameTag.style('visibility', 'hidden')
						nameTag.text("Please check scene II. for individual country")
						       .attr('font-size', '36px')
					           .attr("fill", "darkgrey")
							   .attr('font-style', 'bold')
			                   ;
						}
						else{
							
						}
						nameTag.attr({
							x: 230,
							y: 300       
						})
						nameTag.style('visibility', 'visible')
					})
					.on('mouseout', function(){
						d3.select(this).attr("fill", "#cccccc")
						nameTag.style('visibility', 'hidden')
					})
					;
				nameTag = g.append('text')
				
				// define zoom function
				var zoom = d3.behavior.zoom()
                          .on("zoom",function() {
                            g.attr("transform","translate("+ 
							    d3.event.translate.join(",")+")scale("+d3.event.scale+")");
							g.selectAll("path")  
								.attr("d", path.projection(projection1)); 							
                           });
				//svg call zoom function
				g.call(zoom)
				
		}
		}
