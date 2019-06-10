const PoseCheckerConstructor = require("./pose_checker_constructor.js");

class TreePoseCheckerConstructor extends PoseCheckerConstructor {
  checker(wrappedPosenetObject) {
    //Your Implementation here! --->
    //define your checks, criteria and isCorrect variable here too!
    //e.g.
    //
    //const criteria_1 = "Arms parallel to the ground";
    //var check_1 = this._isHorizontal(
    //  [
    //    wrappedPosenetObject.bodypart("rightWrist").position,
    //    wrappedPosenetObject.bodypart("rightElbow").position,
    //    wrappedPosenetObject.bodypart("rightShoulder").position,
    //    wrappedPosenetObject.bodypart("leftShoulder").position,
    //    wrappedPosenetObject.bodypart("leftElbow").position,
    //    wrappedPosenetObject.bodypart("leftWrist").position
    //  ],
    //  15
    //);
    //const criteria_2 = "Knee bent and stacked over foot";
    //var kneeAngle = this._calculateAngle(
    //  wrappedPosenetObject.bodypart("rightHip").position,
    //  wrappedPosenetObject.bodypart("rightKnee").position,
    //  wrappedPosenetObject.bodypart("rightAnkle").position
    //);
    //var check_2a = kneeAngle > 85 && kneeAngle < 115;
    //var check_2b = this._isStacked(
    //  wrappedPosenetObject.bodypart("rightKnee").position,
    //  wrappedPosenetObject.bodypart("rightAnkle").position
    //);
    //<---
    return {
      //add your checks and criteria here
      isCorrect: isCorrect, //make sure you define an isCorrect value before hand
      criteria: [
        //add all criteria description and check results.
        //e.g.
        //
        //{
        //  description: criteria_1,
        //  check: check_1 //
        //},
        //{
        //  description: critera_2,
        //  check: check_2a && check_2b
        //},
        //...
      ]
    };
  }
}

module.exports = TreePoseCheckerConstructor.createBoundChecker();
