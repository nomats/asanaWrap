const PoseCheckerConstructor = require('./pose_checker_constructor.js');

class TemplateCheckerConstructor extends PoseCheckerConstructor {
  checker(wrappedPosenetObject){
    //Your Implementation here! --->
    return [
      //isCorrect,
      //[[check_1, criteria_1], [check_2a && check_2b, criteria_2]]
    ];
    //<---
  }
}

module.exports = TemplateCheckerConstructor.createBoundChecker()
