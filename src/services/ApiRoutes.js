const Auth_urls = {
  sign_up: "auth/signup",
  sign_in: "auth/sessions",
  forgot_password: "auth/password-reset/request",
  reset_password: "auth/password-reset",
};

const User_urls = {};

const package_urls = {
  all_packages: "packages",
  get_package: "packages",
  book_package: "bookings/packages"
}

const payment_urls = {
  flight_pay: "payments/initialize-payment"
}

const Flight_urls = {
  search_flight: "flights/search",
  book_flight: "flights/book-flight",
  getPrice: "flights/confirm-price",
};

const ApiRoutes = {
  auth: Auth_urls,
  user: User_urls,
  flights: Flight_urls,
  package: package_urls,
  payment: payment_urls
};

export default ApiRoutes;
