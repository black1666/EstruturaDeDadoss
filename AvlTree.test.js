const AVLTree = require('./AvlTree');

describe('AVL Tree', () => {
  let tree;
  let root;

  beforeEach(() => {
    tree = new AVLTree();
    root = null;
  });

  test('Deve inserir nós corretamente na AVL', () => {
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 30);

    expect(root.key).toBe(20);
    expect(root.left.key).toBe(10);
    expect(root.right.key).toBe(30);
  });

  test('Deve deletar um nó corretamente na AVL', () => {
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 30);
    root = tree.delete(root, 20);

    expect(root.key).toBe(30);
    expect(root.left.key).toBe(10);
  });

  test('Deve permanecer balanceada após várias inserções', () => {
    root = tree.insert(root, 10);
    root = tree.insert(root, 20);
    root = tree.insert(root, 30);
    root = tree.insert(root, 40);
    root = tree.insert(root, 50);
    root = tree.insert(root, 25);

    expect(root.key).toBe(30);
    expect(root.left.key).toBe(20);
    expect(root.right.key).toBe(40);
    expect(root.left.left.key).toBe(10);
    expect(root.left.right.key).toBe(25);
    expect(root.right.right.key).toBe(50);
  });
});
