const Pose = require('../../lib/pose.js')
const sample = require("../posenet_sample_data/warrior_two_test_sample.js")
var correct_posenet_sample_object
var incorrect_posenet_sample_object
var subject

describe("Pose#isWarriorTwo",()=>{
  beforeAll(()=>{
    correct_posenet_sample_object = sample.correct[0];
    incorrect_posenet_sample_object = sample.incorrect[0];
  })
  it("can determine a correct warrior two pose", ()=>{
    var subject = new Pose(correct_posenet_sample_object)
    expect(subject.isWarriorTwo().isCorrect).toEqual(true)
  })
  it("can determine an incorrect warrior two pose", ()=>{
    var subject = new Pose(incorrect_posenet_sample_object)
    expect(subject.isWarriorTwo().isCorrect).toEqual(false)
  })
})
