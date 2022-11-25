import { assert } from "chai";

const foo = "bar",
  beverages = { tea: ["chai", "matcha", "oolong"] };

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Chai test", () => {
  it("it", () => {
    assert.typeOf(foo, "string", "foo is a string");
    assert.equal(foo, "bar", "foo equal `bar`");
    assert.lengthOf(foo, 3, "foo`s value has a length of 3");
    assert.lengthOf(beverages.tea, 3, "beverages has 3 types of tea");
  });
});
