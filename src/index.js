const api_key = "sMs2lWfZHlYV86EtIL0bUfMEeSz8ywbP";
const find_btn = document.querySelector("body > section > form > div > button");
const input_ip = document.getElementById("ip");
const text_area = document.querySelector("#ip-info"); 
let state = false;

let get_ip_info = (url, ip, text_area) => {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			text_area.value = `continent: ${data.location.continent.name}\n`;
			text_area.value += `country: ${data.location.country.name}\n`;
			text_area.value += `capital: ${data.location.capital}\n`;
			text_area.value += `city: ${data.location.city}\n`;
			text_area.value += `ip: ${data.connection.ip}\n`;
			text_area.value += `ip_version: ${data.connection.ip_version}`;
			ip.value = "";
			if (!state) {
				text_area.value =
					"ip-information";
				state = true;
			}
		});
};

// ################################ event click ##################################### //

find_btn.addEventListener("click", () => {
	get_ip_info(
		`https://api.ip2loc.com/${api_key}/${ip.value}`, //url
		document.getElementById("ip"), //ip
		text_area //information ip
	);
});

// ################################ event keyup (ENTER) ##################################### //
document.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		get_ip_info(
			`https://api.ip2loc.com/${api_key}/${ip.value}`, //url
			document.getElementById("ip"), //ip
			text_area //information ip
		);
	}
});

// ################################ start page config ##################################### //
input_ip.value = "4.2.2.4";
find_btn.click();
input_ip.focus();
