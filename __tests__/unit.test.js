// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests for isPhoneNumber()

test('calls isPhoneNumber() on 555-555-5555', () => {
    const validPhoneNumber = functions.isPhoneNumber('555-555-5555');
    expect(validPhoneNumber).toBe(true);
});

test('calls isPhoneNumber() on 696-969-6969', () => {
    const validPhoneNumber = functions.isPhoneNumber('969-6969');
    expect(validPhoneNumber).toBe(true);
});

test('calls isPhoneNumber() on 302-889', () => {
    const validPhoneNumber = functions.isPhoneNumber('302-889');
    expect(validPhoneNumber).toBe(false);
});

test('calls isPhoneNumber() on qcl-ccm-aqvq', () => {
    const validPhoneNumber = functions.isPhoneNumber('qcl-ccm-aqvq');
    expect(validPhoneNumber).toBe(false);
});

// Tests for isEmail()

test('calls isEmail() on cse110@powell.com', () => {
    const validPhoneNumber = functions.isEmail('cse110@powell.com');
    expect(validPhoneNumber).toBe(true);
});

test('calls isEmail() on team6@agile.com', () => {
    const validPhoneNumber = functions.isEmail('team6@agile.com');
    expect(validPhoneNumber).toBe(true);
});

test('calls isEmail() on cse110.com', () => {
    const validPhoneNumber = functions.isEmail('cse110.com');
    expect(validPhoneNumber).toBe(false);
});

test('calls isEmail() on professorpowell@', () => {
    const validPhoneNumber = functions.isEmail('professorpowell@');
    expect(validPhoneNumber).toBe(false);
});

// Tests for isStrongPassword()

test('calls isStrongPassword() on JavaScript', () => {
    const validPhoneNumber = functions.isStrongPassword('JavaScript');
    expect(validPhoneNumber).toBe(true);
});

test('calls isStrongPassword() on CSE110', () => {
    const validPhoneNumber = functions.isStrongPassword('CSE110');
    expect(validPhoneNumber).toBe(true);
});

test('calls isStrongPassword() on 1234', () => {
    const validPhoneNumber = functions.isStrongPassword('1234');
    expect(validPhoneNumber).toBe(false);
});

test('calls isStrongPassword() on hi', () => {
    const validPhoneNumber = functions.isStrongPassword('hi');
    expect(validPhoneNumber).toBe(false);
});

//Tests for isDate()

test('calls isDate() on 11/03/2000', () => {
    const validPhoneNumber = functions.isDate('11/03/2000');
    expect(validPhoneNumber).toBe(true);
});

test('calls isDate() on 4/11/2001', () => {
    const validPhoneNumber = functions.isDate('4/11/2001');
    expect(validPhoneNumber).toBe(true);
});

test('calls isDate() on 11/11/21', () => {
    const validPhoneNumber = functions.isDate('11/11/21');
    expect(validPhoneNumber).toBe(false);
});

test('calls isDate() on 001/01/1999', () => {
    const validPhoneNumber = functions.isDate('001/01/1999');
    expect(validPhoneNumber).toBe(false);
});

//Tests for isHexColor()

test('calls isHexColor() on FFFFFF', () => {
    const validPhoneNumber = functions.isHexColor('FFFFFF');
    expect(validPhoneNumber).toBe(true);
});

test('calls isHexColor() on abc', () => {
    const validPhoneNumber = functions.isHexColor('abc');
    expect(validPhoneNumber).toBe(true);
});

test('calls isHexColor() on 1234', () => {
    const validPhoneNumber = functions.isHexColor('1234');
    expect(validPhoneNumber).toBe(false);
});

test('calls isHexColor() on babababa', () => {
    const validPhoneNumber = functions.isHexColor('babababa');
    expect(validPhoneNumber).toBe(false);
});