//1. Implemente o algoritmo de balanceamento de árvore AVL.

class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  class AVLTree {
    getHeight(node) {
      return node ? node.height : 0;
    }
  
    getBalanceFactor(node) {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    rotateRight(y) {
      const x = y.left;
      const T2 = x.right;
  
      // Perform rotation
      x.right = y;
      y.left = T2;
  
      // Update heights
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
  
      // Return new root
      return x;
    }
  
    rotateLeft(x) {
      const y = x.right;
      const T2 = y.left;
  
      // Perform rotation
      y.left = x;
      x.right = T2;
  
      // Update heights
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  
      // Return new root
      return y;
    }
  
    insert(node, key) {
      if (!node) return new Node(key);
  
      if (key < node.key) {
        node.left = this.insert(node.left, key);
      } else if (key > node.key) {
        node.right = this.insert(node.right, key);
      } else {
        return node; // Duplicates are not allowed
      }
  
      // Update height of this ancestor node
      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  
      // Get balance factor
      const balance = this.getBalanceFactor(node);
  
      // Balance the node
      if (balance > 1 && key < node.left.key) {
        return this.rotateRight(node);
      }
  
      if (balance < -1 && key > node.right.key) {
        return this.rotateLeft(node);
      }
  
      if (balance > 1 && key > node.left.key) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
  
      if (balance < -1 && key < node.right.key) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    minValueNode(node) {
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current;
    }
  
    delete(node, key) {
      if (!node) return node;
  
      if (key < node.key) {
        node.left = this.delete(node.left, key);
      } else if (key > node.key) {
        node.right = this.delete(node.right, key);
      } else {
        if (!node.left || !node.right) {
          const temp = node.left ? node.left : node.right;
          if (!temp) {
            node = null;
          } else {
            node = temp;
          }
        } else {
          const temp = this.minValueNode(node.right);
          node.key = temp.key;
          node.right = this.delete(node.right, temp.key);
        }
      }
  
      if (!node) return node;
  
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  
      const balance = this.getBalanceFactor(node);
  
      if (balance > 1 && this.getBalanceFactor(node.left) >= 0) {
        return this.rotateRight(node);
      }
  
      if (balance > 1 && this.getBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      }
  
      if (balance < -1 && this.getBalanceFactor(node.right) <= 0) {
        return this.rotateLeft(node);
      }
  
      if (balance < -1 && this.getBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    preOrder(node) {
      if (node) {
        console.log(node.key);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  }
  
  module.exports = AVLTree;
  