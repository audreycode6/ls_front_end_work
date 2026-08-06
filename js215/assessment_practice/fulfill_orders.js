/* eslint-disable max-lines-per-function */
/*
A warehouse fulfills customer orders from a single shared inventory.

Write a function fulfillOrders(inventory, orders) that returns
 an array of the IDs of the orders that were successfully fulfilled.

inventory is an object mapping item names to the quantity in stock.

orders is an array of order objects. Each order has an id
 and an items array describing what the order needs.
*/

/* NOTES
**Problem:
  - in: 2 args inventory and orders
    - inventory: object mapping item names to the quantity in stock
      keys represents name of item
      values represent items total quantity
    - orders: array of order objects.
      Each order has:
        - an id (key -> "id", value -> string)
        - and an items array describing what the order needs
          array of objects has 2 keys:
            - "name" -> stringName
            - "qty" -> int\
  - out: return an array with string elements
    string element represents an "id" from orders that was fulfilled
  - ex:
    - fulfilled order: TODO
  - imp:
    - items will:
      - always hold an array of objects.
      - and will never be empty, each order will have atleast 1 item
        - and its objects will always have name and qty keys
          and qty will always be postive number
    - attempt to fulfill orders in the order they appear in the
     orders array. When an order is fulfilled, the inventory for
      those items is depleted.
    - return empty array if none fulfilled

  - ?:
    - will items always hold an array of objs?
      INT: items will always hold an array of objects.
    - will it ever be empty?
      INT: No, it will not be empty — each order will have at least one item
    - will it always have name and qty keys
      INT: Yes, each object will always have name and qty keys
    - will the qty key always be a whole postive number?
      INT: Yes, qty will always be a whole positive number.
    - are orders complete in the same order of the orders items?
      - e.g if duplicate items within orders and not enough of
       the item quantity to fulfill both orders do
        i fulfill order in order of the ords obj? - yes
    - will individual itemsObjects ever have multiples of same item names?
    INT: No, within a single order's items array, each item
    name will appear at most once.
    You will not see duplicate item names within the same order.

**Brainstorm
- for each of the order objs in orders:
  - {
    id: 'A1',
    items: [
      { name: 'widget', qty: 3 },
      { name: 'gizmo', qty: 1 },
    ],
  }

- get the items array: orderObj['items']
 - [
      { name: 'widget', qty: 3 },
      { name: 'gizmo', qty: 1 },
    ]
  - store in var: itemsArray = orderObj['items']

- for each orderObj in items array:
  - { name: 'widget', qty: 3 },
    { name: 'gizmo', qty: 1 },
  - extract the name and qty values: itemsArray['name'], itemsArray['qty']
    - itemName = itemsArray['name']
    - itemQty = itemsArray['qty']
  - deduct the corresponding value to itemname within inventory
  - maybe store the items in array that get fulfilled
    - if itemQty <= inventory[itemName]
    add that to an completed array
    - if completedArray.length === currentItemsArray.length
      then order fulfilled and can add the currentItemsArray['id']


** Example/ usage:
const inventory = { widget: 5, gizmo: 2, sprocket: 1 };

const orders = [
  {
    id: 'A1',
    items: [
      { name: 'widget', qty: 3 },
      { name: 'gizmo', qty: 1 },
    ],
  },
  { id: 'A2', items: [{ name: 'widget', qty: 3 }] },
  { id: 'A3', items: [{ name: 'sprocket', qty: 1 }] },
];

fulfillOrders(inventory, orders); // ['A1', 'A3']

** Data struc
nested loop: orders elements -> orderElements['items']
- iterate though orders elements: object with id and items
- iterate through orderElements['items]:
holds list of objs with name and qty

- use indexing by key to retreive relevant values
- make copy of inventory to have to decrease and
compare against currentItems qty

** Algo
- copy inventory in order to not mutate
- have empty array defined to store fulfilledORders
- nestedloop to iterate through each of the orders
  - completeItemsArray: define empty array to hold item names that are
  fufilld in order
  - for each item in items
    - decrease inventoryCopy[itemName] by itemQty
    - if inventoryCopy[itemName]'s qty is still >= 0
    then itemNAme is fufilled in current order
      - add itemName to fulfilledOrder
  - if completeItemsArray.length === currentItems.length
    - then add items['id'] to fulfilledOrders
- return fulfilledORders

 */

function fulfillOrders(inventory, orders) {
  let inventoryCopy = structuredClone(inventory);
  let fulfilledOrders = [];

  orders.forEach((orderObj) => {
    let orderId = orderObj['id'];
    let orderItems = orderObj['items'];
    let completeItemsArray = [];

    orderItems.forEach((itemObj) => {
      let itemName = itemObj['name'];
      let itemQty = itemObj['qty'];
      inventoryCopy[itemName] -= itemQty;

      if (inventoryCopy[itemName] >= 0) {
        completeItemsArray.push(itemName);
      }
    });
    if (completeItemsArray.length === orderItems.length) {
      fulfilledOrders.push(orderId);
    }
  });
  return fulfilledOrders;
}

//TESTS:
const inventory = { widget: 5, gizmo: 2, sprocket: 1 };
const inventoryNotFulfilled = { widget: 3, gizmo: 2 };
const inventoryNotFulfilled2 = { widget: 2, gizmo: 2 };

const orders = [
  {
    id: 'A1',
    items: [
      { name: 'widget', qty: 3 },
      { name: 'gizmo', qty: 1 },
    ],
  },
  { id: 'A2', items: [{ name: 'widget', qty: 3 }] },
  { id: 'A3', items: [{ name: 'sprocket', qty: 1 }] },
];

console.log(fulfillOrders(inventory, orders)); // ['A1', 'A3']
console.log(fulfillOrders(inventoryNotFulfilled, orders)); // ['A1']
console.log(fulfillOrders(inventoryNotFulfilled2, orders)); // []
