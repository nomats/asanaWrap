const PoseCheckerConstructor = require("../../lib/pose_checkers/pose_checker_constructor.js")
var subject;
describe("PoseCheckerConstructor#_isPointBetween", ()=>{
  beforeEach(()=>{
    subject = new PoseCheckerConstructor
  })

  it("correctly evaluates true examples", () => {
    expect(subject._isPointBetween(5,[3,7])).toEqual(true)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject._isPointBetween(3,[-2,7])).toEqual(true)
  })

  it("correctly evaluates true examples", () => {
    expect(subject._isPointBetween(50,[0,100])).toEqual(true)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject._isPointBetween(-5,[-1,-10])).toEqual(true)
  })

  it("correctly evaluates false examples", () => {
    expect(subject._isPointBetween(1,[3,7])).toEqual(false)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject._isPointBetween(-3,[-2,7])).toEqual(false)
  })

  it("correctly evaluates true examples", () => {
    expect(subject._isPointBetween(-1,[0,100])).toEqual(false)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject._isPointBetween(0,[-1,-10])).toEqual(false)
  })
})
