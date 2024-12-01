console.log("Скрипт подключен!")
document.write("Скрипт подключен!");

let age = "17";
let name = "Мика";
let message = `Здравствуйте, ${name}! Вам ${age} лет.`;
console.log(message); 
document.write(message);

//let age = "17";
if (age >= 18) {
    console.log("Доступ разрешён");
} else if (age <= 17) {
    console.log("Доступ запрещён");
}

let films = ["Титаник", "Логан", "Человек-паук"];
console.log(films[0]);
console.log(films[1]);
console.log(films[2]);

function greet(name) {
    console.log("Зравствуйте,"+name+"!")
}
greet("Мика")
greet("Александр")