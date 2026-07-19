// ================================
// WEEK 5 DAILY CHALLENGES
// ================================
// Note: These run on dom-practice.html
// Open that page and check the console + UI


// DAY 1 — Color Changer
// Changes all headings to a random color on button click

function randomHexColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    return `#${hex.padStart(6, "0")}`;
}

const colorBtn = document.createElement("button");
colorBtn.textContent = "🎨 Change Heading Colors";
colorBtn.style.cssText = "margin:1rem 0; padding:0.6rem 1.2rem; background:#39ff14; color:#1a1a2e; border:none; border-radius:6px; cursor:pointer; font-weight:bold; display:block;";

colorBtn.addEventListener("click", () => {
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach(h => {
        h.style.color = randomHexColor();
    });
});

document.querySelector("main").prepend(colorBtn);


// DAY 2 — Dynamic Element Creator
// Adds a new numbered paragraph each time button is clicked

let paraCount = 0;

const addParaBtn = document.createElement("button");
addParaBtn.textContent = "➕ Add Paragraph";
addParaBtn.style.cssText = "margin:0.5rem 0; padding:0.6rem 1.2rem; background:#1a1a2e; color:#39ff14; border:2px solid #39ff14; border-radius:6px; cursor:pointer; font-weight:bold; display:block;";

const paraContainer = document.createElement("div");
paraContainer.style.cssText = "margin-top:0.5rem;";

addParaBtn.addEventListener("click", () => {
    paraCount++;
    const p = document.createElement("p");
    p.style.cssText = "background:#f9fff9; border-left:3px solid #39ff14; padding:0.5rem 1rem; margin-bottom:0.5rem; border-radius:0 4px 4px 0; display:flex; justify-content:space-between; align-items:center;";

    const text = document.createElement("span");
    text.textContent = `Paragraph ${paraCount} — added dynamically!`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.style.cssText = "background:none; border:none; color:#e74c3c; cursor:pointer; font-size:1rem;";
    delBtn.addEventListener("click", () => p.remove());

    p.appendChild(text);
    p.appendChild(delBtn);
    paraContainer.appendChild(p);
});

document.querySelector("main").appendChild(addParaBtn);
document.querySelector("main").appendChild(paraContainer);


// DAY 3 — Image Remover / Toggle
// Hides and shows all images on the page

let imagesHidden = false;

const imgToggleBtn = document.createElement("button");
imgToggleBtn.textContent = "🖼️ Hide Images";
imgToggleBtn.style.cssText = "margin:0.5rem 0; padding:0.6rem 1.2rem; background:#1a1a2e; color:#39ff14; border:2px solid #39ff14; border-radius:6px; cursor:pointer; font-weight:bold; display:block;";

imgToggleBtn.addEventListener("click", () => {
    const images = document.querySelectorAll("img");
    imagesHidden = !imagesHidden;

    images.forEach(img => {
        img.style.display = imagesHidden ? "none" : "block";
    });

    imgToggleBtn.textContent = imagesHidden ? "🖼️ Show Images" : "🖼️ Hide Images";
});

document.querySelector("main").appendChild(imgToggleBtn);


// DAY 4 — Content Copier
// Copies content from source div to target div

const copierSection = document.createElement("section");
copierSection.style.cssText = "margin-top:1.5rem; padding:1rem; background:#fff; border-radius:8px; border:1px solid #ddd;";
copierSection.innerHTML = `
    <h3 style="margin-bottom:1rem; color:#1a1a2e;">Content Copier</h3>
    <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        <div id="source-div" style="flex:1; min-width:200px; background:#f9fff9; border:2px solid #39ff14; padding:1rem; border-radius:6px;">
            <strong>Source</strong>
            <p style="margin-top:0.5rem; color:#555;">This is the source content. Click the button to copy it to the target!</p>
        </div>
        <div id="target-div" style="flex:1; min-width:200px; background:#f0f0f0; border:2px dashed #ccc; padding:1rem; border-radius:6px; color:#888;">
            <strong>Target</strong>
            <p style="margin-top:0.5rem;">Content will appear here...</p>
        </div>
    </div>
    <button id="copy-btn" style="margin-top:1rem; padding:0.6rem 1.2rem; background:#39ff14; color:#1a1a2e; border:none; border-radius:6px; cursor:pointer; font-weight:bold;">📋 Copy Content</button>
`;
document.querySelector("main").appendChild(copierSection);

document.getElementById("copy-btn").addEventListener("click", () => {
    const source = document.getElementById("source-div");
    const target = document.getElementById("target-div");
    target.innerHTML = source.innerHTML;
    target.style.borderColor = "#39ff14";
    target.style.color = "#222";
});


// DAY 5 — Dark Mode Toggle

const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Toggle Dark Mode";
darkModeBtn.style.cssText = "position:fixed; bottom:1.5rem; right:1.5rem; padding:0.7rem 1.2rem; background:#1a1a2e; color:#39ff14; border:2px solid #39ff14; border-radius:30px; cursor:pointer; font-weight:bold; font-size:0.85rem; z-index:999; transition:all 0.3s;";

let darkMode = false;

darkModeBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.background = "#0a0a0a";
        document.body.style.color = "#ddd";
        document.querySelectorAll(".container, article, section").forEach(el => {
            el.style.background = "#111";
            el.style.borderColor = "#333";
        });
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#222";
        document.querySelectorAll(".container, article, section").forEach(el => {
            el.style.background = "";
            el.style.borderColor = "";
        });
        darkModeBtn.textContent = "🌙 Toggle Dark Mode";
    }
});

document.body.appendChild(darkModeBtn);
