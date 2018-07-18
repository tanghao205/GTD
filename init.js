function init(){
	var svg = d3.select("svg")
	    .style("background-color","white")
        .attr("width", 1200)
        .attr("height", 720)
		.style("fill", "#ccc")
		.append("text")
		.text("Exploration to Global Terrorism")
		.attr("x",40)
		.attr("y",340)
		.style("font-family", "Courier New")
		.style("font-size", "45pt")
		.attr("fill","steelblue");


    var time = 0;		
	d3.select("#grobal")
        .on("click", function(d,i) {
			d3.select("#I").remove;
			d3.select("#buttons2").remove();
            map();
            time = 0;			
        })   
    d3.select("#bchart")
        .on("click", function(d,i) {
			d3.select("#I").remove;
            bar(time)
			time = 1;
        }) 
    d3.select("#scatterplot")
        .on("click", function(d,i) {			
			d3.select("#buttons2").remove();
			d3.select("#I").remove;
            scatter();
            time = 0;	
        })
    d3.select("#Intro")
        .on("click", function(d,i) {
			d3.select("#buttons2").remove();
            story();
            time = 0;	
        })  		
}