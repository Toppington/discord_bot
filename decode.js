function simpleDecode (file, k) {
  var str = "";
	var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  {
    if (rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status === 0)
      {
        str = rawFile.responseText;
      }
    }
  }


	str = str.toString();
	for (var i = 0; i < str.length ; i++) {
		var a = str.charCodeAt(i);
		var b = a ^ k;
		enc = enc + String.fromCharCode(b);
	}
	return enc;
}

console.log(simpleDecode("file:///ben_command_encrypt_40.txt", "40"));
