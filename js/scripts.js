// Insert year for the copyright
const theDate = new Date().getFullYear();
$("#currentYear").text(theDate);



// create objects to hold all subjects
const syllabus = {
    cmd : "Command Line",
    html : "HTML5",
    css : "CSS3",
    proto : "Prototyping / Wireframing",
    resp : "Responsive Websites",
    git : "Git and GitHub",
    deploy : "Deploying Websites",
    scss : "SCSS",
    boots : "Bootstrap",
    ada : "Accessibility",
    js : "JavaScript",
    jq : "jQuery",
    ui : "UI / UX Design"
};
 
var cmd = [
    "Navigating the File System", 
    "Viewing and Changing the File System", 
    "Configuring the Environment", 
    "Redirecting Input and Output"
];
var html = [
    [
        "Elements", 
            "Structure (!DOCTYPE, html, head, title, body, indentation, family tree)",
            "Comments (!-- --)",
            "Headings (head)",
            "Paragraphs (p)",
            "Lists ((un)ordered, definition)",
            "Text elements (emphasis, strong)",
            "Line Breaks (br)",
            "Anchors (a)",
            "Images (img)",
            "Attributes"
    ],
    [
        "Semantics",
            "Divs",
            "Sections",
            "Articles",
            "Navs",
            "Headers",
            "Footers",
            "Main",
            "Embedding Media (Videos, Audios, Embeds)",
            "Figures and Figcaptions",
            "Lesser Known Tags (base, aside, search, q, var, samp, datalist, progress, dialog)",
    ],
    [
        "Tables",
            "Rows (tr)",
            "Data (td) ",
            "Headers (thead) ",
            "Headings (th)",
            "Body (tbody)",
            "Footers (tfoot)"
    ],
    [
        "Forms",
            "Inputs (text, number, checkbox, range, radio, password)",
            "Labels",
            "Text areas",
            "Selects",
            "Datalists",
            "Submits",
            "Form Submittal"
    ]
];
var css = [
    [	
        "Syntax and Selectors",
            "Inline Styling",
            "Page Level Styling",
            "Separate File Styling",
            "Class and ID",
            "Multiple Classes",
            "Type Selectors",
            "Grouping Selectors",
            "Chaining Selectors",
            "Descendant Selectors"
    ],
    [	
        "Visual Rules and Typography",
            "CSS Declarations",
            "Background Color",
            "Color",
            "Font (size, weight, family, style)",
            "Background Images",
            "Text Alignment",
            "Opacity",
            "!important Rule"
    ],
    [	
        "Colors",
            "Color Name Keywords",
            "Hexadecimal Colors",
            "Rgb() Colors",
            "Hsl() Colors",
            "Alpha Values"
    ],
    [
        "Display and Positioning",
            "Display Property",
            "Position Property",
            "Float Property",
            "Z-Index"
    ],
    [
        "The Box Model",
            "Visibility",
            "Height and Width",
            "Overflow",
            "Margins and Padding",
            "Box-sizing"
    ]
];
var proto = ["Creating mockups for sites"];
var resp = [
    "Aim to make web pages render properly on various screen sizes", 
    "CSS Units (rem, em, %)", 
    "Media Queries"
];
var git = [
    "Introduction to GitHub",
    "Basic Workflow",
    "Branching",
    "Best Practices",
    "Operations",
    "Teamwork, Community, Features, and Markdown"
];
var deploy = [
    "Preparation",
    "Hosting",
    "DNS Records",
    "Setup Testing Site",
    "Setup Email Accounts",
    "Backup Site Content",
    "Deploy Full Site"
];
var scss = [
    "Comments",
    "Errors",
    "Variables",
    "Nesting",
    "@ Rules",
    "Mixins",
    "Functions",
    "Operations"
];
var boots = [
    "Setting Up Bootstrap",
    "Grid System",
    "Components, Buttons, Cards",
    "Typography",
    "Responsive Images",
    "Tables, Alerts, Navs, and Icons",
    "Forms"
];
var ada = [
    "Principles and Guidelines",
    "Technical Specifications",
    "Visual Design Fundamentals",
    "Color in Visual Design"
];
var js = [
    "Introduction",
    "Basics",
    "Interactive Websites",
    "Functions",
    "Conditionals",
    "Scope",
    "Loops"
];
var jq = [
    "Intro",
    "Traversing the DOM",
    "Event Handlers",
    "Style Methods",
    "Effects"
];
var ui = [
    "Software Design Principles",
    "Define and Ideate",
    "App Structure",
    "Prototyping",
    "Understanding the User",
    "User Research",
    "Connecting FrontEnd to BackEnd"
];


// loop through the syllabus to build the accordion
for (let topic in syllabus) {
    // loop through the similarly named array for building the accordion body
    let subject = '';
    let subtopic = window[topic];
    if (subtopic) {
        if(subtopic == html || subtopic == css) {
            subject = `<ul>`;
            for(let i=0; i<subtopic.length; i++) {
                // add the first element from the array as an li, but within that li add another ul with the remaining items being li
                subject += `<li class="mb-2">${subtopic[i][0]}<ul>`;
                for(let j=1; j<subtopic[i].length; j++) {
                    subject += `<li>${subtopic[i][j]}</li>`;
                }
                subject += `</ul></li>`;
            }
            subject += `</ul>`;
        }
        else {
            subject = `<ul>`;
            for(let i=0; i<subtopic.length; i++) {
                subject += `<li class="mb-2">${subtopic[i]}</li>`;
            }
            subject += `</ul>`;
        }    
    }

let accordionItem = `
    <div class="accordion-item">
        <h2 class="accordion-header" id="${topic}Heading">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${topic}" aria-expanded="false" aria-controls="${topic}">
            ${syllabus[topic]}
        </button>
        </h2>
        <div id="${topic}" class="accordion-collapse collapse" aria-labelledby="${topic}Heading" data-bs-parent="#syllabusAccordion">
            <div class="accordion-body">
                ${subject}
            </div>
        </div>
    </div>
`;

$("#syllabusAccordion").append(accordionItem);
}
/*console.log(syllabus[alltopic]);
debugger;*/





//$("#syllabusAccordion").append(accordionItem);