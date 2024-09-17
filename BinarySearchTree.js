//3. Métodos para encontrar o maior e o menor valor armazenado na árvore, explorando
//as propriedades de uma árvore de busca binária.

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
  
      // Rotacionar
      x.right = y;
      y.left = T2;
  
      // Atualizar alturas
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
  
      return x;
    }
  
    rotateLeft(x) {
      const y = x.right;
      const T2 = y.left;
  
      // Rotacionar
      y.left = x;
      x.right = T2;
  
      // Atualizar alturas
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  
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
  
      node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  
      const balance = this.getBalanceFactor(node);
  
      if (balance > 1 && key < node.left.key) return this.rotateRight(node);
  
      if (balance < -1 && key > node.right.key) return this.rotateLeft(node);
  
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
  
    findMin(node) {
      if (!node) return null;
  
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current.key;
    }
  
    findMax(node) {
      if (!node) return null;
  
      let current = node;
      while (current.right !== null) {
        current = current.right;
      }
      return current.key;
    }
  
    // Outros métodos omitidos para brevidade
  }
  
  module.exports = AVLTree;
  