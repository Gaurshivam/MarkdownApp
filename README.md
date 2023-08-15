# Assignments-React-States

## React-States-001

- **Complete the following** **using React States & JSX.**
- **Implement the dark mode to the following webpage given below.**
- **This is the default mode which is initially light**

**After clicking on the toggle button, the page should get re-rendered and the color should change to dark**


# What is a State?
->The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

->Hooks are a set of predefined functions that  let you use state and other React features without writing a Function .
->Hooks are a new addition in React 16.8. 

# What is UseState? 
->UseState is one of the built-in react hooks available in 0.16.7 version.
->During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

# What is SetState ?
->The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.



## React-States-002

- **Complete this markdown using React States & JSX**
- **Implement a markdown editor as shown below :**

# What is this?
This package is a React component that can be given a string of markdown that it’ll safely render to React elements. You can pass plugins to change how markdown is transformed to React elements and pass components that will be used instead of normal HTML elements.

to learn markdown, see this cheatsheet and tutorial
to try out react-markdown, see our demo


# Install Command
npm i react-markdown


# Ex:-
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)