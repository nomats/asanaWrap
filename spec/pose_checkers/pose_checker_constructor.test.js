const PoseCheckerConstructor = require('../../lib/pose_checkers/pose_checker_constructor.js')
var subject;

beforeEach(()=>{
  subject = new PoseCheckerConstructor
})

describe("PoseCheckerConstructor#_isPointBetween", ()=>{
  it("can determine if a point is between two given points",()=>{
    expect(subject._isPointBetween(10,[0,20])).toEqual(true)
  })
  it("can determine if a point is not between two given points",()=>{
    expect(subject._isPointBetween(-5,[-4,-2])).toEqual(false)
  })
})

describe("PoseCheckerConstructor#_isStraight", ()=>{
  it("can determine if a set of points with format {x:0, y:0} are straight within a given margin", ()=>{
    expect(subject._isStraight(
      [
        {x:0,y:0},
        {x:10,y:13},
        {x:20,y:22},
        {x:32,y:30},
        {x:40,y:38}
      ],5
    )).toEqual(true)
  })
  it("can determine if a set of points with format {x:0, y:0} are straight within a given margin", ()=>{
    expect(subject._isStraight(
      [
        {x:0,y:0},
        {x:10,y:27},
        {x:20,y:49},
        {x:30,y:78},
        {x:40,y:98}
      ],5
    )).toEqual(true)
  })
  it("can determine if a set of points with format {x:0, y:0} are not straight within a given margin", ()=>{
    expect(subject._isStraight(
      [
        {x:0,y:0},
        {x:10,y:90},
        {x:20,y:22},
        {x:32,y:30},
        {x:40,y:10}
      ],5
    )).toEqual(false)
  })
  it("can determine if a set of points with format {x:0, y:0} are not straight within a given margin", ()=>{
    expect(subject._isStraight(
      [
        {x:0,y:0},
        {x:10,y:60},
        {x:20,y:49},
        {x:30,y:78},
        {x:40,y:20}
      ],5
    )).toEqual(false)
  })
})

describe("PoseCheckerConstructor#_isHorizontal", ()=>{})

describe("PoseCheckerConstructor#_isStacked", ()=>{})

describe("PoseCheckerConstructor#_calculateAngle", ()=>{})
