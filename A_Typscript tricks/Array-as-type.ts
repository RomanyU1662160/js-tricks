const codes = [200, 201, 400, 401, 403, 404, 500, 501, 502, 503, 504];
// type Codes = typeof codes;
// type Code = Codes[number];

type Member<T> = T extends Array<infer U> ? U : never;
type Code = Member<typeof codes>;

console.log('typeof  :::->>>', typeof codes);


const isValidCode = (code: Code) => {
    return codes.includes(code);
}