const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  //корневой узел дерева
  root() {
    return this.tree;
  }

  //добавление узла с данными в дерево
  add(data) {
    
    function addPart(node, data) {
      if(!node) {
        return new Node(data);

      } else if(node.data == data) {
        return node;

      } else if(node.data > data) {
        node.left = addPart(node.left, data);

      } else {
        node.right = addPart(node.right, data);
      }
      return node;
    }
    this.tree = addPart(this.tree, data);
  }

  //проверка существования узла в дереве (true || false)
  has(data) {
    
    function hasTreeNode (node, data) {
      if(!node) {
        return false;

      } else if (node.data == data) {
        return true;

      } else if(data < node.data) {
        return hasTreeNode(node.left, data);

      } else {
        return hasTreeNode(node.right, data)
      }   
    }
    return hasTreeNode(this.tree, data);
  }
//поиск узла (начение || null)
  find(data) {
    
    function findTreeNode(node, data) {
      if(!node) {
        return null;

      } else if (node.data == data) {
        return node;

      } else if (node.data > data) {
        return findTreeNode(node.left, data);

      } else {
        return findTreeNode(node.right, data);
      }
    }
    return findTreeNode(this.tree, data);
  }
//удаление узла
  remove(data) {

    function removeTreeNode(node, data) {
      if(!node || (!node.left && !node.right)) {
        return null;
        
      } else if (node.data > data) {
        node.left = removeTreeNode(node.left, data);
        return node;

      } else if (node.data < data) {
        node.right = removeTreeNode(node.right, data);
        return node;

      } else {
        
        if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
  
        
        let maxLeft = node.left;
        while(maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
  
        node.left = removeTreeNode(node.left, maxLeft.data);
  
        return node;
      }
      
    }
    this.tree = removeTreeNode(this.tree, data);
  }
  
//минимальное значение в дереве || null
  min() {
    if (!this.tree) {
      return null;

    } else {
      let minNode = this.tree;
      while (minNode.left) {
        minNode = minNode.left;
      }
      return minNode.data;
    }
  }

  //максимальное значение || null
  max() {
    if (!this.tree) {
      return null;

    } else {
      let maxNode = this.tree;
      while (maxNode.right) {
        maxNode = maxNode.right;
      }
      return maxNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};