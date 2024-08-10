const Person = {
    fname: "Romany",
    lname: "Sefen",
    email: "tst@tst.com"
}

// will remove the email form the Person object and create newPerson object with other props 
const { email, ...newPerson } = Person;

console.log('personEmail  :::->>>', newPerson);