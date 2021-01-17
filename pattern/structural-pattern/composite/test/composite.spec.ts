import Branch from '../component/branch';
import Leaf from '../component/leaf';

describe('Testing Branch', () => {
    it('Testing Generate Tree', () => {
        const tree = new Branch('branch root');

        const branch1 = new Branch('branch 1');
        branch1.add(new Leaf('leaf 1 from branch 1'));
        branch1.add(new Leaf('leaf 2 from branch 1'));

        const branch2 = new Branch('branch 2');
        const branch2Child = new Branch('branch 2 Child');
        branch2.add(new Leaf('leaf 1 from branch 2'));

        branch2Child.add(new Leaf('leaf 1 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 2 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 3 from branch 2 children'));
        branch2.add(branch2Child);

        tree.add(branch1);
        tree.add(branch2);
        tree.add(new Leaf('leaf 1 from root'));

        expect(tree.execute()).toStrictEqual({
            name: 'branch root',
            children: [
                {
                    name: 'branch 1',
                    children: [
                        { name: 'leaf 1 from branch 1', children: undefined },
                        { name: 'leaf 2 from branch 1', children: undefined }
                    ]
                },
                {
                    name: 'branch 2',
                    children: [
                        { name: 'leaf 1 from branch 2', children: undefined },
                        {
                            name: 'branch 2 Child',
                            children: [
                                {
                                    name: 'leaf 1 from branch 2 children',
                                    children: undefined
                                },
                                {
                                    name: 'leaf 2 from branch 2 children',
                                    children: undefined
                                },
                                {
                                    name: 'leaf 3 from branch 2 children',
                                    children: undefined
                                }
                            ]
                        }
                    ]
                },
                { name: 'leaf 1 from root', children: undefined }
            ]
        });
    });

    it('Testing Match Parent Instance', () => {
        const tree = new Branch('branch root');

        const branch1 = new Branch('branch 1');
        branch1.add(new Leaf('leaf 1 from branch 1'));
        branch1.add(new Leaf('leaf 2 from branch 1'));

        const branch2 = new Branch('branch 2');
        const branch2Child = new Branch('branch 2 Child');
        branch2.add(new Leaf('leaf 1 from branch 2'));

        branch2Child.add(new Leaf('leaf 1 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 2 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 3 from branch 2 children'));
        branch2.add(branch2Child);

        tree.add(branch1);
        tree.add(branch2);
        tree.add(new Leaf('leaf 1 from root'));

        expect(branch1.getParent()).toStrictEqual(tree);
        expect(branch2.getParent()).toStrictEqual(tree);

        expect(new Leaf('leaf 1 from branch 2 children').isComposite()).toBe(
            false
        );
        expect(branch2.isComposite()).toBe(true);
    });

    it('Testing Is Composite', () => {
        const tree = new Branch('branch root');

        const branch1 = new Branch('branch 1');
        branch1.add(new Leaf('leaf 1 from branch 1'));
        branch1.add(new Leaf('leaf 2 from branch 1'));

        const branch2 = new Branch('branch 2');
        const branch2Child = new Branch('branch 2 Child');
        branch2.add(new Leaf('leaf 1 from branch 2'));

        branch2Child.add(new Leaf('leaf 1 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 2 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 3 from branch 2 children'));
        branch2.add(branch2Child);

        tree.add(branch1);
        tree.add(branch2);
        tree.add(new Leaf('leaf 1 from root'));

        expect(new Leaf('leaf 1 from branch 2 children').isComposite()).toBe(
            false
        );
        expect(branch2.isComposite()).toBe(true);
    });

    it('Testing Delete Tree', () => {
        const tree = new Branch('branch root');
        const sampleLeaf = new Leaf('leaf 1 from root');

        const branch1 = new Branch('branch 1');
        branch1.add(new Leaf('leaf 1 from branch 1'));
        branch1.add(new Leaf('leaf 2 from branch 1'));

        const branch2 = new Branch('branch 2');
        const branch2Child = new Branch('branch 2 Child');
        branch2.add(new Leaf('leaf 1 from branch 2'));

        branch2Child.add(new Leaf('leaf 1 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 2 from branch 2 children'));
        branch2Child.add(new Leaf('leaf 3 from branch 2 children'));
        branch2.add(branch2Child);

        tree.add(branch1);
        tree.add(branch2);
        tree.add(sampleLeaf);

        tree.remove(sampleLeaf);
        tree.remove(branch1);

        expect(tree.execute()).toStrictEqual({
            name: 'branch root',
            children: [
                {
                    name: 'branch 2',
                    children: [
                        { name: 'leaf 1 from branch 2', children: undefined },
                        {
                            name: 'branch 2 Child',
                            children: [
                                {
                                    name: 'leaf 1 from branch 2 children',
                                    children: undefined
                                },
                                {
                                    name: 'leaf 2 from branch 2 children',
                                    children: undefined
                                },
                                {
                                    name: 'leaf 3 from branch 2 children',
                                    children: undefined
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    });
});
