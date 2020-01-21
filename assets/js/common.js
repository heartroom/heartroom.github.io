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

	function loadTopButton() {
		var scroH = $(document).scrollTop();  //滚动高度
		var node = $('#btnTop');
		if (scroH>100) {
			// console.log("需要显示了");
			if(!node.is(':visible')) {
				node.show("normal");
			}
		} else {
			// console.log("不需要显示了");
			if(node.is(':visible')) {
				node.hide("normal");
			}
		}
	}
	$(document).scroll(function() {
		loadTopButton();
    });
	
	loadTopButton();

	$("#btnTop").click(function(){
		scroll(0, 0);
	});
}); 