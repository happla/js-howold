// elementin sisällön muokkaaminen
<body>
<p id="teksti">Javascript on mukavaa ja hauskaa!</p>

function func() {
	console.log(document.getElementById("teksti").innerHTML);

// Put your code here
	var tekstiElement = document.getElementById("teksti");
	if (tekstiElement) {
		tekstiElement.innerHTML = "JavaScript on helppoa ja hauskaa!";
	}
	else {
		return;
	}
	console.log(document.getElementById("teksti").innerHTML);
}

</body>