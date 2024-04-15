export class Node {
    #data
    #next
    constructor(data){
       this.#data = data
        this.#next = null
    }
    getData () {
        return this.#data
    }
}