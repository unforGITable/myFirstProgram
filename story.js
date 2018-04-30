console.log('start');
var firstName = prompt('What is your first name?');
console.log(firstName);
var lastName = prompt('What is your last name?');
var space = ' ';

var fullName = firstName + space + lastName;

var adjective = prompt('Please enter one adjective');
var verb = prompt('Please enter one verb');
var noun = prompt('Finally, please enter one noun');

var sentence;

if noun.length > 0 {

  alert('Thank you for giving us so much details about you. Plesae enjoy this short story of whimsy.'); 
  
  sentence = 'Hello';
  sentence += space + fullName;
  sentence += space + 'whenever you';
  sentence += space + verb;
  sentence += space +'you';
  sentence += space + adjective;
  sentence += space + 'like a';
  sentence += space + noun;
  Document.write(sentence);
}