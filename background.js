
var thebar = document.createElement("div");
thebar.setAttribute("style","position: fixed; width: 100%; top:0; right:0; left:0; z-index: 9999999999; background-color: #fff; font-family: Helvetica, sans-serif; padding: 15px; font-size: 12pt; border-bottom: 5px #0274b3 solid;");

var logo = document.createElement("img");
logo.src = "http://ejanaox.com/asklinkedin/logo.png";
logo.setAttribute("style","display:inline-block; vertical-align: middle; width: 340px; height: 58px; ");

var form = document.createElement("form");
form.setAttribute("id","frm");
form.setAttribute("style","display:inline");

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name","message");
input.setAttribute("id","message");

var submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("id","sub");
submit.setAttribute("name","submit");

form.appendChild(input);
form.appendChild(submit);

thebar.appendChild(logo);
thebar.appendChild(form);

document.body.appendChild(thebar);

form.addEventListener("submit", function(e){

	e.preventDefault();
	var q = document.getElementById('message').value;
	var query = 'https://www.linkedin.com/vsearch/f?type=all&keywords=' + encodeURI(q);
	window.location.href = query;

});
