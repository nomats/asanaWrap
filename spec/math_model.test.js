const MathModel = require('../lib/math_model/main.js');

var subject;

beforeEach(()=>{
  subject = new MathModel()
})

describe("MathModel#angle", () => {
  it('can calculate angles correctly', () => {
    expect(subject.angle({x: 12, y: 5},{x: 0, y: 0},{x: 12, y: 0})).toEqual(23)
  });

  it('can calculate angles correctly', () => {
    expect(subject.angle({x: 0, y: 2},{x: 5, y: 5},{x: 2, y: 0})).toEqual(28)
  });

  it('can calculate angles correctly', () => {
    expect(subject.angle({x: 2, y: 0},{x: 0, y: 2},{x: 5, y: 5})).toEqual(76)
  });
})

describe("MathModel#isStraight", ()=>{
  it('can deduce straight lines', () => {
    expect(subject.isStraight([{x: 2, y: 0},{x: 0, y: 2},{x: 5, y: 5}],1)).toEqual(false)
  });

  it('can deduce straight lines', () => {
    expect(subject.isStraight([{x: 1, y: -0.5},{x: 3,y: -0.6},{x: 5,y: -0.7},{x: 7,y: -0.8},
       {x: 9, y:-0.9}, {x: 11, y:-1.0}],1)).toEqual(true)
  });

  it('can deduce straight lines', () => {
    expect(subject.isStraight([{x: -1, y: -0.5},{x: -1.01,y: -0.6},{x: -1.02,y: -0.7},{x: -1.03,y: -0.8},
       {x: -1.04, y:-0.9}, {x: -1.05, y:-1.0}])).toEqual(true)
  });

  it('can deduce straight lines', () => {
    expect(subject.isStraight([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.6},{x: 5,y: 3.3},
       {x: 7, y:2.9}, {x: 9, y:3.1}],1)).toEqual(true)
  });

  it('can deduce straight lines', () => {
    expect(subject.isStraight([{x: -1, y: -9},{x: -1.01,y: 5},{x: -1.02,y: -3.7},{x: 1.03,y: -0.8},
       {x: 13.04, y:-0.9}, {x: -1.05, y:-1.0}],4)).toEqual(false)
  });
})

describe("MathModel#isHorizontal",()=>{
  it('can deduce horizontal lines', () => {
    expect(subject.isHorizontal([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.6},{x: 5,y: 3.3},
       {x: 7, y:2.9}, {x: 9, y:2.8}],0.7)).toEqual(true)
  });

  it('can deduce non-horizontal lines', () => {
    expect(subject.isHorizontal([{x: -1, y: 3},{x: 1,y: 3.1},{x: 3,y: 3.9},{x: 5,y: 3.3},
       {x: 7, y:2.9}, {x: 9, y:2.2}],0.7)).toEqual(false)
  });

  it('can deduce horizontal lines', () => {
    expect(subject.isHorizontal([{x: -100, y: 326},{x: 0,y: 328},{x: 100,y: 323},{x: 200,y: 330},
       {x: 300, y:329}],10)).toEqual(true)
  });
})

describe('MathModel#isVertical',()=>{
  it('can deduce vertical lines', () => {
    expect(subject.isVertical([{x: 3, y: -1},{x: 3.1,y: 1},{x: 3.6,y: 3},{x: 3.3,y: 5},
       {x: 2.9, y:7}, {x: 2.8, y:9}],0.7)).toEqual(true)
  });

  it('can deduce vertical lines', () => {
    expect(subject.isVertical([{x: 50, y: -1},{x: 48,y: 1},{x: 46,y: 3},{x: 51,y: 5},
       {x: 53, y:7}, {x: 50, y:9}],5)).toEqual(true)
  });

  it('can deduce non-vertical lines', () => {
    expect(subject.isVertical([{x: 50, y: -1},{x: 30,y: 1},{x: 46,y: 3},{x: 51,y: 5},
       {x: 53, y:7}, {x: 72, y:9}],5)).toEqual(false)
  });
})

describe("MathModel#_isPointBetween", ()=>{

  it("correctly evaluates true examples", () => {
    expect(subject.isPointBetween(5,[3,7])).toEqual(true)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject.isPointBetween(3,[-2,7])).toEqual(true)
  })

  it("correctly evaluates true examples", () => {
    expect(subject.isPointBetween(50,[0,100])).toEqual(true)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject.isPointBetween(-5,[-1,-10])).toEqual(true)
  })

  it("correctly evaluates false examples", () => {
    expect(subject.isPointBetween(1,[3,7])).toEqual(false)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject.isPointBetween(-3,[-2,7])).toEqual(false)
  })

  it("correctly evaluates true examples", () => {
    expect(subject.isPointBetween(-1,[0,100])).toEqual(false)
  })

  it("correctly evaluates true examples with negative numbers", () => {
    expect(subject.isPointBetween(0,[-1,-10])).toEqual(false)
  })
})
