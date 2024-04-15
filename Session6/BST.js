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
    delete(data){
        this.deleteNode(this.root,data)
    }
    deleteNode(node,data){
        if(node===null){
            return null; //nothing to delete
        }
        if(data<node.key){
            node.left=this.deleteNode(node.left,data);
            return node;
        }else if(data>node.key){
            node.right=this.deleteNode(node.right,data);
            return node;
        }else{
            //Node is detected for deletion
            //node is the leaf node
            if(node.left===null && node.right===null){
                node=null;
                return node;
            }
            //node is having one child
            if(node.left===null){
                node=node.right;
                return node;
            }else if(node.right===null){
                node=node.left;
                return node;
            }
            //Node is having both child
            const minRightNode=this.findMinNode(node.right);
            node.key=minRightNode.key;
            node.right=this.deleteNode(node.right,minRightNode.key);
            return node;
        }
    }
    findMinNode(node){
        while(node.left!==null){
            node=node.left;
        }
        return node;
    }
    inOrderTraversalToArray(){
        const result=[];
        this.inOrderTraversalToArrayRecursive(this.root,result);
        return result;
    }
    inOrderTraversalToArrayRecursive(node,result){
        if(node!=null){
            this.inOrderTraversalToArrayRecursive(node.left,result);
            result.push(node.key);
            this.inOrderTraversalToArrayRecursive(node.right,result);
        }
    }
}

const myBST= new BinarySearchTree();
const arr=[8,3,10,1,6,14,4,7,13];
for(let i of arr){
    myBST.insert(i);
}
console.log(myBST.inOrderTraversalToArray());