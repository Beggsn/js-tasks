/// <reference types="jest" />

import { arePasswordsEqual } from "./lib"

test('passwordsAreEqual should return false if passwords are not equal', () => {
    const result = arePasswordsEqual("abc", "123");
    expect(result).toBe(false);
    
});

test('passwordsAreEqual should return true if passwords are equal', () => {
    const result = arePasswordsEqual("abc", "abc");
    expect(result).toBe(true);
});

