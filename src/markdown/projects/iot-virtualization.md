---
slug: "/projects/iot-virtualization"
title: "iOT Virtualization"
start_date: "2019/4"
end_date: "Current"
role: "Frontend Lead"
overview: "Helps students and researchers virtualize their iOT devices"
---

# Table of Contents

1. [What I Did](#did)
   1. [Authentication](#authentication)
   2. [Frontend Navigation](#frontendnav)
   3. [Projects Page](#projects)
   4. [Editor Page](#editor)
2. [What I Learned](#learned)

# What I Did <a name="did"></a>

Our frontend uses the following tech stack

- React
- Konva.js
- Immutable.js
- Mobx (originally Redux)

## Authentication <a name="authentication"></a>

My first task on the project was to choose a css framework and develop an
authentication experience. I prototyped two version of the authentication page
using [Bootstrap](https://getbootstrap.com/) and
[Material UI](https://material-ui.com/) and demo to the professor what
advantages and disadvantages each framework had. In the end, the professor
choose "Material UI".

We fetch a JWT token from the a REST endpoint using the username and passwords
stored in local storage when the app loads and then later on use the token
instead of password to interact with the backend. Obviously, storing passwords
directly in local storage is dangerous, so one of my teammate fixed it by
encrypting the password and then storing a year later.

## Frontend Navigation <a name="frontendnav"></a>

Then after we had can log in a user, I then started to setup the anatomy of the
project by configuring routes. The framework of choie here is
[React Router](https://reactrouter.com/), and the routes are setup like this

- `app`
  - `app/editor/:project`
  - `app/projects`
- `authentication`

In addition, during bootstrap, if the local storage does not contain username
and password, which are used to fetch the JWT token, we redirect the user to the
authentication page no matter which route they are trying to use

## Projects Page <a name="projects"></a>

Projects page was implemented as follows

1. Get the fetched JWT token
2. Use the REST endpoint to fetch a list of project IDs
3. For each project ID, fetch project meta data (would call `setState` at this
   stage)
4. Enumerate through the project metadatas and render html

## Editor Page <a name="editor"></a>

The circuit editor page consists of many components

- Circuit Canvas
- Code Editor
- Inspector Panel
- Tree View
- Toolbox
- History View
- Simulation Replay

In addition, we also have a splitter layout system like you see in most IDE
experiences.

I would talk about the ones I built below

### Circuit Canvas

Another team member built the originaly Circuit Canvas using
[Konva.js](https://konvajs.org/) and
[Konva React](https://konvajs.org/docs/react/index.html). However, there was
multiple issues

1. At that time we use Redux to manage states; sometimes we perform shallow copy
   and at other times we perform deep copy when an action occured; the copying
   code was very hard to read
2. The circuit canvas was hooked into the global redux store, making it not
   modular (What if we want to create a library from it?)

Since the team member left the project, I took the liberty to rebuild it using
React context and
[immutable.js](https://immutable-js.github.io/immutable-js/docs/#/). This way

- The component is modular
- immutable.js allows some optimizations in sub components
- immutable.js makes it easy to implement redo, undo

Later on, I also implemented **message bubbling** with konva-react's API to save
memory by avoiding duplicates of message handlers

In order for the circuit canvas to communicate with the rest of the editor page,
the datas of the canvas is grouped into what is known as a "circuit document".
The canvas component takes a `document` props from which it renders circuits,
and once a user edit has been performed, it emits the new document through a
callback, which is also received using a prop

### Inspector Panel

Before starting the inspector panel, I converted the project to using mobx, and
host "circuit document" in the mobx state object

To implement the inspector panel, an two states are saved in the mobx state
object

1. **An selected id**: used to find a specific object
2. **An selected type**: used to know where to find the object in the circuit
   document

The inspector panel would observe these two properties and then render inspector
content accordingly.

Once something is selected, the circuit canvas would emit selection events,
during the handling of which the **selected id** and **selected type** would be
set, trigger a redraw of the inspector panel.

### Tree View

The tree view was very simple. I just iterated through various properties of the
circuit document and draw render lists for each of them

### Toolbox

Template objects are used to add predefined circuit components to the circuit
document. In order to easily define circuit template, we used a decorator which
register the circuit template to a in memory registry.

```ts
@CircuitComponent({
  template: {
    // ...
  },
})
export default class Arduino {}
```

Then in the toolbox, I get the registry, enumerate through it and render
corresponding rows.

### Splitter Layout

Our splitter layout is implemented by using `react-splitter-layout`

### Simulation Replay

Simulation replay was done as the following:

1. Parse simulation response from the server
2. For each time stamp, create a new circuit document by modifying the circuit
   document created from the previous time stamp (`immutable.js`) and then save
   it
3. Display the time stamps in a list view and then feed the selected one to the
   circuit canvas

# What I Learned <a name="learned"></a>

This was my first time leading a part of a bigger project that is scheduled to
be used on campus and I have learned a lot from this:

## Technical

- Better understanding of React.js's component API
- Better Understanding of React component optimization using immutable objects
- Experiences using two similar yet different state management tools (redux and
  mobx)
- Experiences using Konva
- Experiences creating and using typescript decorators
- Experiences using material ui

## Social

- **Gained experience managing a project**: prioritize important tasks, onboard
  new members, and **most importantly, trust my teammates**
- Learned to effectively explain my engineering decisions like library choices and
  project structures
- Learned to effectively collaborate using Github
- Researched into areas that I had not touched before to resolve bugs. For
  example, we use react-konva to draw the circuits, and during one refactoring
  effort, I had to look into react-konva to address it being unable to take data
  from react-redux.
