const load = (choice) => {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			jsonprint(obj, choice);
		}
	};
	request.open("GET", "staff.json", true);
	request.send();
};

const jsonprint = (obj, choice) => {
	var data,
		company = obj.company,
		letter = obj.letter,
		text = obj.text;
	console.log(choice);
	if (choice == "company") {
		data = "";
		for (let i = 0; i < company.length; i++) data += `Name: ${company[i].name}<br /> Age: ${company[i].age}<br /><br />`;
	} else if (choice == "letter") {
		data = "";
		for (let i = 0; i < letter.length; i++) data += `Name: ${letter[i].name}<br /> Age: ${letter[i].age}<br /><br />`;
	} else if (choice == "text") {
		data = "";
		for (let i = 0; i < text.length; i++) data += `Name: ${text[i].name}<br /> Age: ${text[i].age}<br /><br />`;
	} else data = "Nothing";
	document.getElementById("out").innerHTML = data;
};
