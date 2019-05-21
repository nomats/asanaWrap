const index_export = require('../index.js')
const Pose = require('../lib/pose.js')
test('index exports Pose class', ()=>{
  expect(index_export).toEqual(Pose)
})
