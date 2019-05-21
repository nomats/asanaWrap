# Contributors
For anyone looking to contribute to the codebase, it's very encouraged! Primarily contribution entails adding your own pose checkers to the module. Any other spots for improvement should be made as seperate pull requests and not bundled in with a pose checker addition.

## Adding a new pose checker

All pose checker functions are created by `CheckerConstructor` classes. To add a pose, create a new `CheckerConstructor` class in `/lib/pose_checkers` which extends the class `PoseCheckerConstructor`, found in `/lib/pose_checkers/pose_checker_constructor.js`.

- An easy to use template can be found in `/contributor_resources/template_checker_constructor.js`, but note that **the file must be copied to the correct directory**.

Change the `Template` in `TemplateCheckerConstructor` to the name of the yoga pose you have chosen. Naming convention follows javascript's XXXXX case for class names.

Change the contents of the `checker` function to implement your pose checks, making sure your function's output is in-keeping with convention, and your pose is ready to be imported into `Pose`! Nice!

There are a number of helpers to make implementing your pose easier, so make sure to read the section on BODYPART and POSECHECKERCONSTRUCTOR helper methods, and take a look at some of the pre-existing `CheckerCondtructors` to get you started.

## Implementation Convention
Checker methods must return the form of XXXXXXX.

## Testing + Sample Data
## Importing into `Pose`
## Strictness
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
