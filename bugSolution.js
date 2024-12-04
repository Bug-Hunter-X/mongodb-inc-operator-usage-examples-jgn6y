```javascript
db.collection('counters').runCommand({findAndModify: 'counters', query: { _id: 'myCounter' }, update: { $inc: { seq: 1 } }, new: true, upsert: true}).seq
```