function processFormData(downloadsvg){
	let heim = document.getElementById('heim').value;
	let mieter = document.getElementById('mieter').value;
	let datum = document.getElementById('datum').value;
	let betrag = document.getElementById('betrag').value;
	let format = document.getElementById('format').value;
	let url = 'https://qr-rechnung.net/#/b,de,SPC,0200,1,CH1409000000300055426,S,Verein%20Pfadfinderheime%20Schwyzerst%C3%A4rn,,,3000,Bern,CH,,,,,,,,' 
			+ betrag.replace(/\s/g, '') + ',CHF,,,,,,,,NON,,Heim%20'
			+ encodeURIComponent(heim) + '%20%2F%20'
			+ encodeURIComponent(mieter) + '%20%2F%20'
			+ encodeURIComponent(datum) + ',EPD,?cutlines='
			+ format;
	if(downloadsvg){
		url += '&op=downloadsvg';
	}
	//window.alert(url);
	window.open(url,'_blank');
}