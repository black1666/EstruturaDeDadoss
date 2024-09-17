const AVLTree = require('./BinarySearchTree');

describe('AVL Tree - Encontrar maior e menor valor', () => {
  let tree;
  let root;

  beforeEach(() => {
    tree = new AVLTree();
    root = null;
  });

  test('Deve encontrar o menor valor na árvore', () => {
    root = tree.insert(root, 50);
    root = tree.insert(root, 30);
    root = tree.insert(root, 70);
    root = tree.insert(root, 20);
    root = tree.insert(root, 40);
    root = tree.insert(root, 60);
    root = tree.insert(root, 80);

    const min = tree.findMin(root);
    expect(min).toBe(20);
  });

  test('Deve encontrar o maior valor na árvore', () => {
    root = tree.insert(root, 50);
    root = tree.insert(root, 30);
    root = tree.insert(root, 70);
    root = tree.insert(root, 20);
    root = tree.insert(root, 40);
    root = tree.insert(root, 60);
    root = tree.insert(root, 80);

    const max = tree.findMax(root);
    expect(max).toBe(80);
  });

  test('Deve retornar null para min e max em uma árvore vazia', () => {
    const min = tree.findMin(root);
    const max = tree.findMax(root);

    expect(min).toBeNull();
    expect(max).toBeNull();
  });

  test('Deve encontrar o único valor quando há apenas um nó', () => {
    root = tree.insert(root, 42);

    const min = tree.findMin(root);
    const max = tree.findMax(root);

    expect(min).toBe(42);
    expect(max).toBe(42);
  });
});
