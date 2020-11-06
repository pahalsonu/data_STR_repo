// doubly linked list

function LinkedList(){
    this.head = null;
    this.tail = null;
    }
    function Node(prev, value, next){
        this.prev = prev;
        this.value = value;
        this.next = next;
    };
    //add to head (insert head node);
    // insert a Head value of 22
    // insert a Head node value of 33
    LinkedList.prototype.addToHead = function(value) {
        let newNode = new Node(null,value, this.head);
        if(this.head){
            // if there is already a head node......
            this.head.prev = newNode;

        }else{
            // there us no Head Node 
            this.tail = newNode;
        }
        this.head = newNode
    }
const ll = new LinkedList();

ll.addToHead(11);

ll.addToHead(22);

ll.addToHead(33);
console.log(ll)