// ===== COURSE DATA =====
const data = {
    ds: {
        title: "Discrete Structure",
        desc: "This course introduces students to the principles and applications of discrete structure in the field of computer science.",
        reflection: "In this course, I got knowledges about principles and applications of discrete structure in the field of computer science. It gave me better understanding how these the mathematical concepts apply to real-world computing problems, including algorithms and data structures. One of the most useful aspects of this course was learning logical thinking and proof techniques. These skills helped me improve my ability to analyze problems step by step and justify solutions clearly.",
        items: [
            { type: "Assignment", title: "Assignment 1 : Logic", description: "Propositions and truth tables." },
            { type: "Assignment", title: "Assignment 2 : Relations", description: "Functions and equivalence relations." },
            { type: "Assignment 3", title: "Assignment 3: ", description: "Graph traversal techniques." }
        ]
    },

    pt1: {
        title: "Programming Technique I",
        desc: "Tis course introduces students to fundamental programming using C++ as the programming language to solve a problem.",
        reflection: `This course taught me about fundamental theory and practice on problem solving techniques by using coding and programming, C++. From this course, I learned to solve a problem using programming approach by developing structured C++ programs. I need to know the problem and plan the solution. With this, i could apply systematic problem-solving methods to analyze and address programming challenges.`,
        items: [
            { type: "Assignment", title: "Assignment 1 – Basics", description: "Variables and I/O." },
            { type: "Lab", title: "Lab 1 – Control", description: "Loops and conditionals." }
        ]
    },

    tis: {
        title: "Technology & Information System",
        desc: "This course introduces students to fundamental conceps of technology and IT.",
        reflection: "This course is a Work-Based Learning (WBL) learning mode where it doesn't have final exam but rely on quizzes, tests, assignments and projects. The theories I learned in this course is crucial that it would be applied for hands-on activities, final year projects (FYP) and real-working application. This course also held industry talks which helped me understand the job roles and markets, required skills and opportunities that are not covered in textbooks. Overall, this course improved my understanding in IT and technology and also inspired me to focus on enhancing knowlegdes and skill-building, along with real-world application.",
       items: [
            { type: "Assignment", title: "Assignment 1: UTM Open Day", description: `UTMDigital Open Day 2025 is yearly event, attended by students who were interested in in UTM's technology and digital transformation. The activities includedtalks, demonstrations, showcases and discussions on how digital innovation was used at UTM.
<br>
<br><h3>Objective</h3>
<ul>
<li>To gain deeper and better knowlegde about UTM Digital's structure, function and distribution for UTM.</li>
<li>To enhance teamwork, problem-solving skills and communication between the team members.</li>
<li>To produce an asignement video.</li>
</ul>

<h3>🔭Overview of the Programme</h3>
UTMDigital Open Day 2025 is yearly event, attended by students who were interested in in UTM's technology and digital transformation. The activities includedtalks, demonstrations, showcases and discussions on how digital innovation was used at UTM.

<b>🔑 Key Insights</b>
<ul>
<li>Information System <br>
🎤 Speaker : Hj. Madradzi Bin Muhamad, the Division of Digital Innovation (DDI) </li>

<li>Digital Infrastructure <br>
🎤 Speaker : Mohd Hafiz Muhammad Nasir, the Division of Digital Architecture (DDA)</li>

<li>Data Engineering <br>
🎤 Speaker : Zahari Supene of DDA</li>

<li>System Development <br>
🎤 Speaker : Helmee Bin Yaacob</li>
</ul>

<h3>🛠️ Suggestion of Improvement</h3>
<ul>
<li>Provide digital map of the booths location so students can plan their visit.</li>
</ul>`	
			},
			{ type: "Assignment", title: "Assignment 2: PPG Indutry Talk 1", description: "UTMDigital Open Day 2025 is yearly event, attended by students who were interested in in UTM's technology and digital transformation. The activities includedtalks, demonstrations, showcases and discussions on how digital innovation was used at UTM."}
        ]
    },

    dl: {
        title: "Digital Logic",
        desc: "Boolean algebra and logic gates.",
        reflection: "Improved understanding of digital circuits.",
        items: [
            { type: "Lab", title: "Logic Gate Lab", description: "Built circuits using gates." }
        ]
    },

    kiar: {
        title: "Integrity & Anti-Corruption",
        desc: "Ethics and integrity in society.",
        reflection: "Learned about moral responsibility.",
        items: [
            { type: "Project", title: "Integrity Video", description: "Awareness video project." }
        ]
    }
};

// ===== ELEMENT REFERENCES =====
const home = document.getElementById("home");
const nav = document.getElementById("nav");
const subjectPage = document.getElementById("subjectPage");
const detailPage = document.getElementById("detailPage");

const subjectTitle = document.getElementById("subjectTitle");
const subjectDesc = document.getElementById("subjectDesc");
const courseReflection = document.getElementById("courseReflection");
const itemList = document.getElementById("itemList");
const courseButtons = document.getElementById("courseButtons");

const detailTitle = document.getElementById("detailTitle");
const detailDesc = document.getElementById("detailDesc");

// ===== SAFETY: HIDE HOME INITIALLY =====
home.style.display = "none";
nav.style.display = "none";

// ===== LANDING → HOME =====
function showHome() {
    document.querySelector(".landing").style.display = "none";
    home.style.display = "block";
    nav.style.display = "block";
}

// ===== OPEN COURSE PAGE =====
function openSubject(key) {
    home.style.display = "none";
    detailPage.style.display = "none";
    subjectPage.style.display = "block";

    const s = data[key];

    subjectTitle.innerText = s.title;
    subjectDesc.innerHTML = s.desc;
    courseReflection.innerText = s.reflection;

    itemList.innerHTML = s.items.map((item, index) =>
        `<li onclick="openDetail('${key}', ${index})">
            ${item.type}: ${item.title}
         </li>`
    ).join("");

    courseButtons.innerHTML = Object.keys(data)
        .filter(code => code !== key)
        .map(code =>
            `<button class="course-btn" onclick="openSubject('${code}')">
                ${code.toUpperCase()}
            </button>`
        ).join("");
}

// ===== OPEN ITEM DETAIL =====
function openDetail(subjectKey, index) {
    subjectPage.style.display = "none";
    detailPage.style.display = "block";

    const item = data[subjectKey].items[index];
    detailTitle.innerText = item.title;
    detailDesc.innerHTML = item.description;
}

// ===== BACK BUTTONS =====
function backHome() {
    subjectPage.style.display = "none";
    detailPage.style.display = "none";
    home.style.display = "block";
}

function backSubject() {
    detailPage.style.display = "none";
    subjectPage.style.display = "block";
}

// ===== PROFILE BUTTON ACTIONS =====
function goCourses() {
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}

function goContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function openProjects() {
    window.location.href = "project.html";
}

// ===== SKIP LANDING IF COMING FROM PROJECT PAGE =====
window.onload = function () {
    if (localStorage.getItem("skipLanding") === "yes") {
        document.querySelector(".landing").style.display = "none";
        home.style.display = "block";
        nav.style.display = "block";
        localStorage.removeItem("skipLanding");
    }
};














