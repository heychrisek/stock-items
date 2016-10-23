# stock-items

This is a business inventory front end, built using React components and Redux state management. It enables a business owner to view all existing stock items and add new items to the inventory.

The project is simply a front end implementation (non-persistent), but the addition of `redux-thunk` and async actions would enable it to persist and hydrate with a remote server.

![add_item.gif](https://s12.postimg.org/i8jr4oid9/add_item.gif)

The form enforces simple validation to prevent invalid items from being added:

![invalid.gif](https://s12.postimg.org/7biffwvlp/invalid.gif)

The project is styled using flexbox and is responsive at small screen sizes using a simple `@media` query:

![responsive.gif](https://s12.postimg.org/axo8sk1z1/responsive.gif)

## Usage

Clone this repository and run `npm install`, then run `npm run start`. For the production build, run `npm run build`.

## Tests

This project is fully tested (only exception is internal onChange functions of the `StockItemsForm` component) using Jest, Enzyme, and Sinon:

![test_coverage.png](https://s12.postimg.org/a9fe9m399/test_coverage.png)

Component acceptance tests are available for `StockItemsList` and `StockItemsForm`:

![list.png](https://s12.postimg.org/f5j11b3el/list.png)

![form.png](https://s12.postimg.org/t9ew9pam5/form.png)

## Roadmap

Future improvements include:

 - [ ] More robust form validation (coerce price string to number)
 - [ ] Cross-browser testing (e.g., [working date widget in Firefox](http://caniuse.com/#search=date))
 - [ ] 100% test coverage (test internal change handlers for `StockItemsForm`)
 - [ ] Table sorting/filtering by column and value
 - [ ] ...
