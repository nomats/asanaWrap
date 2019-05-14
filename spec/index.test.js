const index_export = require('../index.js')

test('index exports arbitrary string', ()=>{
  expect(index_export()).toBe("Hello world, welcome to the demo package")
})
