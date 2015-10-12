var Node = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

var DoublyLinkedList = function(){
	this.length = 0;
	this.head = new Node(null);
	this.tail = new Node(null);
};	

DoublyLinkedList.prototype.append = function(value) {
	var node = new Node(value);
	if (this.length === 0) {
		this.head = node;
		this.tail = node;
	}
	else{
		this.tail.right = node;
		node.left = this.tail;
		this.tail = node;
	}
	this.length++;
	return this;
};

DoublyLinkedList.prototype.insertBefore = function(value) {
	var node = new Node(value);
	if (this.length === 0) {
		this.head = node;
		this.tail = node;
	}
	else{
		this.head.left = node;
		node.right = this.head;
		this.head = node;
	}
	this.length++;
};

DoublyLinkedList.prototype.deleteAt = function(index) {
	var node = this.at(index);
	this.remove(node);
	return this;
}

DoublyLinkedList.prototype.find = function(value) {
	var node = this.head;
	while (node != null  ){
		if(node.value == value)
			break;
		node = node.right;
	}
	if (node != null && node.value == value)
		return node;
};

DoublyLinkedList.prototype.at = function(index) {
	if(length == 0)
		return null;
	if (index >= 0 && index < this.length) {
		var node = this.head;
		for (var i = 0; i < index; i++) {
			node = node.right;
		};
		return node;
	}
	else{
		throw "Index out of range."
	}
};

DoublyLinkedList.prototype.insertAt = function(index, value) {
	var nodeToInsert = new Node(value);
	if (index == this.length) {
		this.tail.right = nodeToInsert;
		nodeToInsert.left = this.tail;
		this.tail = nodeToInsert;
 	}
 	else {
		var node = this.at(index);
		if (node == null) {
			this.head = node;
			this.tail = node;
		}
		else 
		 	if (node.left == null) {
		       this.head = nodeToInsert;
		       this.head.right = node;
		       node.left = this.head;
		   	}
			else {
				node.left.right = nodeToInsert;
				nodeToInsert.left = node.left;
				node.left = nodeToInsert;
				nodeToInsert.right = node;
			}
	}
   	this.length++;
   	return this;
}


DoublyLinkedList.prototype.remove = function(node) {
	if(node == null)
		throw Exception;
	if(this.length > 0){
		if (node == this.head && node == this.tail){
			length = 0;
			this.head = null;
			this.tail = null;
		}
		else
	 	if (node.left == null)
	       this.head = node.right;
		else
		   node.left.right = node.right;
		if (node.right == null)
		   this.tail = node.left;
		else
	       node.right.left = node.left;
	   	this.length--;
	   	return this;
   }
};

DoublyLinkedList.prototype.reverse = function() {
	var start = this.head;
	this.tail = this.head;
	var temp = null;
	while (start != null){
		temp = start.right;
		start.right = start.left;
		start.left = temp;
		if (start.left == null)
			this.head = start;
		start = start.left;
	}
}

DoublyLinkedList.prototype.each = function(func) {
	var item = this.head;
	while(item != null){
		func(item);
		item = item.right;
	}
	return this;
}

DoublyLinkedList.prototype.indexOf = function(item) {
	var temp = this.head;
	var index = 0;
	while(temp != null){
		if (item == temp)
			return index;
		temp = temp.right;
		index++;
	}
	return -1;
}

var list = new DoublyLinkedList();

var node = list.append(5).append(10).append(15).insertAt(2, 20).append(25).deleteAt(0).at(1); //should be 20 (10 20 15 25)
console.log(node);
console.log(list.indexOf(node)); // 1
list.reverse();
console.log(list);
