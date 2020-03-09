exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      "id": 1,
      "name": "Coffee table",
      "description": "Coffee table with resin inlay.",
      "is_completed": false
    }, {
      "id": 2,
      "name": "Chair",
      "description": "Chair for standard height kitchen table.",
      "is_completed": false
    }, {
      "id": 3,
      "name": "Kitchen table",
      "description": "Standard height kitchen table, seats 8.",
      "is_completed": false
    }, {
      "id": 4,
      "name": "Vinyl record shelf",
      "description": "Holds records and a record player..",
      "is_completed": true
    }, {
      "id": 5,
      "name": "Tall kitchen table",
      "description": "Bar height kitchen table.",
      "is_completed": true
    }, {
      "id": 6,
      "name": "Tall chair",
      "description": "Bar height kitchen chair.",
      "is_completed": false
    }, {
      "id": 7,
      "name": "Love seat",
      "description": "Extra wide love seat.",
      "is_completed": false
    }, {
      "id": 8,
      "name": "Couch",
      "description": "Couch with built in leg rest.",
      "is_completed": false
    }, {
      "id": 9,
      "name": "Cat tree house",
      "description": "A tall cat tree house for indoor use.",
      "is_completed": false
    }, {
      "id": 10,
      "name": "Dog bed",
      "description": "Dog bed with memory foam.",
      "is_completed": true
    }
  ])
}
