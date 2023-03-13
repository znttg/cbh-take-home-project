const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("verify if partitionKey is not null", () => {
  it("Returns non-null key when simple imput is provided", () => {
    const partitionKey = deterministicPartitionKey('test');
    expect(partitionKey).not.toBeNull();
  });
});

describe("verify if key can be larger than 256 characters", () => {
  it("returns non-null key when given input is larger than 256 characters", () => {
    const partitionKey = deterministicPartitionKey('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    expect(partitionKey).not.toBeNull();
  });
});

describe("given a user that has a key, return the string key as it is.", () => {
  it("returns candidate partition key correctly", () => {
    const candidate = {
      partitionKey: '123'
    }
    const partitionKey = deterministicPartitionKey(candidate);
    expect(partitionKey).toBe(candidate.partitionKey);
  });
});
