function bar(time){
///

d3.select("#txt").remove();
	
	
if(time == 0){
button = d3.select("#buttons").append("div").attr("id","buttons2").style("height", "100px")
         .attr("transform","translate(0,7)");
button.append("button").attr("class", "subbutton").append("text").text("Iraq").attr("id", "iraq");	
button.append("button").attr("class", "subbutton").append("text").text("Afghanistan").attr("id", "afghanistan");
button.append("button").attr("class", "subbutton").append("text").text("Pakistan").attr("id", "pakistan"); 
button.append("button").attr("class", "subbutton").append("text").text("India").attr("id", "india"); 
button.append("button").attr("class", "subbutton").append("text").text("Nigeria").attr("id", "nigeria"); 
button.append("button").attr("class", "subbutton").append("text").text("Syria").attr("id", "syria"); 
button.append("button").attr("class", "subbutton").append("text").text("USA").attr("id", "usa")
}
d3.select()

	var Iraq = [0,0,0,0,0,1,297,0,0,1,17,0,243,1,1,0,0,4,147,25,0,3,205,270,412,25,129,35,137,39,39,14,1605,1605,6303,9447,12885,19948,9578,11972,8908,6911,9681,22742,29874,22157,26472];
	
	var US = [193,75,45,78,70,182,45,21,16,76,37,23,48,13,783,16,37,2,2,17,12,6,5,26,904,121,20,7,60,7,15,17869,0,0,0,0,15,0,15,59,21,2,14,459,25,95,207];

    var Afghanistan = [0,0,0,1,0,0,0,0,0,54,0,0,0,0,0,0,0,2,234,94,134,195,234,52,15,61,41,38,80,49,233,371,349,349,538,778,1653,2345,2419,2658,2761,3462,8180,8018,10524,13197,12604];

    var Pakistan = [1,0,0,0,2,1,4,0,7,48,35,8,12,36,61,1,411,1278,402,304,674,830,545,788,1327,1178,968,500,373,566,374,436,300,300,975,436,983,3749,3085,5028,4656,4323,7048,8644,5801,3455,3006];	
	
	var India = [0,0,0,0,0,4,0,0,0,50,30,36,166,276,559,130,503,935,1999,1643,1949,2438,2069,794,977,1506,2269,809,1055,1432,1804,1768,1655,1655,1283,1679,2860,1813,2578,1628,1471,1216,915,1238,1266,1033,1246];
	
	var Nigeria = [0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,4,0,0,44,265,15,1,39,158,9,343,2,6,39,39,72,47,55,275,122,100,332,308,1066,2519,2542,10064,8205,3319];
	
	var Syria = [0,0,0,0,10,0,40,1,0,111,116,415,121,1,1,60,16,0,0,0,0,0,0,0,0,65,2,0,0,0,0,0,0,0,6,0,5,0,32,0,0,378,2804,3799,5281,6903,5691];

	d3.selectAll("svg").remove();	
	change(Iraq, "ir")
	
	var d = [1,2,3,4,5,6,7]
	
    d3.select("#usa")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(US, "us");
        })
	d3.select("#iraq")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(Iraq, "ir");
        })
	d3.select("#afghanistan")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(Afghanistan, "af");
        })
	d3.select("#india")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(India, "in");
        })
	d3.select("#pakistan")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(Pakistan, "pa");
        })
	d3.select("#nigeria")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(Nigeria, "ni");
        })
	d3.select("#syria")
	  .on("click", function(d,i) {
		  d3.selectAll("svg").remove();	
		  change(Syria, "sy");
        })
    		
		
		
