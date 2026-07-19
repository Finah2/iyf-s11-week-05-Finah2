// ================================
// TASK 9.1 — Selecting Elements
// ================================

// getElementById — gets one element by its id
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName — gets all elements with that class
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName — gets all elements of that tag
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector — gets the FIRST match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector (first nav link):", firstLink);

// querySelectorAll — gets ALL matches
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll (all nav links):", allLinks);

// Practice selections
const h1 = document.querySelector("h1");
console.log("1. The h1:", h1);

const allContent = document.querySelectorAll(".content");
console.log("2. All .content elements:", allContent);

const contactForm = document.getElementById("contact-form");
console.log("3. The contact form:", contactForm);

const emailInput = document.getElementById("email");
console.log("4. Email input:", emailInput);

const navItems = document.querySelectorAll(".nav-list li");
console.log("5. All nav list items:", navItems);

const firstNavLink = document.querySelector(".nav-link");
console.log("6. First nav link:", firstNavLink);

const allParas = document.querySelectorAll("p");
const lastPara = allParas[allParas.length - 1];
console.log("7. Last paragraph:", lastPara);


// ================================
// TASK 9.2 — Traversing the DOM
// ================================

const nav = document.querySelector("nav");

// Parent
console.log("Nav parent:", nav.parentElement); // header

// Children
console.log("Nav children:", nav.children);
console.log("Nav first child:", nav.firstElementChild);
console.log("Nav last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log("Article next sibling:", article.nextElementSibling);       // section
console.log("Article previous sibling:", article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("All links inside nav:", navLinks);

// Practice tasks
// 1. Header → nav inside it
const headerEl = document.querySelector("header");
console.log("Nav inside header:", headerEl.querySelector("nav"));

// 2. First nav-link → parent li
const firstLink2 = document.querySelector(".nav-link");
console.log("Parent li of first nav-link:", firstLink2.parentElement);

// 3. Article → next sibling section
const articleEl = document.querySelector("article");
console.log("Section after article:", articleEl.nextElementSibling);

// 4. ul → all child li elements
const ul = document.querySelector(".nav-list");
console.log("All li children of ul:", ul.children);

// 5. Footer → navigate up to body
const footer = document.querySelector("footer");
console.log("Footer parent (main):", footer.parentElement);
console.log("Footer grandparent (body):", footer.parentElement.parentElement);


// ================================
// TASK 9.3 — Modifying Content
// ================================

// Text content
const h1El = document.querySelector("h1");
console.log("Original h1 text:", h1El.textContent);
h1El.textContent = "DOM Practice — Updated!";

// HTML content
const articleEl2 = document.querySelector("article");
console.log("Article innerHTML:", articleEl2.innerHTML);

articleEl2.innerHTML = `
    <h2 class="title">Updated Article</h2>
    <p class="content">This content was added by JavaScript.</p>
    <p class="content">Pretty cool, right?</p>
`;

// Safe text content — won't execute scripts
const safeEl = document.createElement("p");
safeEl.textContent = "This is safe text — no scripts will run here.";
articleEl2.appendChild(safeEl);

// Attributes
const link = document.querySelector(".nav-link");
console.log("href:", link.getAttribute("href"));
link.setAttribute("href", "https://github.com/Finah2");
console.log("has target?", link.hasAttribute("target"));

// Styles
const container = document.querySelector(".container");
container.style.backgroundColor = "#f9fff9";
container.style.borderColor = "#39ff14";
container.style.borderWidth = "2px";


// ================================
// TASK 9.4 — Adding & Removing Elements
// ================================

// Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created dynamically with JavaScript!";
newParagraph.className = "content highlight";
articleEl2.appendChild(newParagraph);

// Insert before another element
const firstPara = articleEl2.querySelector("p");
const insertedPara = document.createElement("p");
insertedPara.textContent = "I was inserted before the first paragraph.";
insertedPara.className = "content";
articleEl2.insertBefore(insertedPara, firstPara);

// Clone a nav item and add a new link
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "Portfolio";
clone.querySelector("a").href = "https://Finah2.github.io/iyf-s11-week-04-Finah2";
document.querySelector(".nav-list").appendChild(clone);

// Function to add nav items dynamically
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Projects", "/projects");

console.log("Nav items added successfully!");


// ================================
// TASK 10.1 — Event Listeners & Click Counter
// ================================

// Create the click counter UI
const counterSection = document.createElement("section");
counterSection.style.cssText = "margin-top:2rem; padding:1.5rem; background:#fff; border-radius:8px; border:1px solid #ddd;";
counterSection.innerHTML = `
    <h2 style="margin-bottom:1rem; color:#1a1a2e;">Click Counter</h2>
    <p id="counter-display" style="font-size:2rem; font-weight:bold; color:#1a1a2e; margin-bottom:1rem;">0</p>
    <button id="increase-btn" style="background:#39ff14; color:#1a1a2e; border:none; padding:0.5rem 1.2rem; border-radius:4px; cursor:pointer; font-weight:bold; margin-right:0.5rem;">+</button>
    <button id="decrease-btn" style="background:#1a1a2e; color:#39ff14; border:none; padding:0.5rem 1.2rem; border-radius:4px; cursor:pointer; font-weight:bold; margin-right:0.5rem;">-</button>
    <button id="reset-btn" style="background:#ccc; color:#333; border:none; padding:0.5rem 1.2rem; border-radius:4px; cursor:pointer; font-weight:bold;">Reset</button>
`;
document.querySelector("main").appendChild(counterSection);

let count = 0;
const counterDisplay = document.getElementById("counter-display");

document.getElementById("increase-btn").addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById("decrease-btn").addEventListener("click", () => {
    if (count > 0) count--;
    counterDisplay.textContent = count;
});

document.getElementById("reset-btn").addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});


