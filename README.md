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
convention over config, so any PRs which don't adhere will be rejected