function change(dataset, label){		
    	d3.selectAll(".tooltip").remove();
	var width = 1200;
	var height = 800;
    k = label

    
	
	
	var padding = {left:80, right:30, top:20, bottom:40};
	
	

				   
	var year = [1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,
	            1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,
				1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
				2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
				2010,2011,2012,2013,2014,2015,2016,
				];
				
	
				
	var padding = {left:80, right:30, top:20, bottom:40};
	
	//padding between rectangle
	var rectPadding = 4;
	

	//x scale
	var xScale = d3.scale.ordinal()
		.domain(year)
		.rangeRoundBands([0, width - padding.left - padding.right]);

	//y scale
	var yScale = d3.scale.linear()
		.domain([0,d3.max(dataset)])
		.range([height - padding.top - padding.bottom, 0]);

	//define x axis
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

		
	//define y axis
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");		

	//Add div and set opacity to 0
	var tooltip = d3.select("body")
		.append("div")
		.attr("class","tooltip")
		.style("opacity",0.0);	
	                if(k == "ir"){
                                note = tooltip.html("2003 : US start invasion to IRAQ ")
					.style("left", 150 + "px")
					.style("top", 400 + "px")
					.style("font-size", "20pt")
			}
			if(k == "us"){
				note = tooltip.html("2001 : 911")
				    .style("left", 200 + "px")
					.style("top", 400 + "px")
					.style("font-size", "20pt")
			}
			if(k == "af"){
				note = tooltip.html("2001 : Afghanistan War")
				    .style("left", 200 + "px")
					.style("top", 400 + "px")
					.style("font-size", "20pt")
			}
			if(k == "in"){
				note = tooltip.html("")
				    .style("left", 200 + "px")
					.style("top", 400 + "px")
					.style("font-size", "20pt")
			}
			if(k == "pa"){
				note = tooltip.html("2001: Al-Qaeda Spreads around Pakistan after Afghanistan War")
				    .style("left", 100 + "px")
					.style("top", 165 + "px")
					.style("font-size", "16pt")
			}
			if(k == "ni"){
				note = tooltip.html("2009-2010: Rise of Boko Haram")
				    .style("left", 200 + "px")
					.style("top", 400 + "px")
					.style("font-size", "20pt")
			}
			if(k == "sy"){
				note = tooltip.html("2011: Syria Civil War, Rise of ISIL")
				    .style("left", 200 + "px")
					.style("top", 400 + "px")
					.style("font-size", "20pt")
			}
			
			note.style("color","red")
		            .style("opacity",0.9);
	
		//add rect
	svg = d3.select("body").append("svg").attr("width", width).attr("height", height)
	      .attr("transform","translate(0,40)")
	var rects = svg.selectAll(".MyRect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class","MyRect")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.attr("x", function(d,i){
			return xScale(i+year[0]) + rectPadding/2; //year[]
		} )
		.attr("y",function(d){
			return height - padding.top - padding.bottom;
		})
		.attr("width", xScale.rangeBand() - rectPadding )
		.attr("height", function(d){
		   return 0;
		})
		.transition()
		.duration(600)
		.attr("y",function(d){
			return yScale(d);
		})
		.attr("height", function(d){
		   return height - padding.top - padding.bottom - yScale(d);
		})
		.attr("fill","steelblue")
		
      svg.selectAll(".MyRect")		
		.on("mouseover",function(d,i){
			if(k=="us"|k=="af"|k=="pa"){
				if(i > 30){
					d3.select(this).attr("fill","red")
				}
				else{
				d3.select(this).attr("fill","yellow");
				}
			}
			if(k=="ir"){
				if(i > 32){
					d3.select(this).attr("fill","red")
				}
				else{
				d3.select(this).attr("fill","yellow");
				}								
			}
			if(k=="ni"){
				if(i > 38){
					d3.select(this).attr("fill","red")
				}
				else{
				d3.select(this).attr("fill","yellow");
				}								
			}
			if(k=="sy"){
				if(i > 40){
					d3.select(this).attr("fill","red")
				}
				else{
				    d3.select(this).attr("fill","yellow");
				}								
			}
			if(k=="in"){
				d3.select(this).attr("fill","yellow");					
			}
		})
		.on("mouseout",function(d,i){
			d3.select(this)
				.transition()
		        .duration(500)
				.attr("fill","steelblue");
		});
    
	//Add text and text animation
	var texts = svg.selectAll(".MyText")
		.data(dataset)
		.enter()
		.append("text")
		.attr("class","MyText")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.attr("x", function(d,i){
			return xScale(i + year[0]) + rectPadding/2;
		} )
		.attr("y",function(d){
			return height - padding.top - padding.bottom;
		})
		.attr("dx",function(){
			return (xScale.rangeBand() - rectPadding)/2;
		})
		.attr("dy",function(d){
			return -2;
		})
		.text(function(d){
			return d;
		})
		.transition()
		.duration(600)
		.attr("y",function(d){
			return yScale(d);
		})
		;
		
	//add x axis label
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
		.call(xAxis)
		.selectAll("text")
		.attr("y", 7)
		.attr("x", 8)
		.attr("transform", "rotate(30)"); 
		
	//add y axis
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.call(yAxis)
		.selectAll("text")
		.style("font-size", "14px")
		.attr("transform", "rotate(-30)"); 
		;
		
	//add y axis
    svg.append("text")
	    .attr("dx",-550)
        .attr("dy",30)
        .text("Death Number Trend in Major Affected Countries")
		.attr("class","MyRect")
	    .attr('transform', 'rotate(270)')
	    .style("font-size", "18px")
	    ;
	
}
}
