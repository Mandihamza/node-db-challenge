exports.seed = async function(knex) {
  await knex('tasks').insert([
    {
      "id": 1,
      "description": "Design blueprint",
      "notes": "Use AutoCAD.",
      "is_completed": true,
      "project_id": 2
    }, {
      "id": 2,
      "description": "Create project timeline",
      "notes": "Use Trello.",
      "is_completed": false,
      "project_id": 3
    }, {
      "id": 3,
      "description": "Decide on materials",
      "notes": "reclaimed barn wood",
      "is_completed": true,
      "project_id": 5
    }, {
      "id": 4,
      "description": "Create mockup",
      "notes": "High fidelity, Use AutoCAD.",
      "is_completed": true,
      "project_id": 10
    }, {
      "id": 5,
      "description": "Order supplies",
      "notes": "Refer to approved vendors list.",
      "is_completed": false,
      "project_id": 8
    }, {
      "id": 6,
      "description": "Create estimate",
      "notes": "Estimate total cost of project",
      "is_completed": true,
      "project_id": 3
    }, {
      "id": 7,
      "description": "Hire welding contractor",
      "notes": "Need specialty welder for frame.",
      "is_completed": false,
      "project_id": 8
    }, {
      "id": 8,
      "description": "Create estimate",
      "notes": "",
      "is_completed": true,
      "project_id": 10
    }, {
      "id": 9,
      "description": "Order supplies",
      "notes": "Refer to approved vendors list.",
      "is_completed": false,
      "project_id": 9
    }, {
      "id": 10,
      "description": "Request payment",
      "notes": "Payments are behind on this one.",
      "is_completed": true,
      "project_id": 4
    }, {
      "id": 11,
      "description": "Create mockup",
      "notes": "Refer to client breif.",
      "is_completed": true,
      "project_id": 6
    }, {
      "id": 12,
      "description": "Decide on materials",
      "notes": "Vivamus vestibulum sagittis sapien.",
      "is_completed": true,
      "project_id": 7
    }, {
      "id": 13,
      "description": "Decide on materials",
      "notes": "Donec dapibus. Duis at velit eu est congue elementum.",
      "is_completed": true,
      "project_id": 2
    }, {
      "id": 14,
      "description": "Create project timeline",
      "notes": "",
      "is_completed": true,
      "project_id": 8
    }, {
      "id": 15,
      "description": "Design blueprint",
      "notes": "In eleifend quam a odio.",
      "is_completed": false,
      "project_id": 1
    }, {
      "id": 16,
      "description": "Design blueprint",
      "notes": "",
      "is_completed": false,
      "project_id": 6
    }, {
      "id": 17,
      "description": "Contact vendor",
      "notes": "Need a new lot of materials for frame.",
      "is_completed": true,
      "project_id": 8
    }, {
      "id": 18,
      "description": "Order supplies",
      "notes": "",
      "is_completed": false,
      "project_id": 10
    }, {
      "id": 19,
      "description": "Apply epoxy",
      "notes": "Use the high temp with correct dye",
      "is_completed": false,
      "project_id": 3
    }, {
      "id": 20,
      "description": "Sand all edges",
      "notes": "Too many spots missed last round.",
      "is_completed": true,
      "project_id": 6
    }, {
      "id": 21,
      "description": "Confirm height with customer",
      "notes": "Was it 36 or 42?",
      "is_completed": false,
      "project_id": 3
    }, {
      "id": 22,
      "description": "Attached legs to base",
      "notes": "Use screws from new lot.",
      "is_completed": true,
      "project_id": 5
    }, {
      "id": 23,
      "description": "Test fit record collection",
      "notes": "Make sure theres room left to add more records later.",
      "is_completed": false,
      "project_id": 4
    }, {
      "id": 24,
      "description": "Confrim inlay design",
      "notes": "Refer to customer notes.",
      "is_completed": false,
      "project_id": 1
    }, {
      "id": 25,
      "description": "Make dog bed for goodest by ever",
      "notes": "Make it the goodest bed ever!",
      "is_completed": false,
      "project_id": 10
    }
  ])
}
