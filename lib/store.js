const store = {};

export function saveLink(id, url) {
  store[id] = url;
}

export function getLink(id) {
  return store[id];
}
