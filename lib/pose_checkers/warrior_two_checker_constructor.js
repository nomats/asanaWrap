const PoseCheckerConstructor = require('./pose_checker_constructor.js');

class WarriorTwoCheckerConstructor extends PoseCheckerConstructor {
  checker(wrappedPosenetObject){
    const criteria_1 = "Arms parallel to the ground";
    var check_1 = this._isHorizontal(
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
    var check_2a = kneeAngle > 85 && kneeAngle < 115;
    var check_2b = this._isStacked(
      wrappedPosenetObject.bodypart("rightKnee").position,
      wrappedPosenetObject.bodypart("rightAnkle").position
    );

    var isCorrect = check_1 && check_2a && check_2b;

    return {
      isCorrect: isCorrect,
      criteria: [
        {
          description: criteria_1,
          check: check_1
        },
        {
          description: criteria_2,
          check: check_2a && check_2b
        }
      ]
    };
  }
}

module.exports = WarriorTwoCheckerConstructor.createBoundChecker()
