const db = require('APP/db')

const seedPosts = () => db.Promise.map([
  {title: 'so many', urlTitle: 'god@example.com', content: '1234', status: 'offer', tags: ['english', 'coding']},
  {title: 'Barack Obama', urlTitle: 'barack@example.gov', content: '1234', status: 'offer', tags: ['coding', 'spanish']},
], post => db.model('post').create(post))

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', location: 'New York'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', location: 'New York'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(posts => console.log(`Seeded ${posts.length} posts OK`))
  .then(seedPosts)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
