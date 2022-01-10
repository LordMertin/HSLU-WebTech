$(document).ready(function(){
	$('#submitWeather').click(function(){
		var city = $("#city").val();
		if (city != ''){
			$.ajax({
				url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=8342e30f1d7d2142a9e26039fbc4532d",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);
					$("#show").html(widget);
					$("#city").val('');
				}
			});
		}else{
			$("#error").html('Field cannot be empty');
		}
	});
});

function show(data) {
	return "<h3><strong>Wetter in " + data.name + ", " + data.sys.country + ": </strong></h3>" +
            "<p>Temperatur: " + data.main.temp + "°C</p>" +
            "<p>Luftfeuchtigkeit: " + data.main.humidity + "%</p>" +
            "<p>Windstärke: " + data.wind.speed + "m/s</p>"
 
}