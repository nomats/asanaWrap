const PoseCheckerConstructor = require('./pose_checker_constructor.js');

class WarriorTwoCheckerConstructor extends PoseCheckerConstructor {
  checker(wrappedPosenetObject){
    const criteria_1 = "Arms parallel to the ground";
    const check_1 = this._isHorizontal(
      [
        wrappedPosenetObject.bodypart("rightWrist").position,
        wrappedPosenetObject.bodypart("rightElbow").position,
        wrappedPosenetObject.bodypart("rightShoulder").position,
        wrappedPosenetObject.bodypart("leftShoulder").position,
        wrappedPosenetObject.bodypart("leftElbow").position,
        wrappedPosenetObject.bodypart("leftWrist").position
      ],
      15
    );

    const criteria_2 = "Knee bent and stacked over foot";
    var kneeAngle = this._calculateAngle(
      wrappedPosenetObject.bodypart("rightHip").position,
      wrappedPosenetObject.bodypart("rightKnee").position,
      wrappedPosenetObject.bodypart("rightAnkle").position
    );
    const check_2a = kneeAngle > 85 && kneeAngle < 115;
    const check_2b = this._isStacked(
      wrappedPosenetObject.bodypart("rightKnee").position,
      wrappedPosenetObject.bodypart("rightAnkle").position
    );

    const isCorrect = check_1 && check_2a && check_2b;

    return [
      isCorrect,
      [[check_1, criteria_1], [check_2a && check_2b, criteria_2]]
    ];
  }
}

const constructor = new WarriorTwoCheckerConstructor
const checker = constructor.checker.bind(constructor)

module.exports = checker
