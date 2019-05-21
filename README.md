# Contributors
For anyone looking to contribute to the codebase, it's very encouraged! Primarily contribution entails adding your own pose checkers to the module. Any other spots for improvement should be made as seperate pull requests and not bundled in with a pose checker addition.

## Adding a pose

All pose checker functions are created by `CheckerConstructor` classes. To add a pose, create a new `CheckerConstructor` class in `/lib/pose_checkers` which extends the class `PoseCheckerConstructor`, found in `/lib/pose_checkers/pose_checker_constructor.js`.

- An easy to use template can be found in `/contributor_resources/template_checker_constructor.js`, but note that **the file must be copied to the correct directory**.

Change the `Template` in `TemplateCheckerConstructor` to the name of the yoga pose you have chosen. Naming convention follows javascript's XXXXX case for class names.

Change the contents of the `checker` function to implement your pose checks, making sure your function's output is in-keeping with convention, and your pose is ready to be imported into `Pose`! Nice!

## Implementation Convention
Checker methods must return the form of XXXXXXX.

## Testing + Sample Data
## Importing into `Pose`
## Strictness
### `PoseCheckerConstructor` methods
All methods extended from the `PoseCheckerConstructor` class to help build checker functions.
#### `_isPointBetween(point, boundary)`
- **Returns `true` or `false` if `point` is between values in  `boundary`**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `point`      | *simple number type* | `5` |
| `boundary`      | *array of length two* |   `[3,7]` |
```
//Example Usage
this._isPointBetween(5, [3,7])
  => true

this._isPointBetween(3, [5,7])
  => false
```
### `_isStraight(points, margin)`
### `_isHorizontal(points, margin)`
- **Returns `true` or `false` if `points` align horizontally within a `margin` of error**


| Arg        | description           | example  |
| ------------- |:-------------:| -----:|
| `point`      | *simple number type* | `5` |
| `boundary`      | *array of length two* |   `[3,7]` |
### `_isStacked(points, margin)`
### `_calculateAngle(edge1, middle, edge2)`
convention over config, so any PRs which don't adhere will be rejected
