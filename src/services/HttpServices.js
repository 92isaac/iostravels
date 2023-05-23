import axios from "axios";

const _apiRequest = async (type, url, data = {}, options) => {
  // Set options
  if (!options) {
    options = { headers: null, showMsg: true };
  }

  const endpoint_url = `${process.env.REACT_APP_API_GATEWAY}/${url}`;
  let service;
  let config;

  //@TODO add token
  switch (type.toLowerCase()) {
    case "get":
      let queryString = objectToQueryString(data);
      // Append querystring to url
      let queryUrl = endpoint_url + queryString;
      // make request
      service = axios.get(queryUrl, config); // no need for data as the data is already in the queryString
      break;

    case "post":
      // Make request
      service = axios.post(endpoint_url, data, config);
      break;

    case "put":
      // Make request
      service = axios.put(endpoint_url, data, config);
      break;

    case "delete":
      service = axios.get(endpoint_url + objectToQueryString(data), config); // no need for data as the data is already in the queryString
      break;

    case "patch":
      service = axios.patch(endpoint_url, data, config);
      break;

    default:
      break;
  }

  // Running axios
  try {
    const response = await service;
    return response;
  } catch (error) {
    return error.response;
  }
};

// Convert data object to queryString
function objectToQueryString(obj = {}) {
  // if there is a valid data object
  if (Object.keys(obj).length > 0) {
    let str = [];
    Object.keys(obj).map((name) => {
      return str.push(
        `${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`
      );
    });
    return str.join("&");
  } else {
    // return empty string
    return "";
  }
}

// Main Container
const HttpServices = {
  get(url, data = {}, options) {
    return _apiRequest("get", url, data, { ...options });
  },

  post(url, data = {}, options) {
    return _apiRequest("post", url, data, { ...options });
  },

  put(url, data = {}, options) {
    return _apiRequest("put", url, data, { ...options });
  },

  delete(url, data = {}, options) {
    return _apiRequest("delete", url, data, { ...options });
  },

  patch(url, data = {}, options) {
    return _apiRequest("post", url, data, { ...options });
  },
};

export default HttpServices;
