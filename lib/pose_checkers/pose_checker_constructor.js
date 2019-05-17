const MathModel = require('../math_model/main.js')

class PoseCheckerConstructor {
  constructor(){
    this.math_model = new MathModel()
  }

  checker(){
    return null
  }

  static createBoundChecker(){
    var checkerConstructor = new this();
    return checkerConstructor.checker.bind(checkerConstructor)
  }

  _isPointBetween(point, boundary) {
    return this.math_model.isPointBetween(point, boundary);
  }

  _isStraight(points, margin = 10) {
    return this.math_model.isStraight(points, margin);
  }

  _calculateAngle(edge1, middle, edge2) {
    return this.math_model.angle(edge1, middle, edge2);
  }

  _isHorizontal(points, margin = 10) {
    return this.math_model.isHorizontal(points, margin);
  }

  _isStacked(points, margin = 10) {
    return this.math_model.isVertical(points, margin);
  }

}

module.exports = PoseCheckerConstructor;
