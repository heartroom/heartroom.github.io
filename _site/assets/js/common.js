$(function(){ 
	$.getJSON("/assets/data/quote.json", function (data) {
		//console.log(data);
		if (data && data.length) {
			var index = Math.round(Math.random() * (data.length - 1));
			var content = data[index]["Content"];
			if (data[index]["Author"] && data[index]["Author"] != '佚名') {
				content += "&nbsp;&nbsp;--&nbsp;" + data[index]["Author"];
			}
			$("#sub").html(content);
		}
    });
}); 