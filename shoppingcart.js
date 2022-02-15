// Tim Daniels 

// bestellen

function bestellen(thisForm) {
	productInfo = 
	thisForm.id.value + '|' +
	thisForm.merk.value + '|' +
	thisForm.model.value + '|' +
	thisForm.geheugen.value + '|' +
	thisForm.prijs.value + '|' +
	thisForm.aantal.value;
	
	maakCookie(thisForm.id.value, productInfo,1); 
		notice = thisForm.aantal.value + ' ' +
		thisForm.merk.value + ' in winkelwagen.';
		alert(notice);
		}
	
//  cartWeergeven

function cartWeergeven() {
	tabelrij = '';
	for(i=0; i<=6; i++) {
		dezeCookie = leesCookie(i);
		if(dezeCookie == null || dezeCookie == 'niet-gevonden')
		{continue;}
		velden = new Array();
		velden = dezeCookie.split('|');
		velden[6] = velden[4] * velden[5];  
		tabelrij += '<tr>' +
		'<td>' + velden[0] + '</td>' +
		'<td>' + velden[1] + '</td>' +
		'<td>' + velden[2] + '</td>' +
		'<td>' + velden[3] + '</td>' +
		'<td>' + "€ " + velden[4] + '</td>' +
		'<td>' + velden[5] + '</td>' +
		'<td>' + "€ " + velden[6].toFixed(2)+ '</td>' +
		'<td>' + '<a href="managecart.html" onclick="verwijderCookie(' + velden[0] + ')"><img src="images/delete.jpg"></a></td>' +
		'<tr>';
		}
		document.write(tabelrij);
	}
	// alle cookies verwijderen
function verwijderAlleCookies() {
   for (var i = 0; i <= 6; i++) {
        verwijderCookie(i);
		document.location.reload();
    }
}
// 1 cookie verwijderen
function verwijderCookie(i) {
    var datum = new Date();
    datum.setTime(datum.getTime() - 1000000);
    var verloopdatum = '; expires=' + datum.toGMTString();
    document.cookie = i + '=' + verloopdatum +';path=/';
}
	
	
	