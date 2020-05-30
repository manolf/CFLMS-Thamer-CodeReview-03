class Person{
	name;
	email;
	image;
	add_info;

	constructor(name,email,image,add_info){
		this.name = name;
		this.email = email;
		this.image=image;
		this.add_info=add_info;
	}
	/*
	checkLanguage(){
		pref_language = document.getElementById('language').value;

		return this.language == pref_language;
	}*/
}

//with language

//reason of definition of this.image like 'img\\fran.jpeg':
//severe problems with defining the source strings with escapecharacter \\

var person1 = new Person('Fran','fran@index.com','img\\fran.jpeg','Fran is the expert for leasing');
var person2 = new Person('Bill','bill@index.com','img\\bill.jpeg', 'Bill is your guy involving third-party assurances');
var person3 = new Person('Fritz','fritz@index.com','img\\fritz.jpeg', 'Fritz likes playing with cats and oldtimers');
var person4 = new Person('Laura', 'laura@index.com','img\\laura.jpeg', 'Laura is our bicycle expert');



//without additional content
/*
var person1 = new Person('Fran','fran@index.com','fran.jpeg');
var person2 = new Person('Bill','bill@index.com','bill.jpeg');
var person3 = new Person('Fritz','fritz@index.com','fritz.jpeg');
var person4 = new Person('Laura', 'laura@index.com','laura.jpeg');
*/

personArray = [person1, person2, person3, person4];

function listPerson(){
	//to empty the container
	document.getElementById('team').innerHTML = '';

	for (i=0; i < personArray.length; i++){

	document.getElementById('team').innerHTML += "<div class=\"persona\"><h1> "+ personArray[i].name + "</h1>"+ 
		 "<br> <img class=\"foto\" src=\"" + personArray[i].image + "\" alt=\"consultant\"> <br> <h3>" + personArray[i].email + 
		 "</h3><br>  <div class=\"content\"> <div class=\"text\">" + personArray[i].add_info + 
		 "</div> </div>";




		/*this is the html-block for showing hover on text
		<div class="persona">
			<h1>Fran</h1>
			<img class="foto" src="img\fran.jpeg" alt="consultant">
			<h3>fran@index.com</h3>
				<div class="content">
        			<div class="text">She is the expert of leasing</div>
      			</div>
		</div>



		 /*version working before playing aorund with add_content and hover
		document.getElementById('team').innerHTML += "<div class=\"persona\"><h1> "+ personArray[i].name + "</h1>"+ 
		 "<br> <img class=\"foto\" src=\"" + personArray[i].image + "\" alt=\"consultant\"> <br> <h3>" + personArray[i].email + "</h3><br>" + 
		 personArray[i].add_info + "</div>";

		 */

	} 
}


