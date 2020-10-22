const db = require('../db/index');
const app = require('./app');

const port = 4884;

db.sync({
  force: false,
  logging: false
})
.then(() => {
  app.listen(port, () => {
    console.log(`dockside at port ${port}`);
  })
})
.catch((err) => {
  console.log('your error: ', err);
});
