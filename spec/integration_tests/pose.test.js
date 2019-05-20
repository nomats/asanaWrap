const Pose = require('../../lib/pose.js')
const sample = require("../posenet_sample_data/warrior_two_test_sample.js")
var subject

describe("Pose#isWarriorTwo",()=>{
  beforeAll(()=>{
    var correct_posenet_sample_object = sample.correct[0];
  })
  it("can determine a correct warrior two pose", ()=>{
    var subject = new Pose(correct_posenet_sample_object)
    expect(subject.isWarriorTwo()[0]).toEqual(true)
  })
})
