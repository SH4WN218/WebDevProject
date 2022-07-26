const arr = ["Groceries", "Laundry"]
let input;
while (input !== "quit" && input !== "q") {
        input = prompt("What would you like to do?")
        if (input === "list")
        {
            console.log("********************")
              for(let i = 0; i < arr.length; i++)
                console.log(`${i}: ${arr[i]}`)
            console.log("********************")

        } 
        else if (input === "new" || input === "n") 
        {
                const newTodo = prompt("Add a new todo to the list");
                arr.push(newTodo);
                console.log(`${newTodo} added to the list`)
        }
        else if(input === "delete" || input === "d")
        {
            const index = parseInt(prompt("Enter an index to delete: "));
            if(!Number.isNaN(index))
            {
                const deleted = arr.splice(index,1);  
                console.log(`Deleted ${deleted[0]}`);
            }
            else
                console.log("Invalid Index")
        }
        else
            console.log("Invalid input.")
}
console.log("You quit the app!")