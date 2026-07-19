# Finah Nyamwaya — Week 05: DOM Manipulation

This week everything clicked — literally. I learned how to make pages respond to what you do. Click a button, something happens. Type in a box, it validates in real time. Add a task, it appears instantly. That's the DOM.

## Live Demo

[View Live Site](https://Finah2.github.io/iyf-s11-week-05-Finah2)

> 🎯 Main project: [School Task Manager](https://Finah2.github.io/iyf-s11-week-05-Finah2/todo.html)
> 🔬 DOM Practice: [dom-practice.html](https://Finah2.github.io/iyf-s11-week-05-Finah2/dom-practice.html)

## Features

- ✅ Element selection with getElementById, querySelector, querySelectorAll
- ✅ DOM traversal — parent, children, siblings
- ✅ Modifying text content, HTML, attributes and styles
- ✅ Creating and removing elements dynamically
- ✅ Click counter with + / - / reset buttons
- ✅ Keyboard shortcuts (Ctrl+S, Escape, Ctrl+Enter)
- ✅ Event bubbling demo
- ✅ Event delegation — one listener handles all tasks
- ✅ Real-time form validation with error messages
- ✅ Full school task manager (add, complete, delete, filter, edit)
- ✅ All 5 daily challenges

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+) — DOM API, Event handling
- GitHub Pages

## Project Structure

```
iyf-s11-week-05-Finah2/
├── index.html              (Week 5 overview page)
├── todo.html               (School task manager — main project)
├── dom-practice.html       (DOM exercises practice page)
├── about.html
├── projects.html
├── contact.html
├── styles.css
├── js/
│   ├── app.js              (To-do list application)
│   ├── dom.js              (Tasks 9.1–10.4)
│   └── daily-challenges.js (All 5 daily challenges)
└── README.md
```

## What I Learned

Before this week I could build pages that looked good. Now I can build pages that actually do something. The biggest shift was understanding that the DOM is just a tree of objects — and JavaScript can reach into that tree, grab anything, and change it.

Event delegation was the most interesting concept. Instead of adding a listener to every single task item, you add one listener to the parent and let the event bubble up. When you add new items later they automatically work too — no extra code needed.

## Challenges Faced

**Event bubbling confusion:** When I first added listeners to multiple nested elements I kept getting events firing multiple times. Understanding that clicks bubble UP the tree from child to parent made everything make sense.

**Real-time validation:** Getting the error messages to appear and disappear at the right time while typing took some trial and error. The key was listening to the `input` event not `change`.

## Future Improvements

- [ ] Add localStorage to save tasks between sessions
- [ ] Add drag and drop reordering
- [ ] Add task priority levels

## Contact

- Email: finahnyamwaya062@gmail.com
- GitHub: [@Finah2](https://github.com/Finah2)
