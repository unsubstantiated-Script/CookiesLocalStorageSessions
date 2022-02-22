console.log("howdy!");

//Local Storage
localStorage.setItem("name", "Bobz");
//localStorage.removeItem("name")
console.log(localStorage.getItem("name"));

//Session Storage
sessionStorage.setItem("name", "Sesshy");
//sessionStorage.removeItem("name")
console.log(sessionStorage.getItem("name"));

//Cookies aren't fun...

document.cookie =
	"name=CookieMonster; expires=" + new Date(2022, 02, 25).toUTCString();

//Adding a new cookie is as simple as
document.cookie =
	"otherName=Grover; expires=" + new Date(2022, 02, 25).toUTCString();

//View
console.log(document.cookie);
