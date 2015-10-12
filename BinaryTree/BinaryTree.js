var BinaryTree = function(){
  this.node = new Node(null);
};

var Node = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
  this.prev = null;
};


BinaryTree.prototype.add = function(value){
	var addValue = function(value, node){
		 if (!node.value) {
		 	node.value = value;
		 	return;
		}
		
		if (value <= node.value) {
			if (!node.left) {
	  			node.left = new Node(null);
	  			node.left.prev = node;
	  		}
	  		addValue(value, node.left);
		};
		if (value > node.value) {
			if (!node.right) {
				node.right = new Node(null);
				node.right.prev = node;
			}
	  		addValue(value, node.right);
		};
	};

	addValue(value, this.node);
};

var min = function(root){
	if (root)
      min(root.left)
 	return root;
}

BinaryTree.prototype.delete = function(value){
	var deleteFunc = function(value, node){
		if (!node) 
			return node;
		if (value < node.value) {
			node.left = deleteFunc(value, node.left);
		} else if (value > node.value) {
			node.right = deleteFunc(value, node.right);
		} else if (node.left && node.right) {
			node.value = min(node.right).value;
			node.right = deleteFunc(node, node.right.value);
		} else{
			if (node.left) {
				node = node.left;
			} else{
				node = node.right;
			};
		};
		return node;
	}
	deleteFunc(value, this.node);
}

var ExtendedTree = function(){
	BinaryTree.apply(this, arguments);
}

var Temp = function(){}
Temp.prototype = BinaryTree.prototype;
ExtendedTree.prototype = new Temp();

ExtendedTree.prototype.delete = function(value, node) {
	console.log("Extended delete");
};

ExtendedTree.prototype.findNode = function(valueToFind) {
	var node = null;
	var find = function(root, value){
	   	if (root.left){
	      find(root.left, value);
	  	}

	      if(root.value == value){
	      	node = root;
	      }
	      if (root.right){
	      	find(root.right, value);
	      }
  	}
	find(this.node, valueToFind);
	return node;
};

var tree = new BinaryTree();
tree.add(5);
tree.add(10);
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(8);
tree.add(12);
tree.delete(3);
console.log(tree.node);

var tree = new ExtendedTree();
tree.add(5);
tree.add(10);
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(8);
tree.add(12);
tree.delete(3);
console.log(tree.node);
var node = tree.findNode(10);
console.log(node);

