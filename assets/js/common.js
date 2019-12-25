$(function(){ 
	$.getJSON("/assets/data/quote.json", function (data) {
		console.log(data);
		if (data && data.length) {
			var index = Math.round(Math.random() * (data.length - 1));
			console.log(data[index]["Content"]);
			$("#sub").html(data[index]["Content"] + "by &nbsp;&nbsp;" + data[index]["Author"]);
		}
    });
}); 