// ================================
// TASK 10.2 — Event Object & Keyboard Shortcuts
// ================================

document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
    console.log("Code:", event.code);

    // Ctrl+S — show saved message
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("✅ Saved!");
    }

    // Escape — clear all form inputs
    if (event.key === "Escape") {
        document.querySelectorAll("input").forEach(input => input.value = "");
        console.log("All inputs cleared!");
    }

    // Ctrl+Enter — submit form
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        document.getElementById("contact-form").dispatchEvent(new Event("submit"));
    }
});

// Click event object demo
document.addEventListener("click", function(event) {
    console.log("Clicked target:", event.target);
    console.log("Position:", event.clientX, event.clientY);
});


// ================================
// TASK 10.3 — Event Bubbling & Delegation
// ================================

// Bubbling demo — click child, parent also fires
const bubblingSection = document.createElement("section");
bubblingSection.style.cssText = "margin-top:2rem; padding:1.5rem; background:#fff; border-radius:8px; border:1px solid #ddd;";
bubblingSection.innerHTML = `
    <h2 style="margin-bottom:1rem; color:#1a1a2e;">Event Bubbling Demo</h2>
    <div id="grandparent" style="background:#f0f0f0; padding:1rem; border-radius:6px; cursor:pointer;">
        Grandparent
        <div id="parent-div" style="background:#ddd; padding:1rem; margin-top:0.5rem; border-radius:6px;">
            Parent
            <div id="child-div" style="background:#39ff14; color:#1a1a2e; padding:1rem; margin-top:0.5rem; border-radius:6px; font-weight:bold;">
                Click Me (Child)
            </div>
        </div>
    </div>
    <p id="bubble-log" style="margin-top:1rem; color:#555; font-size:0.9rem;">Click the child to see bubbling in action</p>
`;
document.querySelector("main").appendChild(bubblingSection);

document.getElementById("grandparent").addEventListener("click", () => {
    document.getElementById("bubble-log").textContent = "Grandparent fired!";
    console.log("Grandparent clicked");
});

document.getElementById("parent-div").addEventListener("click", () => {
    document.getElementById("bubble-log").textContent = "Parent fired → then Grandparent!";
    console.log("Parent clicked");
});

document.getElementById("child-div").addEventListener("click", (e) => {
    document.getElementById("bubble-log").textContent = "Child fired → then Parent → then Grandparent!";
    console.log("Child clicked — watch it bubble up!");
});


// ================================
// TASK 10.4 — Form Handling & Validation
// ================================

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function showError(input, message) {
    input.style.borderColor = "red";
    let errorEl = input.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains("error-msg")) {
        errorEl = document.createElement("span");
        errorEl.className = "error-msg";
        errorEl.style.cssText = "color:red; font-size:0.8rem; display:block; margin-top:-0.5rem; margin-bottom:0.5rem;";
        input.insertAdjacentElement("afterend", errorEl);
    }
    errorEl.textContent = message;
}

function clearError(input) {
    input.style.borderColor = "#39ff14";
    const errorEl = input.nextElementSibling;
    if (errorEl && errorEl.classList.contains("error-msg")) {
        errorEl.textContent = "";
    }
}

nameInput.addEventListener("input", function(e) {
    if (e.target.value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
        showError(emailInput, "Please enter a valid email address");
    } else {
        clearError(emailInput);
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(emailInput, "Please enter a valid email address");
        return;
    }

    console.log("Form submitted:", { name, email });
    alert(`✅ Thanks ${name}! We'll be in touch at ${email}`);
    form.reset();
    clearError(nameInput);
    clearError(emailInput);
});
