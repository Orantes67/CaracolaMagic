import { Node } from "./Node.mjs"

export class LinkedList {
    #count
    #head
    constructor() {
        this.#head = null;
        this.#count = 0
    }

    insert(item, index) {
        const node = new Node(item)
        if (index == 0) {
            node.next = this.#head;
            this.#head = node;
        } else {
            let current = this.#head;
            let currentPosition = 0;
            while (currentPosition < index - 1 && current !== null&&current.next !== null) {
                current = current.next;
                currentPosition++;
            }
           
            if (current !== null) {
                if (current.next !== null) {
                    node.next = current.next;
                }
                current.next = node;
            } else {
              
            }
        }
    }
    removeAt(index) {
        if (index < 0) {
       
            return null;

        }
        let removedNode = null;
        if (index === 0) {
            if (this.#head !== null) {
                removedNode = this.#head;
                this.#head = this.#head.next;
                return removedNode;
            } else {
               
            }
            return null;
        }

        let current = this.#head;
        let currentIndex = 0;

        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }

        if (current === null || current.next === null) {
            return null;
        }

        removedNode = current.next;
        current.next = current.next.next;
        return removedNode;
    }

    
push(item) {
    const node = new Node(item)
    if (!this.#head) {
        this.#head = node;
    } else {
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.#count++
}

getItem(index) {
    if (index < 0 || index >= this.size()) {
        console.log("Out of range");
        return -1;
    }
    let currentIndex = 0;
    let currentNode = this.#head;

    while (currentIndex < index) {
        currentNode = currentNode.next
        currentIndex++;
    }

    return currentNode.getData();
}



swap(x, y) {
    let current = this.#head;
    if (!current) return;
        if (current.getData() === x) {
            current.data = y;
        } else if (current.getData() === y) {
            current.data = x;
        }
        current = current.next;
  
}

    peek() {
        if (!this.isEmpty()) {
            return this.#head;
        } else {
            return null;
        }
    }
    isEmpty(){
        return this.#head === null
    }
    size(){
        return this.#count
    }

}
