const sample = require("../posenet_sample_data/tree_pose_test_sample.js");
const isTreePose = require("../../lib/pose_checkers/tree_pose_checker_constructor.js");
const PosenetObjectWrapper = require("../../lib/posenet_object_wrapper/main.js");

describe("#isTreePose", () => {
  it("can recognise correct position", () => {
    var input = new PosenetObjectWrapper(sample["correct"][0]);
    expect(isTreePose(input).isCorrect).toEqual(true);
  });

  it("can recognise correct position", () => {
    var input = new PosenetObjectWrapper(sample["correct"][1]);
    expect(isTreePose(input).isCorrect).toEqual(true);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][0]);
    expect(isTreePose(input).isCorrect).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][1]);
    expect(isTreePose(input).isCorrect).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][2]);
    expect(isTreePose(input).isCorrect).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][3]);
    expect(isTreePose(input).isCorrect).toEqual(false);
  });

  it("can recognise incorrect position", () => {
    var input = new PosenetObjectWrapper(sample["incorrect"][4]);
    expect(isTreePose(input).isCorrect).toEqual(false);
  });
});
