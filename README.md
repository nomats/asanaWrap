# Contributors
For anyone looking to contribute to the codebase, it's very encouraged! Primarily contribution entails adding your own pose checkers to the module. Any other spots for improvement should be made as seperate pull requests and not bundled in with a pose checker addition.

## Adding a new pose checker
A pose checker is a function which when called on a `PosenetObjectWrapper` instance returns true or false depending whether the pose is correct in Yoga terms. These pose checker functions are created as functions of an instance of a `PoseCheckerConstructor` derived classes. A `PosenetObjectWrapper` is simply a Posenet wrapped up in something which gives it an intuitive `bodypart` interface.

 Confused? Take a look at the example for [Warrior Two](https://github.com/nomats/asanaWrap/blob/dev/lib/pose_checkers/warrior_two_checker_constructor.js). The `WarriorTwoCheckerConstructor` class re-writes the implementation of `checker()` (which it inherets from the parent class) to be a method which determines whether a `wrappedPosenetObject` passed to it is the Yoga pose *Warrior Two* or not. It does this by using a number of [helper functions](https://github.com/nomats/asanaWrap#posecheckerconstructor-helper-methods) passed down through it's parent class, `PoseCheckerConstructor`. The checker is then exported with the use of `createBoundChecker()`; a static class method which creates an instance of `WarriorTwoCheckerConstructor`, binds `checker()` to said instance, and returns the checker function by itself. Thus we end up with a bound `checker()` for Warrior Two, with all it's underlying logic encapsulated away.

### Implementation Overview

 Almost all of this is pre-provided, so adding a new pose checker primarily consists of **developing a new implementation for `checker()` which determines true or false for your chosen pose.**

Create a new pose checker function with the following steps:
- Branching off dev
- creating the file and Extending the class
- creating unit tests / sample data for your checker (you can do the next step first if you aren't a TDD fan)
- implementing your checker (factoring return formatting)
- adding it to the main Pose
- don't break any tests and make a pull request! :)

### Creating a new `CheckerConstructor` file
1. Copy [the template](https://github.com/nomats/asanaWrap/blob/dev/contributor_resources/template_checker_constructor.js) file in `/contributor_resources/template_checker_constructor.js` into `/lib/pose_checkers`
2. Rename the file `*_checker_constructor.js`, where `*` is the name of your pose in snake case.
3. Rename all instances of `TemplateCheckerConstructor` with `*CheckerConstructor` where `*` is your pose name. Make sure it's in PascalCase.

### Creating sample data and unit tests

- Make two new files, `/spec/posenet_sample_data/*_test_sample.js` and `/spec/pose_checkers/*_checker_constructor.test.js`, where `*` is your pose name in `camel_case`.
- Populate your sample data file. If you've never worked with posenet or generating posenet test data, take a look at our GUIDE.
- Write at least two expected true tests and two expected false tests. (If you TDD, this can be gradual).
- Add an integration test in `spec/integration_tests/pose.test.js` in a **new describe block**.
**NOTE:** We largely leave it to your discretion how to import your sample data and test it, but if you'd like to stick to convention you can find examples in the `pose_checkers` directory. We would obviously love that :)
**MORE NOTES:** We are not currently stubbing `PosenetObjectWrapper` due to it's fundamentality.


### Implementing your checker
Now it's time for the creative bit! Once inside the `checker()` function, you can make calls to get different bodyparts' positional hashes with `wrappedPosenetObject.bodypart("nose").position`. Use this in conjunction with the inherited [helper functions](https://github.com/nomats/asanaWrap#posecheckerconstructor-helper-methods) to write a series of checks which determine if the pose is correct or not. If you're having trouble, check out [other examples](https://github.com/nomats/asanaWrap/tree/dev/lib/pose_checkers) to see ways `checker()` has been implemented. **Make sure `checker()` returns a [correctly formatted object.](https://github.com/nomats/asanaWrap#checker-return-object)**

#### Checker Format
It's really worth taking a look at existing examples. Checkers are made up of matching checks and criteria. Criteria are strings describing the Yoga rule, e.g. *arms horizontal*. The corresponding check will be a boolean showing if the criteria has been met, for example:
```
const criteria_1 = "Arms parallel to the ground";
const check_1 = this._isHorizontal(
  [
    wrappedPosenetObject.bodypart("rightWrist").position,
    ...
    wrappedPosenetObject.bodypart("leftWrist").position
  ],
  15
);
```
Sometimes a criteria isn't describable in one check, so it's instead made of multiple sub checks:
```
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
```
in this case, the overall check for the criteria becomes `check_2a && check_2b`, since both checks need to be met for the whole criteria to be met.

lastly, each `checker()` needs an `isCorrect` boolean. This boolean represents whether the entire pose has been achieved, and is thus a combination of all `check` booleans joined with `&&` operators:

```
const isCorrect = check_1 && check_2a && check_2b;
```

#### Checker return object
Your checker return object should be an object of the following form:

```javascript
return {
  isCorrect: isCorrect,
  criteria: [
    {
      description: criteria_1_description,
      check: check_1
    },
    {
      description: criteria_2_description,
      check: check_2a && check_2b
    }
    //...
  ]
}
```
where `isCorrect` is the overall boolean which evaluates whether the pose is correct or not, `criteria` is an array of objects, each of which contain a `description` string and a `check` boolean. Each `description` string describes the criteria the user must meet, and each `check` boolean determines if that criteria is being met.
### Adding your checker to `pose.js`
Add your checker to `/lib/pose.js` in the following format:
```
//Poses --->
...
const _*Checker = require('./pose_checkers/*_checker_constructor.js')
// <----- Poses

class Pose {
  constructor(posenetObject){
    this.wrappedPosenetObject = new PosenetObjectWrapper(posenetObject)
  }
  ...
  is*(){
    return _*Checker(this.wrappedPosenetObject)
  }
}
```
where all instances of `*` is **your checker name in snake_case/camelCase as appropriate**.

#### Pull request
Lastly, make sure your new unit tests all pass, and make a pull request to dev!


### `bodypart(bodypartName)`
`bodypart` is a handy wrapper which makes it easy to make calls to the original Posenet object for the position hashes of different body parts.

#### Typical usage
```
wrappedPosenetObject.bodypart("nose").position
 => {x:55, y:97}
```
#### Implementation
In the scope of writing a `checker()` function, `bodypart` is callable on the wrappedPosenetObject. an Example from `/lib/pose_checkers/warrior_two.js`:
```
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
    ...
```
#### List of `bodypartName`s
```
"nose"
"leftEye"
"rightEye"
"leftEar"
"rightEar"
"leftShoulder"
"rightShoulder"
"leftElbow"
"rightElbow"
"leftWrist"
"rightWrist"
"leftHip"
"rightHip"
"leftKnee"
"rightKnee"
"leftAnkle"
"rightAnkle"
```

### `PoseCheckerConstructor` helper methods
All methods extended from the `PoseCheckerConstructor` class to help build checker functions.
#### `_isPointBetween(point, boundary)`
- **Returns `true` or `false` if `point` is between values in  `boundary`**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `point`      | *number, one dimensional co-ordinate* | `5` |
| `boundary`      | *array of length two, describes boundaries* |   `[3,7]` |
```
//Example Usage
this._isPointBetween(5, [3,7])
  => true

this._isPointBetween(3, [5,7])
  => false
```
#### `_calculateAngle(edge1, middle, edge2)`
- **Returns angle in degrees of `edge1`->`middle`->`edge2`**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `edge1`      | *position hash, first exterior point of angle* | `{x: 12, y: 5}` |
| `middle`      | *position hash, position of point angle is about* |   `{x: 0, y: 0}` |
| `edge2`      | *position hash, second exterior point of angle* |   `{x: 12, y: 0}` |
```
//Example Usage
this._calculateAngle(
  {x: 12, y: 5},
  {x: 0, y: 0},
  {x: 12, y: 0}
)
  => 23
```

#### `_isHorizontal(points, margin)`
- **Returns `true` or `false` if `points` align horizontally within a `margin` of error**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `points`      | *array of position hashes* | `[{x:10, y:30}, {x:15, y:35}]` |
| `margin`      | *number, describes acceptable margin of error* |   `10` |
```
//Example Usage
this._isHorizontal(
  [
    {x: -1, y: 3},
    {x: 1,y: 3.1},
    {x: 3,y: 3.6}
  ],
  0.7
  )
  => true

this._isHorizontal(
  [
    {x: -1, y: 3},
    {x: 1,y: 2.2},
    {x: 3,y: 4.5}
  ],
  0.7
  )
  => false
```
#### `_isStacked(points, margin)`
- **Returns `true` or `false` if `points` align vertically within a `margin` of error**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `points`      | *array of position hashes* | `[{x:10, y:30}, {x:15, y:35}]` |
| `margin`      | *number, describes acceptable margin of error* |   `10` |
```
//Example Usage
this._isStacked(
  [
    {x: 3, y: -1},
    {x: 3.1,y: 1},
    {x: 3.6,y: 3}
  ],
  0.7
  )
  => true

this._isStacked(
  [
      {x: 3, y: -1},
      {x: 5,y: 1},
      {x: 1,y: 3}
  ],
  0.7
  )
  => false
```

#### `_isStraight(points, margin)`
- **Only use this method if a solution cannot be reached with `_isHorizontal` or `_isStacked`, as it's more computationally consumptive.**

- **Returns `true` or `false` if `points` form a straight line within a  `margin` of error**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `points`      | *array of position hashes* | `[{x:10, y:30}, {x:15, y:35}]` |
| `margin`      | *number, describes acceptable margin of error* |   `10` |
```
//Example Usage
this._isStraight(
  [
    {x: -1, y: -1},
    {x: 1,y: 1},
    {x: 3,y: 3},
    {x: 5,y: 5},
    {x: 7, y:7}
  ],
  1
)
  => true

this._isStraight(
  [
    {x: -1, y: -1},
    {x: 1,y: 5},
    {x: 3,y: 2},
    {x: 5,y: 1},
    {x: 7, y:6}
  ],
  1
)
  => false
```
