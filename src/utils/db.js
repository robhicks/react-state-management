import localforage from 'localforage'

localforage.setDriver([localforage.INDEXEDDB])

export default localforage

export const get = localforage.getItem
export const set = localforage.setItem
export const del = localforage.deleteItem
