const db = require('APP/db')

const seedPosts = () => db.Promise.map([
  {title: 'Need help practing data structures', urlTitle: 'god@example.com', content: 'Hi, I\'m having trouble understanding data strucutres', status: 'request', tags: ['english', 'coding', 'data strucutres']},
  {title: 'I want to learn to code-don\'t know where to start', urlTitle: 'barack@example.gov', content: 'I would like to learn how to code, but I don\'t even know where to begin', status: 'request', tags: ['coding', 'spanish']},
  {title: 'Need help with interview prep', urlTitle: 'barack@example.gov', content: 'I\'ve got a big interview coming up and I don\'t feel ready!', status: 'request', tags: ['coding', 'english', 'New York']},

  {title: 'Public Office Hours', urlTitle: 'bgates@microsoft.com', content: 'Feel free to come meet up and ask me for help with anything you need. -Bill Gates', status: 'offer', tags: ['coding', 'english', 'Seattle']},
  {title: 'Learn Javascript', urlTitle: 'barack@example.gov', content: 'I\'m an experienced JS developer and I\'m excited to share what I know', status: 'offer', tags: ['coding', 'spanish']},
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
