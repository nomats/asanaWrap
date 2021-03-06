const sample = require("./posenet_sample_data/mountain_pose_test_sample.js");
const PosenetObjectWrapper = require("../lib/posenet_object_wrapper/main.js");

describe("PosenetObjectWrapper#bodypart",()=>{
  it("can get nose position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("nose").position).toEqual({
      x: 867.082363200039,
      y: 139.34810966428796
    });
  });

  it("can get leftEye position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftEye").position).toEqual({
      x: 884.5536936801585,
      y: 120.80305946448948
    });
  });

  it("can get rightEye position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightEye").position).toEqual({
      x: 849.8897991854535,
      y: 118.8806278152376
    });
  });

  it("can get leftEar position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftEar").position).toEqual({
      x: 905.9810636207121,
      y: 131.71076510623712
    });
  });

  it("can get rightEar position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightEar").position).toEqual({
      x: 833.1177493787358,
      y: 134.85277551082618
    });
  });

  it("can get leftShoulder position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftShoulder").position).toEqual({
      x: 939.0765205748116,
      y: 242.1837124414523
    });
  });

  it("can get rightShoulder position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightShoulder").position).toEqual({
      x: 793.9800185364151,
      y: 243.4584244906692
    });
  });

  it("can get leftElbow position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftElbow").position).toEqual({
      x: 966.0234542497726,
      y: 371.36710985810515
    });
  });

  it("can get rightElbow position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightElbow").position).toEqual({
      x: 764.4417666238955,
      y: 370.7695001932421
    });
  });

  it("can get leftWrist position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftWrist").position).toEqual({
      x: 998.4647097518192,
      y: 498.58430285055033
    });
  });

  it("can get rightWrist position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightWrist").position).toEqual({
      x: 730.0744491862656,
      y: 504.11775658633326
    });
  });

  it("can get leftHip position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftHip").position).toEqual({
      x: 914.5591358335499,
      y: 481.72699298117277
    });
  });

  it("can get rightHip position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightHip").position).toEqual({
      x: 810.6170763424182,
      y: 486.88238101235834
    });
  });

  it("can get leftKnee position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftKnee").position).toEqual({
      x: 899.8785408004159,
      y: 702.4112093041447
    });
  });

  it("can get rightKnee position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightKnee").position).toEqual({
      x: 824.2542163745777,
      y: 703.2182234729278
    });
  });

  it("can get leftAnkle position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("leftAnkle").position).toEqual({
      x: 880.5404146634615,
      y: 882.1650988755154
    });
  });

  it("can get rightAnkle position", () => {
    const input = sample["correct"][0];
    const subject = new PosenetObjectWrapper(input);
    expect(subject.bodypart("rightAnkle").position).toEqual({
      x: 849.9319304468231,
      y: 882.6055469670201
    });
  });
})
