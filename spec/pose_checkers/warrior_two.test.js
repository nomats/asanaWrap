const sample = require("../posenet_sample_data/warrior_two_test_sample.js");
const isWarriorTwo = require("../../lib/pose_checker/warriorTwo.js");

describe("#isWarrior2", ()=>{
  it("can recognise correct position", () => {
    var input = sample["correct"][0];
    expect(isWarriorTwo(input)[0]).toEqual(true);
  });

  it("can recognise correct position", () => {
    var input = sample["correct"][1];
    expect(isWarriorTwo(input)[0]).toEqual(true);
  });

  it("can recognise incorrect position", () => {
    var input = sample["incorrect"][0];
    expect(isWarriorTwo(input)[0]).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = sample["incorrect"][1];
    expect(isWarriorTwo(input)[0]).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = sample["incorrect"][2];
    expect(isWarriorTwo(input)[0]).toEqual(false);
  });
})
