function simpleEncode (string, k) {
	var enc = "";
	var str = "";

	str = string.toString();
	for (var i = 0; i < str.length ; i++) {
		var a = str.charCodeAt(i);
		var b = a ^ k;
		enc = enc + String.fromCharCode(b);
	}
	return enc;
}

console.log(simpleEncode("Use this command to have another user attempt to suck ben's dick.", "40"));
