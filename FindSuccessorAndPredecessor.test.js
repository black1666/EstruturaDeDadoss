const AVLTree = require('./FindSuccessorAndPredecessor');

describe('AVL Tree - Encontrar sucessor e predecessor', () => {
  let tree;
  let root;

  beforeEach(() => {
    tree = new AVLTree();
    root = null;
  });

  test('Deve encontrar o sucessor de um valor na árvore', () => {
    root = tree.insert(root, 20);
    root = tree.insert(root, 8);
    root = tree.insert(root, 22);
    root = tree.insert(root, 4);
    root = tree.insert(root, 12);
    root = tree.insert(root, 10);
    root = tree.insert(root, 14);

    expect(tree.findSuccessor(root, 8)).toBe(10);
    expect(tree.findSuccessor(root, 10)).toBe(12);
    expect(tree.findSuccessor(root, 14)).toBe(20);
  });

  test('Deve retornar null quando não houver sucessor', () => {
    root = tree.insert(root, 20);
    root = tree.insert(root, 8);
    root = tree.insert(root, 22);

    expect(tree.findSuccessor(root, 22)).toBeNull();
  });

  test('Deve encontrar o predecessor de um valor na árvore', () => {
    root = tree.insert(root, 20);
    root = tree.insert(root, 8);
    root = tree.insert(root, 22);
    root = tree.insert(root, 4);
    root = tree.insert(root, 12);
    root = tree.insert(root, 10);
    root = tree.insert(root, 14);

    expect(tree.findPredecessor(root, 20)).toBe(14);
    expect(tree.findPredecessor(root, 14)).toBe(12);
    expect(tree.findPredecessor(root, 10)).toBe(8);
  });

  test('Deve retornar null quando não houver predecessor', () => {
    root = tree.insert(root, 20);
    root = tree.insert(root, 8);
    root = tree.insert(root, 22);

    expect(tree.findPredecessor(root, 8)).toBeNull();
  });
});
