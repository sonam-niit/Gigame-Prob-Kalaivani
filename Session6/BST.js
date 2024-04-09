class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(key){
        const newNode=new Node(key);
        if(this.root==null){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.key<node.key){
            if(node.left===null){
                node.left=newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
}

const myBST= new BinarySearchTree();
const arr=[8,3,10,1,6,14,4,7,13];
for(let i of arr){
    myBST.insert(i);
}
console.log(myBST);