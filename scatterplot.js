function scatter(){
	d3.select("#txt").remove();
	d3.selectAll("svg").remove();
	
	var width = 1200;
	var height = 800;
	
	var padding = {left:50, right:30, top:20, bottom:80};
	
	var svg = d3.select("body").append("svg")		          
		          .attr("width", width)
			      .attr("height", height)
				  .style("background-color","#DCDCDC")
				  .append("g")
                  .attr("transform", "translate(" + padding.left + "," + padding.top + ")");
				  
    var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
	
	//space between rectangles
	var rectPadding = 4;
	

	//x scale
	var xScale = d3.scale.linear()
		.domain([0,23000])
		.range([0, width - padding.left - padding.right-50]);
	var xValue = function(d) { return d.Event;};
	var xMap = function(d) { return xScale(xValue(d));};

	//y scale
	var yScale = d3.scale.linear()
		.domain([0,220000])
		.range([height - padding.top - padding.bottom, 0]);
	var yValue = function(d) { return d.Kill_Wound;};
	var yMap = function(d) { return yScale(yValue(d));};

	//define x axis
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

		
	//define y axis
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");

    var cValue = function(d) { return d.Region;},
    color = d3.scale.category10();		
	
	//add x axis
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
		.call(xAxis)
		.selectAll("text")
		.style("font-size", "14px")
		.attr("y", 8)
		.attr("x", 10)
		.attr("transform", "rotate(25)"); 
		
	//add y axis
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.call(yAxis)
		.selectAll("text")
		.style("font-size", "14px")
		.attr("transform", "rotate(-25)"); 
		;
		
	//add x axis label
    svg.append("text")
	    .attr("x",460)
        .attr("y",770)
        .text("Event Number")
	    .style("font-size", "18px")
	    ;	
		
	//add y axis label
    svg.append("text")
	    .attr("dx",-450)
        .attr("dy",-25)
        .text("Death & Injury Number by Countries")
		.attr("class","MyRect")
	    .attr('transform', 'rotate(270)')
	    .style("font-size", "18px")
	    ; 	

// load data
d3.csv("Event_Affected.csv", function(error, data) {

  // change string (from CSV) into number format
  data.forEach(function(d) {
    d.Region = d.Region;
	d.Country = d.Country;
    d.Event = +d.Event;
	d.Kill_Wound = +d.Kill_Wound
  });
   svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 8)
      .attr("cx", 600)
      .attr("cy", 400)
      .transition()
      .duration(1000)	  
	  .attr("r", 4.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
	  .attr("transform","translate(" + 50 + "," + 20 + ")")
      .style("fill", function(d) { return color(cValue(d));})
	  
	svg.selectAll(".dot")
      .on("mouseover", function(d) {
          tooltip
               .style("opacity", .9);
          tooltip.html(d.Country + "<br/> Event: " + xValue(d) 
	        + ",<br/>  Deaths & Injuries: " + yValue(d))
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(700)
               .style("opacity", 0);
      });
   
  // Draw regression line with calculated slope and intercept 
  var line = svg.append("line")
          .attr("x1", 600)
          .attr("y1", 400)
          .attr("x2", 601)
          .attr("y2", 401)           	  
          .transition()
		  .delay(1000)	
          .duration(1000)
          .attr("x1", xScale(0))
          .attr("y1", yScale(-974.7))
          .attr("x2", xScale(23000))
          .attr("y2", yScale(144845.3))
          .style("stroke", "red")
          .style("stroke-width", "4")
          .attr("transform","translate(" + 50 + "," + 20 + ")") 		  


  // draw legend	  
  var legend = svg.selectAll(".legend")
      .data(color.domain())
      .enter()
	  .append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(-780," + i * 20 + ")"; });

  legend.append("circle")
      .attr("cx", width - 300)
	  .attr("cy", 10)
      .attr("r", 9)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width-280)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text(function(d) { return d;})
  
})	
}