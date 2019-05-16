const PoseCheckerConstructor = require("../../lib/pose_checkers/pose_checker_constructor.js")
var subject;
describe("PoseCheckerConstructor#_isPointBetween", ()=>{
  beforeEach(()=>{
    subject = new PoseCheckerConstructor
  })

  it("correctly evaluates", () => {
    subject = new PoseCheckerConstructor
    expect(subject._isPointBetween(5,[3,7])).toEqual(true)
  })
})
