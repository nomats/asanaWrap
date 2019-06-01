const PosenetObjectWrapper = require('./posenet_object_wrapper/main.js')
//Poses --->
const _warriorTwoChecker = require('./pose_checkers/warrior_two_checker_constructor.js')
// <----- Poses

class Pose {
  constructor(posenetObject){
    this.wrappedPosenetObject = new PosenetObjectWrapper(posenetObject)
  }
  isWarriorTwo(){
    return _warriorTwoChecker(this.wrappedPosenetObject)
  }
}

module.exports = Pose
