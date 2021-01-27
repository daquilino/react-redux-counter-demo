[good little redux cheatsheet](https://devhints.io/redux)


## NPM packages
redux
react-redux

# create a store (redux)
-- We create and use a global store (global state) in react by creating the following modules.  A common practice to organize them in a 'utils' directory.

actions.js - 
reducers.js
store.js - Our store (Global State)

# using a store (react-redux)
Provider Component - Similar to Context allows access to store to any of its children
Dispatches - dispathes use the reducers to mutate state by passing in actions
