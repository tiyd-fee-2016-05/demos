// This example is a function using if/else control flow.

function helloWorld(lang){
	if (lang === "es"){
		console.log("hola");
	}
	else if (lang === "de"){
		console.log("guten morgen");
	}
	else if (lang === "en"){
		console.log("hello");
	}
	else {
		console.log("that's not a recognized command");
	}
}

helloWorld("de");
// // => "guten morgen"


// This example is a function using a switch statement.

function helloWorldSwitch(lang){
	switch(lang){
		case "es":
			console.log("hola");
			break;

		case "de":
			console.log("guten morgen");
			break;

		case "en":
			console.log("hello");
			break;

		default:
			console.log("that's not a recognized command");
	}
}

helloWorldSwitch("en");
// => "hello"
