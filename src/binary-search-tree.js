const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootOftree = null;
    }

  root() {
    return this.rootOftree
  }

   add(data) {
    this.rootOftree = addWithin(this.rootOftree, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
   

    function searchWithin(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (node.data < data) {
        return searchWithin(node.right, data)
      } else {
        return searchWithin(node.left, data)
      }
    }
    return searchWithin(this.rootOftree, data)
  }

  find(data) {
    
    function findWithin(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }
      if (node.data < data) {
        return findWithin(node.right, data)
      } else {
        return findWithin(node.left, data)
      }
    }
    return findWithin(this.rootOftree, data)
  }

  remove(data) {
    this.rootOftree= removeWithin(this.rootOftree, data)
    function removeWithin(node, data) {
      if (!node) {
        return null
      }
      if (node.data < data) {
        node.right = removeWithin(node.right, data)
        return node;
      } else if (node.data > data) {
        node.left = removeWithin(node.left, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        let minFronRight = node.right
        while (minFronRight.left) {
          minFronRight = minFronRight.left
        }
        node.data = minFronRight.data

        node.right = removeWithin(node.right, minFronRight.data)
        return node
      }
    }
  }

  min() {

    if (!this.rootOftree) {
      return 
    }

    let node = this.rootOftree
    while (node.left) {
      node = node.left
    }
    return node.data
    
  }

  max() {
    if (!this.rootOftree) {
      return 
    }

    let node = this.rootOftree
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};