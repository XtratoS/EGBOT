class file{
	var fileText;
	constructor(dir){
		readFile(dir, 'utf-8' ,function(err, buf) {
			this.fileText=buf.toString();
		});
	}
	getText(){
		return this.fileText;
	}
	setText(txt){
		this.fileText = txt;
	}
	
}