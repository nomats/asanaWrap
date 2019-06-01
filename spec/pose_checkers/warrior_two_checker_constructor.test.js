const sample = require("../posenet_sample_data/warrior_two_test_sample.js");
const isWarriorTwo = require("../../lib/pose_checkers/warrior_two_checker_constructor.js");
const PosenetObjectWrapper = require("../../lib/posenet_object_wrapper/main.js")



describe("#isWarrior2", ()=>{
  it("can recognise correct position", () => {
    var input = new PosenetObjectWrapper(sample["correct"][0]);
    expect(isWarriorTwo(input).isCorrect).toEqual(true);
  });

  it("can recognise correct position", () => {
    var input = new PosenetObjectWrapper(sample["correct"][1]);
    expect(isWarriorTwo(input).isCorrect).toEqual(true);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][0]);
    expect(isWarriorTwo(input).isCorrect).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][1]);
    expect(isWarriorTwo(input).isCorrect).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][2]);
    expect(isWarriorTwo(input).isCorrect).toEqual(false);
  });
})
