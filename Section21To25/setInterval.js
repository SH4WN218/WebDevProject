
// const id = setInterval(() => {  
//     console.log(Math.floor(Math.random() * 100) + 1)
// }, 1);

const person = {
    firstName: 'Rick',
    lastName: 'Sanchez',
    fullName: () => {
        return `${person.firstName} ${person.lastName}`;
    }, 
    fullNameA: function () {
        return `${this.firstName} ${this.lastName}`;
    }, 
    shoutName: () => {
        setTimeout(() => {
            console.log(`${person.firstName} ${person.lastName}`);
        }, 3000)
    }


}