/*
 * Copyright 2018, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * HealthCheck method
 * https://developers.google.com/maps-booking/reference/rest-api-v3/healthcheck-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function HealthCheck(requestBody) {
  // TO-DO: add any additional server checks, e.g. database status
  // ...
  // Return a response similar to gRPC Health Check
  // https://github.com/grpc/grpc/blob/master/doc/health-checking.md
  var res = {status: 'SERVING'};
  const responseBody = JSON.stringify(res);
  return responseBody;
}

/**
 * CheckAvailability method
 * https://developers.google.com/maps-booking/reference/rest-api-v3/checkavailability-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function CheckAvailability(requestBody) {
  // CheckAvailabilityRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g.
  //   (req.slot !== null && req.slot.merchant_id !== null)
  // TO-DO: add code to verify the provided slot availability
  // ...
  // CheckAvailabilityResponse
  var resp = {
    slot: req.slot,
    count_available: 1,
    duration_requirement: 'DURATION_REQUIREMENT_UNSPECIFIED'
    // TO-DO: populate proper values and other fields, such as
    // availability_update
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}

/**
 * CreateBooking method
 * https://developers.google.com/maps-booking/reference/rest-api-v3/createbooking-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function CreateBooking(requestBody) {
  // CreateBookingRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g. (req.user_information !== null)
  // TO-DO: add code to create a booking
  // ...
  // CreateBookingResponse
  var resp = {
    booking: {
      booking_id: '1234',
      slot: req.slot,
      user_information: {user_id: req.user_information.user_id},
      payment_information: req.payment_information,
      status: 'CONFIRMED'
    }
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}

/**
 * UpdateBooking method
 * https://developers.google.com/maps-booking/reference/rest-api-v3/updatebooking-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function UpdateBooking(requestBody) {
  // UpdateBookingRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g.
  //   (req.booking !== null && req.booking.booking_id !== null)
  // TO-DO: add code to update the provided booking
  // ...
  // UpdateBookingResponse
  var resp = {
    booking: {booking_id: req.booking.booking_id, status: req.booking.status}
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}

/**
 * GetBookingStatus method
 * https://developers.google.com/maps-booking/reference/rest-api-v3/getbookingstatus-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function GetBookingStatus(requestBody) {
  // GetBookingStatusRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g. (req.booking_id !== null)
  // TO-DO: add code to retrieve the booking status
  // ...
  // GetBookingStatusResponse
  var resp = {
    booking_id: req.booking_id,
    booking_status: 'BOOKING_STATUS_UNSPECIFIED'
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}

/**
 * ListBookings method
 * https://developers.google.com/maps-booking/reference/rest-api-v3/listbookings-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function ListBookings(requestBody) {
  // ListBookingsRequest
  const req = JSON.parse(requestBody);
  console.log(`ListBookings() for user_id: ${req.user_id}`);
  // TO-DO: validate req, e.g. (req.user_id !== null)
  // TO-DO: add code to fetch all bookings for the user_id
  // ...
  // ListBookingsResponse
  var resp = {bookings: [{}]};
  const responseBody = JSON.stringify(resp);
  return responseBody;
}


/**
 * CheckOrderFulfillability method (Order-based Booking Server only)
 * https://developers.google.com/maps-booking/reference/rest-api-v3/checkorderfulfillability-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function CheckOrderFulfillability(requestBody) {
  // CheckOrderFulfillabilityRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g. (req.merchant_id !== null)
  // TO-DO: add code to validate individual items and calculate the total price
  // ...
  // CheckOrderFulfillabilityResponse
  var resp = {
    fulfillability: {
      result: 'CAN_FULFILL',
      item_fulfillability: [{}]  // individual item fullfilability
    },
    fees_and_taxes: {
      price_micros: 1000000,  // total price in micros, e.g. 1USD = 1000000
      currency_code: 'USD'
    }
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}

/**
 * CreateOrder method (Order-based Booking Server only)
 * https://developers.google.com/maps-booking/reference/rest-api-v3/createorder-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function CreateOrder(requestBody) {
  // CreateOrderRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g. (req.user_information !== null)
  // TO-DO: check for req.idempotency_token uniqueness
  // TO-DO: create and process the order
  // ...
  // CreateOrderResponse
  var resp = {
    order: {
      order_id: '123',  // new order id
      merchant_id: req.order.mercant_id,
      item: [{}]  // populate individual LineItems, etc.
    }
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}

/**
 * ListOrders method (Order-based Booking Server only)
 * https://developers.google.com/maps-booking/reference/rest-api-v3/listorders-method
 * @param {string} requestBody - HTTP request body
 * @return {string} HTTP response body
 */
function ListOrders(requestBody) {
  // ListOrdersRequest
  const req = JSON.parse(requestBody);
  // TO-DO: validate req, e.g. if ("user_id" in req || "order_ids" in req)
  // TO-DO: fetch orders for req.user_id or a list of req.order_ids
  // ...
  // ListOrdersResponse
  var resp = {
    order: [{}]  // populate all orders for the user_id or order_ids
  };
  const responseBody = JSON.stringify(resp);
  return responseBody;
}


module.exports.HealthCheck = HealthCheck;
// Booking-flow Booking Server methods
module.exports.CheckAvailability = CheckAvailability;
module.exports.CreateBooking = CreateBooking;
module.exports.UpdateBooking = UpdateBooking;
module.exports.GetBookingStatus = GetBookingStatus;
module.exports.ListBookings = ListBookings;
// Order-based Booking Server methods
module.exports.CheckOrderFulfillability = CheckOrderFulfillability;
module.exports.CreateOrder = CreateOrder;
module.exports.ListOrders = ListOrders;
