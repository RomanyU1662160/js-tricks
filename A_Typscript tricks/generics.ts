
namespace generics {
    const items: Array<string> = ['a', 'b', 'c'];
    const nums: Array<number> = [1, 2, 3];

    type Member<T> = T extends Array<infer U> ? U : never;
    type Item = Member<typeof items>;
    type Num = Member<typeof nums>;
}
