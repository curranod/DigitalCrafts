class ShoppingLists {
    constructor(store) {
    this.store = store
    this.list = []
    }
    addItem(item) {
        this.list.push(item)
    }

}
while(true) {
    let choice = prompt("press 1 to create a new list,  x to quit")
    
    if(choice == '1') {
        let store = prompt("which store would you like to go to")
        let newList = new ShoppingLists(store)
        while(true) {
            let usrInput = prompt("enter the items you would like to add, 2 to view your lists, or q to finish your list")
            if(usrInput == 'q') {
                break
            }else if(usrInput == '2') {
                for(let index = 0; index < newList.list.length; index++) {
                    console.log(newList.list[index])
            }} 
            else {
        newList.addItem(usrInput)
            }
        }
    }
    else if(choice == 'x') {
        break
    }
}