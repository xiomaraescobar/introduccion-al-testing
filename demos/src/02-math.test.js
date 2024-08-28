const { sum, multiply, divide, calculatePercentage} = require('./02-math');


describe('test for math',() => {
  describe('test for sum', () => {
    test("adds 1 + 3 should be 4",  () => {
      const rta = sum(1,3);
      expect(rta).toBe(4);
    });
  });

  describe('test for multiply', () => {
    test("should be 4",  () => {
      const rta = multiply(1,4);
      expect(rta).toBe(4);
    });
  });

  describe('test for divide', () => {
    test("should divide",  () => {
      const rta = divide(6,3);
      expect(rta).toBe(2);
      const rta2 = divide(5,2);
      expect(rta2).toBe(2.5);
    });

    test("should divide for zero",  () => {
      const rta = divide(6,0);
      expect(rta).toBeNull();
      const rta2 = divide(5,0);
      expect(rta2).toBeNull();
    });

    test("should correctly divide a large number by a small number", () => {
      const result = divide(100, 0.5);
      expect(result).toBe(200);
    });

    test ("should correctly divide two negative numbers", () => {
      const result = divide(-50, -20);
      expect(result).toBe(2.5);
      });
  });

  describe('test for porcentage', () => {
    test("should return correct percentage when both total and part are positive numbers", () => {
      const result = calculatePercentage(200, 50);
      expect(result).toBe(25);
    });

    test("should return 0 if the total is 0 to avoid division by zero", () => {
      const result = calculatePercentage(0, 50);
      expect(result).toBe(0);
    });
  });

});
