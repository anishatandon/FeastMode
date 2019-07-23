import React from 'react'

const orderTypes = {
  Delivery: 'Delivery',
  Carryout: 'Carryout',
}

/**
 * Get all stores near an address.
 * @param {string} orderType - The type of order. Can be Delivery or Carryout.
 * @param {string} cityRegionOrPostalCode - The postal code or City, State, Zip.
 * @param {string} [streetAddress] - The house number and street name.
 * @return {Promise<object>} The list of stores near the given address.
 */
async function getStoresNearAddress(
  orderType,
  cityRegionOrPostalCode = '',
  streetAddress = '',
) {
  const response = await fetch(`/dominos?type=${orderType}&c=${cityRegionOrPostalCode}&s=${streetAddress}`);
  return response.json();
}

/**
 * Get the nearest store that delivers to a given address.
 * @param {string} cityRegionOrPostalCode - The postal code or City, State, Zip.
 * @param {string} streetAddress - The house number and street name.
 * @return {Promise<object>} The nearest store that will deliver to the given address.
 */
async function getNearestDeliveryStore(
    cityRegionOrPostalCode = '',
    streetAddress = '',
  ) {
  const storesResult = await getStoresNearAddress(
    orderTypes.Delivery,
    cityRegionOrPostalCode,
    streetAddress,
  );
  return storesResult.find(store => store.AllowDeliveryOrders);
} 

/**
 * Get all menu info for a given store including Product Codes, Options and Coupons
 * @param {string} storeId - The StoreID of the given store (Can be found using getStoresNearAddress or getNearestDeliveryStore).
 * @return {Promise<object>} The menu for the given store.
 */
async function getStoreMenu(storeId) {
  const response = await fetch(`/store_menu?id=${storeId}`);
  return response.json();
}

/**
 * Validate the information for a given Order.
 * @param {object} order - The order to validate.
 * @return {Promise<object>} The validation response.
 */
async function validateOrder(order) {
  const response = await fetch(`/order?order=${JSON.stringify(order)}&endpoint=validate-order`);
  return response.json();
}

/**
 * Get the total price for a given Order. (Including Coupon discounts and added Tax).
 * You should make sure your order is valid with validateOrder before calling priceOrder.
 * @param {object} order - The order to price.
 * @return {Promise<object>} The pricing response.
 */
async function priceOrder(order) {
  const response = await fetch(`/order?order=${JSON.stringify(order)}&endpoint=price-order`);
  return response.json();
}

(async () => {
  const storesResult = await getStoresNearAddress(orderTypes.Delivery, 'Claremont, CA, 91711', '')
  console.log(storesResult)
  const storeResult = await getNearestDeliveryStore('Claremont, CA, 91711', '');
  console.log(storeResult)
  const storeMenu = await getStoreMenu(storeResult.StoreID);
  console.log(storeMenu)

  const order = {
    Order: {
      Address: { // <- Update this
        Street: '301 E. Twelfth St.',
        City: 'Claremont',
        Region: 'CA',
        PostalCode: '91711',
        Type: 'House',
        StreetName: 'E Twelfth St',
        StreetNumber: '301',
      },
      // Specify any coupons here, leave empty if not using a coupon
      Coupons: [{}],
      Email: 'ilistarosales@g.hmc.edu', // <- Update this
      FirstName: 'Ignacio', // <- Update this
      LastName: 'Lista', // <- Update this
      LanguageCode: 'en',
      OrderChannel: 'OLO',
      OrderMethod: 'Web',
      OrderTaker: null,
      Payments: [],
      Phone: '9096676560', // <- Update this
      PhonePrefix: '1', // <- Update this
      // An array of products. Find the corresponding code and available options in the menu response.
      Products: [{
        Code: 'S_PIZPX',
        Qty: 1,
        isNew: true,
        Options: {
          X: {
            '1/1': '1',
          },
          C: {
            '1/1': '1',
          },
          Cp: {
            '1/1': '1',
          },
          P: {
            '1/2': '1',
          },
          Cs: {
            '2/2': '1',
          },
        },
      }],
      ServiceMethod: orderTypes.Delivery, // <- Update this can be Delivery or Carryout
      SourceOrganizationURI: 'order.dominos.com',
      StoreID: storeResult.StoreID,
      Tags: {},
      Version: '1.0',
      NoCombine: true,
      Partners: {},
      OrderInfoCollection: [],
    },
  }

  const orderValid = await validateOrder(order)
  console.log(orderValid)
  order.Order.OrderID = orderValid.Order.OrderID // get the generated orderID from the response
  console.log(order.Order.OrderID)
  const pricedOrder = await priceOrder(orderValid)
  console.log(order)
  console.log(pricedOrder)
  // const amount = pricedOrder.Order.Amounts.Customer // get total amount for order
  // console.log(amount)
})()

export const App = () => {
  return <div> Hello World </div>
}