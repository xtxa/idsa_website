var show2020 = function(event){
	var text = document.getElementById("about-text");
	if (text.classList.contains("hide") == true){
		text.style.height = "auto";
		text.classList.remove("hide");
	} else{
		text.style.height = 0;
		text.classList.add("hide");
	};
};