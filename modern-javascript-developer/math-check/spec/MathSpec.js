"use strict";

describe("add", function() {

  it("should be defined", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

});

describe("subtract", function() {

  it("should be defined", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 2)).toBe(5);
  });

});

describe("multiply", function() {

  it("should be defined", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(2, 2)).toBe(4);
  });

});

describe("divide", function() {

  it("should be defined", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(5, 5)).toBe(1);
  });

});

describe("square", function() {

  it("should be defined", function() {
    expect(square).toBeDefined();
  });

  it("should square one integers", function() {
    expect(square(5)).toBe(25);
  });

});

describe("squareRoot", function() {

  it("should be defined", function() {
    expect(squareRoot).toBeDefined();
  });

  it("should square root one integer", function() {
    expect(squareRoot(25)).toBe(5);
  });

});



