const PoseCheckerConstructor = require('../../lib/pose_checkers/pose_checker_constructor.js')
var subject;

beforeEach(()=>{
  subject = new PoseCheckerConstructor
})

describe("PoseCheckerConstructor#checker",()=>{
  it("returns null", ()=>{
    expect(subject.checker()).toEqual(null)
  })
})

describe("private functions", ()=>{
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

  describe("PoseCheckerConstructor#_isHorizontal", ()=>{
    it("determines if a set of points form a horizontal line with a given margin",()=>{
      expect(subject._isHorizontal([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.6},{x: 5,y: 3.3},
         {x: 7, y:2.9}, {x: 9, y:2.8}],0.7)).toEqual(true)
    })
    it("determines if a set of points form a horizontal line with a given margin",()=>{
      expect(subject._isHorizontal([{x: -100, y: 326},{x: 0,y: 328},{x: 100,y: 323},{x: 200,y: 330},
         {x: 300, y:329}],10)).toEqual(true)
    })
    it("determines if a set of points don't form a horizontal line with a given margin",()=>{
      expect(subject._isHorizontal([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.9},{x: 5,y: 3.3},
         {x: 7, y:2.9}, {x: 9, y:2.2}],0.7)).toEqual(false)
    })
  })

  describe("PoseCheckerConstructor#_isStacked", ()=>{
    it("determines if a set of points form a vertical line with a given margin", () => {
      expect(subject._isStacked([{x: 3, y: -1},{x: 3.1,y: 1},{x: 3.6,y: 3},{x: 3.3,y: 5},
         {x: 2.9, y:7}, {x: 2.8, y:9}],0.7)).toEqual(true)
    });

    it("determines if a set of points form a vertical line with a given margin", () => {
      expect(subject._isStacked([{x: 50, y: -1},{x: 48,y: 1},{x: 46,y: 3},{x: 51,y: 5},
         {x: 53, y:7}, {x: 50, y:9}],5)).toEqual(true)
    });

    it("determines if a set of points don't form a vertical line with a given margin", () => {
      expect(subject._isStacked([{x: 50, y: -1},{x: 30,y: 1},{x: 46,y: 3},{x: 51,y: 5},
         {x: 53, y:7}, {x: 72, y:9}],5)).toEqual(false)
    });
  })

  describe("PoseCheckerConstructor#_calculateAngle", ()=>{
    it("can calculate angle correctly",()=>{
      expect(subject._calculateAngle({x: 12, y: 5},{x: 0, y: 0},{x: 12, y: 0})).toEqual(23)
    })
    it("can calculate angle correctly",()=>{
      expect(subject._calculateAngle({x: 2, y: 0},{x: 0, y: 2},{x: 5, y: 5})).toEqual(76)
    })
  })
})
