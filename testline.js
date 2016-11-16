function testline()
{
	var width = 800;
	var height = 500;
	var ctrl = d3.select("body").append("svg").attr("width", width).attr("height", height);
	d3.csv("http://latingliu.github.io/lalalala/typhoon.csv", 
		function(data)
		{
			var ln = data.length;
			console.log(data);
			var maxy = d3.max(data, function(d){ return d.number; });
			var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.number*(height/500)});
			ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
		}
	);
}
