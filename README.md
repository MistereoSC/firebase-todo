# firebase-todo

ToDo Lists are probably the `Hello World` project of learning a new framework etc.<br>
This is my Xth ToDo list after trying out plain JS, Vue and other languages. This time to learn the basics of Firebase.
<br><br>
Firebase credentials go into the /src/firebase.js file<br>
Collection name: 'tasks' <br>
Documents: 'done': Boolean, 'message': String <br>
<br>
![Screenshot](https://i.imgur.com/Yb7YdFn.png)

## Project Setup
Firbase Emulation Suite required for Development Environment

```sh
npm install -g firebase-tools
firebase init emulators
npm run emulate
```

```sh
npm install
npm run dev     (development environment)
npm run serve   (production environment)
```
