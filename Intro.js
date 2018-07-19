function story(){
	d3.selectAll("svg").remove();
	d3.selectAll(".tooltip").remove();
	
	d3.select("body").append("div").attr("id", "txt").attr("class","essay").append("p").text("This project is to present the terrorist activities distribution (I.), torrorism development in the major affected countries(II.) and comparison of the affected people in torrorism event(III.). Please review this presentation with the buttons and their order.").style("font-family" , "'Arial Black', Gadget, sans-serif").style("font-size" , "18pt");
	
	d3.select("#txt").append("p").text("Most of the scene change, animation, chart presentation are implemented by d3.js.v3 (approved by Prof. Hart in Piazza). All libraries are from d3js.org. All js files are written by the author and linked to the index.html. There is external library usage for this project except those from d3.js. There is also css and html method to make the visualization more effective. Please please click the button couple times to see precise visualization. Most of the issue are due to the browser response. Some points in scene III overlap with axis, this is because the radius of the points is 3.5px from the point center. Also, please allow sufficient width for all the major buttons in a line OR adjust webpage zoom to 75-85%.").style("font-family" , "'Arial Black', Gadget, sans-serif").style("font-size" , "18pt");
	d3.select("#txt").append("p").text("Please use Chrome inspect to check the code: right click any blank area of the webpage and click inspect, Ctrl+P, you'll see all the .js file called in this visualization. Thanks.").style("font-family" , "'Arial Black', Gadget, sans-serif").style("font-size" , "18pt");
	d3.select("#txt").append("p").text("-haot3@illinois.edu").style("font-family" , "'Arial Black', Gadget, sans-serif").style("font-size" , "18pt");
	d3.select("#txt").append("p").attr("class", "pp").text("Rubric: ");
	d3.select("#txt").append("p").attr("class", "pp").text("1) Does the Darrative visualization correctly follow the hybrid structure as stated by the essay?");
	d3.select("#txt").append("p").attr("class", "pp").text("* Yes. This data visualization is following Interactive Slideshow hybrid structure if you didn't start from this introduction page. The other slides (I-II-III) form the presentation and all of them provide interaction to help reader process drill-down to presentation detail.");
	d3.select("#txt").append("p").attr("class", "pp").text("* If you start from this introduction page, the presentation will be more close to Martini Glass structure because this introduction provide most of the author-driven content.");
	d3.select("#txt").append("p").attr("class", "pp").text("2) Does the narrative visualization effectively utilize scenes?");
	d3.select("#txt").append("p").attr("class", "pp").text("* Yes. The visualization utilize slide show layout. The three major scenes (accessed by the buttons I. II. III.) follow the orientation of this visualization at the top of this essay. They are with consistent visual structure: stroke, color, shadow. The Scenes II provides seven sub-scenes for development of top 7 affected countries. Sometimes you may need to click couple times on the country button to show the bar chart and animation due to browser's response.");
    d3.select("#txt").append("p").attr("class", "pp").text("3) Does the narrative visualization effectively utilize annotations?");
	d3.select("#txt").append("p").attr("class", "pp").text("* Yes. The anotation of specific (Orange) color and country name in Scene I help to clarify the seven major affected countries' distribution in the world map. They are different from other countries' visualization (yellow color). And when reader click these highlighted countries, the scence will show up notice in the middle of the map to guide reader to the next scene. All annotation in scence I. will disappear after reader leave this scene because the next scene is presenting different content. Annotation to scene II. event and scene III. are with same template: red boarder and red font.");
    d3.select("#txt").append("p").attr("class", "pp").text("e.g. ");	
	d3.select("#txt").append("p").attr("class", "pp").text("* The anotations in scene II. show up when reader hover the mouse on the bars. The red color annotation notify reader to pay attention to the timing and event that profoundly influence the terrorism development in the country. All annotation in scence II. or its sub-scenes will disappear after reader leave this scene because the next scene is presenting different content. ");
	d3.select("#txt").append("p").attr("class", "pp").text("e.g. If reader click 'II. Terrorist Development in Major Affected Countries', she/he will see the first chart for Iraq. When she/he move the mouse on top of the bar, such as the bar for 2014, the bar will become red and there will be a annotation of the hallmark event: 2003 US start invation to IRAQ showing up on the top left corner.").style("color","red");
	d3.select("#txt").append("p").attr("class", "pp").text("* The anotations in scene III. show up when reader hover the mouse on the scatter plot. Also the legend and plot color provide the country area reference.");
	d3.select("#txt").append("p").attr("class", "pp").text("e.g. If reader hover the mouse on the top right brown point, she/he will see 'Iraq  Event : 22130, Deaths & Injuries : 200519'. And when reader move house out of the point, the annotation will fade away in 700 ms.").style("color","red");
	d3.select("#txt").append("p").attr("class", "pp").text("4) Does the narrative visualization effectively utilize parameters?");
    d3.select("#txt").append("p").attr("class", "pp").text("* Yes. The button order on the major scene are the parameters for this data visualization. Major parameter in scene I. is geographical position and country names of major affected countries. In scene II., the Death Number and its bar's position/length are the parameters to trigger color animation and annotation pop-up. In scene III., the parameter of plot's position in the chart are also parameter to trigger the detail of the country. ");
	d3.select("#txt").append("p").attr("class", "pp").text("5) Does the narrative visualization effectively utilize triggers?");
	d3.select("#txt").append("p").attr("class", "pp").text("* Yes. First of all, click the buttons on top of all charts/essay can guide reader to different scene and reader are free to travel between scenes.");
	d3.select("#txt").append("p").attr("class", "pp").text("* In scene I., reader can hover their mouse on all countries to trigger the country name. The orange countries with red enlarged country name are the major affected countries and other countries will be presented with yello color. This arrangement applies position and hue to effectively present all countries as nominal data. If reader click the orange countries, a notice 'Please check scene II' will show up and notify reader to go to scene II for next presentation. If reader find difficulty in point the mouse to certain country, she/he can zoom in the map with mouse scroll wheel. Please make sure you use scroll wheel after the webpage is loaded and roll it when mouse is on certain country, which is confined by browser's response." );
	d3.select("#txt").append("p").attr("class", "pp").text("* In scene II., the scene button will trigger bar chart growth with corresponding coordinate to show death number trend versus year. The scene II. button also trigger sub-scene of the seven major affected country's bar charts and reader can change chart by clicking these button. Reader can hover their mouse on all the bars and trigger the color animation and annotation animation. For each country, the triggered annotation (red boarder and font) shows the country's major event that profoundly influence the terrorism development. The red color change of the bars from mouse hover renders the data trend after the event. Data/bar before the event will be yellow when mouse hover on it. After mouse are away from the bar, all animation will disappear. ");
	d3.select("#txt").append("p").attr("class", "pp").text("e.g. If reader move to any bar for the year after 2003 in Iraq chart, they all become red and then fade away after mouse moves out. The bar before 2003 will become yellow when hovering, which means it's NOT related to hallmark event directly. Reader can see there is only one exception of all these country: India. India doesn't have hallmark event so all it's bars will become yellow when reader move house on it.").style("color","red");
	d3.select("#txt").append("p").attr("class", "pp").text("* In scene III., the scene III. button will trigger the scatter plot growth animation and regression line pop-up animation. Reader can hover the mouse on top of the plot to trigger annotation of countries' detail. Both the points and regression line expends from the middle of the chart but not their centroid which apply prospective method to emphasize the spread of country and status of regression line as the median reference of the all countries' data. Also, mouse hover on the plot will trigger annotation to the country's detail.");
	
    d3.select("#txt").append("p").attr("class","essay").append("p").text("Summary of the visualization investigation:").style("font-family" , "'Arial Black', Gadget, sans-serif").style("font-size" , "18pt");
	d3.select("#txt").append("p").attr("class", "pp").text("In scence I., we can see most of major affected countries are in Middle-east, South Asia except US and Nigeria.");
	d3.select("#txt").append("p").attr("class", "pp").text("In scence II., interestingly, the hallmark event are connected by certain relation (There is no specific event to India). In 2001, 911 happens in the US. US trigger invation to Afghanistan just after 911 in the name of beating Al-Qaeda. And the remnants of Al-Qaeda enter Pakistan and bring a lot of terrorist activities. Two years later, US starts invation to Iraq, which overthrew the Iraq government and a lot of Iraq soldier lost their job. These people become ISIL member and stay around the boundary between Iraq and Syria. As ISIL grow, Boko Haram pledged allegiance to ISIL and received financial aid from ISIL. In 2011, Syria civil war started because the Syria government and army lost most of their power in the war to ISIL. All these events are more or less related to 911 or Osama Bin Laden, who used to be ally of US to beat Soviet Union.");
	d3.select("#txt").append("p").attr("class", "pp").text("In scence III., we can see most of countries are below the reference line. That is, the ratio between Deaths/Injuries and Event is lower than the reference line and the ratio is apparently high in certain countries, e.g. Iraq, Afghanistan, Nigeria, US. All these countries belong to the concerned countries in this visualization."); 
	d3.select("#txt").append("p").attr("class", "pp").text("Again, we may want to emphasize on the major affected contries because they have most death number, they have hallmark events and they also have higher deaths/injuries number in each event.");
	
}
