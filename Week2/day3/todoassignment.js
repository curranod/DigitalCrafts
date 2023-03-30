let tasks = [] 

while(true) {
  let choice = prompt('Enter 1 to add item, enter 2 to delete item, enter 3 to view all items, q to quit')

  if(choice == 'q') {
    break 
  }

  if(choice == '1') {
    let taskName = prompt('Enter task name: ')
    let taskPriority = prompt('Enter task priority: ')
    let task = {name: taskName, priority: taskPriority }
    tasks.push(task)
  }
  else if(choice == '2') {
    let deleteOption = prompt('Which todo list item would you like to delete: ')
    if (deleteOption >= 1 && deleteOption <= tasks.length) {
        const deletedItem = tasks.splice(deleteOption - 1, 1)[0];
        console.log(`Item "${deletedItem}" has been deleted.`);
      } else {
        console.log('Invalid index.');
      }
  }
  else if(choice == '3'){
    for(let index = 0; index  < tasks.length; index++) {
            console.log(tasks)
  }
}
}