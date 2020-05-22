class Trolley{
    constructor(){
        this.itemList = [" "]
        this.total = 0
    }
    addToTrolley = (itemName, itemPrice) => {
        this.itemList.push(itemName)
        this.total += itemPrice
        console.log(this.itemList)
        console.log(this.total)
    }

}
export default Trolley;