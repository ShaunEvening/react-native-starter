export const API_ROOT = __DEV__
  ? 'http://localhost:8080' // Dev mode api url root
  : 'http://localhost:8081'; // Prod mode api url root

const checkHTTPResponse = res =>
  res.status < 400
    ? Promise.resolve(res)
    : Promise.reject(res);

const parseResponseToJson = res => res.json();

export const fetchGet = (url: string, token: string): void =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

export const fetchPost = (url: string, token: string, body: {}): void =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body,
  });

export const fetchPut = (url: string, body: {}, token?: string, customHeaders?: {}) =>
  fetch(
    url,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token || '',
        ...customHeaders,
      },
      body: JSON.stringify(body),
    })
    .then(checkHTTPResponse)
    .then(parseResponseToJson);

export const fetchDelete = (url: string, token: string, customHeaders?: {}) =>
  fetch(
    url,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token || '',
        ...customHeaders,
      },
    })
    .then(checkHTTPResponse)
    .then(parseResponseToJson);
