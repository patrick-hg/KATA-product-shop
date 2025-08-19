import { use } from "react";

const addTraditional = function(a, b) {
    return a + b;
}


const add = (a,b) => a + b;


console.log('in the main function');
console.log('addTraditional returns: ', addTraditional(1, 2));
console.log('arrow function returns: ', add(1,2));



function sum(firstArg, ...otherArgs) {
    return firstArg + otherArgs.sum();
}

function myConcat(firstWord, ...otherWords) {
    let phrase = firstWord;
    otherWords.forEach(word => {
        phrase += word
    });
    return phrase;
}

const phrase = myConcat("Orange", "Apple", "Banana");

console.log(phrase);



var something = [];
function append(stuff) {
    something = [...something, stuff];
    console.log("end of append, something contain:", something);
}

append("first");
append("second");
append("third");


console.log("[] String, Template literals, String interpolation===========");
const user = {
    name: 'Marcus MARTIN',
    age: 29,
    city: 'Miami'
};
const userInformation = `
#############################
# User Information:         
#- Name: ${user.name}       
#- Age: ${user.age}
#- Salary: ${50 + 5}K
#- City: ${user.city}
#############################
`;
console.log(userInformation);

console.log("[] Array Manipulation===============");
const todos = [
    { id: 1, task: "Learn JavaScript", completed: false},
    { id: 2, task: "Practice React", completed: true},
    { id: 3, task: "Build a project", completed: false}
];

function printTodos() {
    console.log('Todos:', todos.join(','));
}

const todoById = todos.find((todo) => todo.id === 2);
console.log("Find todo with id is 2: ", todoById);
console.log("Find todo 'Build a project'", todos.find(todo => todo.task === 'Build a project'));

console.log("Filter todo completed (returns new array), new array length ", 
    todos.filter(todo => todo.completed).length);
console.log("Filter todo not completed, new array length ", 
    todos.filter(todo => !todo.completed).length);

console.log('manipulations with forach()');
console.log('change todos to completed', todos.forEach(todo => {
    todo.completed = true
}));

printTodos();

console.log("[] ArrayMap Manipulation===============");
const todosWithPriority = todos.map(todo => {
    return {...todo, priority: 'High'}  // we use spread operator ...
});
console.log('todosWithPriority: ', todosWithPriority);