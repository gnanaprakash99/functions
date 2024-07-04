// Primitive string values

let firdtName = "Ajay";  //double quotes
let middleName = 'Prakash';  //single quotes
let lastName = `Gokul`;  //template literal 
let para = " Lorem ipsum dolor sit amet consectetur Adipisicing elit. Temporibus officiis Consequuntur eum natus "


console.log(firdtName.length);
console.log(middleName.charAt(2));
console.log(lastName.concat(' ', firdtName));
console.log(firdtName.includes("ay"));
console.log(lastName.includes("go"));
console.log(middleName.startsWith("pr"));
console.log(middleName.endsWith("aH"));
console.log(firdtName.indexOf("j"));
console.log(lastName.replace("Gokul","kiran"));
console.log(firdtName.repeat(3));
console.log(firdtName.slice(2));
console.log(middleName.slice(3));
console.log(para.split(' ', 4));
console.log(para.substring(5));
console.log(firdtName.toLocaleLowerCase());
console.log(firdtName.toUpperCase());


let paragraph = " Lorem ipsum dolor sit amet consectetur Adipisicing elit. Temporibus officiis Consequuntur eum natus "
let regex = /[A-Z]/g;
console.log(paragraph.match(regex));

let message =" Lorem ipsum dolor sit amet "
console.log(message.trim());  //reduce the space between text and the quotes


let msg ="this is the message\" for using this slash(\) to merge the quotes and the text"