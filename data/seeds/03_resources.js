exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      "id": 1,
      "name": "AutoCAD",
      "description": "AutoCAD for Mac."
    }, {
      "id": 2,
      "name": "Trello",
      "description": "Used to create and track project tasks."
    }, {
      "id": 3,
      "name": "Lumber",
      "description": "Reclaimed from local sources."
    }, {
      "id": 4,
      "name": "Epoxy resin",
      "description": "Food safe epoxy resin."
    }, {
      "id": 5,
      "name": "Metal nails",
      "description": "Hand forged square nails."
    }, {
      "id": 6,
      "name": "Faux cork leather",
      "description": "Vegan leather derived from cork."
    }, {
      "id": 7,
      "name": "Faux apple leather",
      "description": "Vegan leather derived from apple skins."
    }, {
      "id": 8,
      "name": "Memory foam sheets",
      "description": "10' X 10' Sheets."
    }, {
      "id": 9,
      "name": "Memory foam crumbles",
      "description": "Crumbled memory foam."
    }, {
      "id": 10,
      "name": "Wooden nails",
      "description": "Hand carved square nails ."
    }, {
      "id": 11,
      "name": "Drill",
      "description": "Hand drill."
    }, {
      "id": 12,
      "name": "Drill bits",
      "description": "Full set of standard drill bits."
    }, {
      "id": 13,
      "name": "Safety glasses",
      "description": "Wrap around safety glasses with UV tint."
    }, {
      "id": 14,
      "name": "Hammer",
      "description": "Standard hammer."
    }, {
      "id": 15,
      "name": "Heat gun",
      "description": "High temp heat gun."
    }
  ])
}
