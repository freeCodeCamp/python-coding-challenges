/* global animal color name1 name2 iFrame animatecss $*/

const challenges = [
  {
    number: 1,
    name: "#1: 'Hello World'!",
    instructions: [
      "Programmers often use an editor to write code and a console to display the results. The top section on the left is the editor and the bottom section is the console.",
      "The objective of this first lesson is to write a simple program in the editor that prints something to the console. In Python, this is very simple.",
      "<p>After the word 'Hello' inside the parenthesis, type 'World!' so that the whole line looks like: print('Hello World!').</p>",
      "Then press run and see what happens.",

    ],
    frame: ["<iframe id='previewed' frameborder='0' width='100%' height='500px' src='https://repl.it/HNuS/2?lite=true'></iframe>"],
    seed: {
      code: [
        "<div id='preview-container'>",
        "<link rel='stylesheet' href='preview-style.css'>",
        "<img style='width: 150px; height: 150px' id='img-cont' onerror='this.src=`assets/err.png`'>",
        "<script type='text/javascript'>",
        "var img = document.getElementById('img-cont');var body = document.getElementsByTagName('body')[0];",
        "function chooseAnimal(animal) {img.src = `assets/${animal.toLowerCase().trim()}.svg`;}",
        "function chooseColor(color) {body.className=color.toLowerCase().trim();}",
        "chooseAnimal('animal');",
        "chooseColor('color');",
        "",
        "</script>",
        "</div>"
      ],
      hiddenLines: [
        {start: -1, end: 6}, {start: 9, end: 20}
      ]
    },
    tests: [
      {
        test: "$('#preview').contents().find('#img-cont')[0].src.match(/monkey.svg/ig) || $('#preview').contents().find('#img-cont')[0].src.match(/horse.svg/ig) || $('#preview').contents().find('#img-cont')[0].src.match(/tiger.svg/ig)",
        message: "Did you change animal to either monkey, horse or tiger?\nCheck that you don't have extra spaces."
      },
      {
        test: "$('#preview').contents().find('body')[0].className === 'red' || $('#preview').contents().find('body')[0].className === 'green' || $('body').className === 'green' || $('#preview').contents().find('body')[0].className === 'blue'",
        message: "Did you change color to either red, green or blue?"
      }
    ],
    callbacks: [
      () => { animal = /\/(\w+)\.svg/.exec($('#preview').contents().find('#img-cont')[0].src)[1]; },
      () => { color = $('#preview').contents().find('body')[0].className; },
    ]
  },
  {
    number: 2,
    name: "#2 Making Friends",
    instructions: [
      "Check to see if a number is a prime number",
    ],
    frame: ["<iframe id='previewed' frameborder='0' width='100%' height='500px' src='https://repl.it/HSOs/1?lite=true'></iframe>"],
    seed: {
      code: [
        () => `<body class='${color}' style="padding:50px;"><link rel='stylesheet' href='preview-style.css'>`,
        "<style>img { width: 33%; margin: auto; }</style>",
        "<script type='text/javascript'>",
        "var cont = document.body;",
        "function createAnimal(animal) {cont.appendChild(document.createElement('img')); cont.lastElementChild.src = `assets/${animal.toLowerCase()}.svg`; cont.lastElementChild.class = 'animal'}",
        "var num = 1;",
        "",
        "while (num <= 1) {",
        () => `
  createAnimal('${animal}');`,
        "",
        "  num = num + 1;",
        "",
        "}",
        "",
        "</script></body>",
      ],
      hiddenLines: [
        {start: -1, end: 4}, {start: 10, end: 11 }, {start: 14, end: 17}
      ]
    },
    tests: [{
      test: "$('#preview').contents().find('img').length > 1",
      message: "It looks like your animal is still alone.\nDid you try modifying the number next to the while loop?"
    }],
    callbacks: []
  },
//   {
//     number: 3,
//     name: "#3 Names for Everyone",
//     instructions: [
//       () => `You know, it's a bit boring calling this guy "${animal}".\nWe wouldn't be able to tell who was who in that last challenge.`,
//       "How about we give him a <i>name</i> ? We can create variables that hold information like this:",
//       `<pre class='codeblock'>
//       var name = "value";</pre>`,
//       "Now whenever we access <span class='inline-code'>name</span> we get <span class='inline-code'>\"value\"</span>.",
//       () => `When we want to change the name we change what's inside the quotes. Let's try and name two ${animal}s.`
//     ],
//     seed: {
//       code: [
//         // div must be put before JS or the DOM won't be available to manipulate
//         () => `<body class='${color}'>
//           <div><p id="name1"></p><img src="assets/${animal}.svg"></div>
//           <div><p id="name2"></p><img src="assets/${animal}.svg"></div>`,
//         `<script>`,
//         `// Remember to keep the quotes so we know its a word.
// // Just add your names between them.
// `,
//         `var name1 = "";`,
//         `var name2 = "";`,
//         "",
//         `if (name1) { document.getElementById("name1").textContent = name1 }; if (name2) { document.getElementById("name2").textContent = name2 }; parent.iFrame = window;`,
//         `</script><style>`,
//           `body { height: 90%; weight: 99%; display: flex; justify-content: center; align-items: center; }`,
//           `img { width: 150px; height: 150px; }`,
//           `p { font-size: 20px; font-family: arial; font-weight: bold; text-align: center; margin: 0; }`,
//           `.red { background-color: palevioletred; }
//           .green { background-color: palegreen; }
//           .blue { background-color: paleturquoise; }`,
//         `</style></body>`,
//       ],
//       hiddenLines: [{start: -1, end: 3}, {start: 9, end: 30}]
//     },
//     tests: [{
//       test: "(typeof iFrame.name1 === 'string') && (typeof iFrame.name2 === 'string')",
//       message: "Did you add quotation marks around your values?"
//     }, {
//       test: "($('#preview').contents().find('#name1')[0].textContent.length > 0) && ($('#preview').contents().find('#name2')[0].textContent.length > 0)",
//       message: "Are you sure both of the animals have names?"
//     }, {
//       test: "$('#preview').contents().find('#name1')[0].textContent !== $('#preview').contents().find('#name2')[0].textContent",
//       message: "Make sure their names are unique (different from each other)."
//     }],
//     callbacks: [
//       () => { name1 = iFrame.name1; },
//       () => { name2 = iFrame.name2; }
//     ],
//   },
//   {
//     number: 4,
//     name: "#4 It's ALIVE!",
//     instructions: [
//       "I bet they're getting restless by now. Let's shake things up!",
//       () => `To select a ${animal}: <span class='inline-code'>document.getElementById("name")</span>`,
//       `To make it move, append <span class="inline-code">.animate("animation");</span>`,
//       `Replace <span class="inline-code">animation</span> with which animation you want.`,
//       `Here's a list of animations that work:`,
//       `<span class="inline-code">bounce flash pulse rubberBand shake headShake swing tada wobble jello</span>`,
//       () => `Try to get both <b>${name1}</b> and <b>${name2}</b> moving!`
//     ],
//     seed: {
//       code: [
//         () => `<body class='${color}'>
//           <div><p>${name1}</p><img id="${name1}" src="assets/${animal}.svg" class="animated infinite "></div>
//           <div><p>${name2}</p><img id="${name2}" src="assets/${animal}.svg" class="animated infinite "></div><script>var name1 = "${name1}"; var name2 = "${name2}";
//             Element.prototype.animate = function(k) {
// this.className += k.toLowerCase().trim();
// }`,
//           "// Remember to change NAME.",
//           "// You can write out the name or use the",
//           "// variables name1 and name2 (& delete the quotes).",
//           "",
//           `document.getElementById("NAME").animate("ANIMATION");`,
//           `document.getElementById("NAME").animate("ANIMATION");`,
//           "",
//           "",
//         `</script><style>`,
//           `body { height: 90%; display: flex; justify-content: center; align-items: center; }`,
//           `img { width: 150px; height: 150px; text-align: center;}`,
//           `p { font-size: 20px; font-family: arial; font-weight: bold; text-align: center; margin: 0; }`,
//           `.red { background-color: palevioletred; }
//           .green { background-color: palegreen; }
//           .blue { background-color: paleturquoise; }
//           ${animatecss}`,
//         `</style></body>`,
//       ],
//       hiddenLines: [
//         {start: -1, end: 5}, {start: 13, end: 1000}
//       ]
//     },
//     tests: [{
//       test: () => $('#preview').contents().find(`#${name1}`)[0].className.match(/animated infinite (\w+)/) && $('#preview').contents().find(`#${name2}`)[0].className.match(/animated infinite (\w+)/),
//       message: `Did you give change NAME properly?`
//     }, {
//       test: () => $('#preview').contents().find(`#${name1}`)[0].className.match(/animated infinite (\w+)/)
//       && $('#preview').contents().find(`#${name2}`)[0].className.match(/animated infinite (\w+)/)
//       && animationList.includes($(`#preview`).contents().find(`#${name1}`)[0].className.match(/animated infinite (\w+)/)[1].toLowerCase().trim())
//       && animationList.includes($(`#preview`).contents().find(`#${name2}`)[0].className.match(/animated infinite (\w+)/)[1].toLowerCase().trim()),
//       message: 'Did you use the listed animations?'
//     }],
//     callbacks: [
//       () => { ani1 = $('#preview').contents().find(`#${name1}`)[0].className; ani2 = $('#preview').contents().find(`#${name2}`)[0].className; }
//     ]
//   },
//   {
//     number: 5,
//     name: "#5 Introducing Borders",
//     instructions: [
//       "Now that they're moving around, we should probably make sure they don't run away! Try changing the <span class='inline-code'>style</span>, <span class='inline-code'>size</span>, and <span class='inline-code'>color</span> of the border until you find something you like. Border styles:",
//       "<img src='http://www.vanseodesign.com/blog/wp-content/uploads/2011/10/border-styles.png' style='height: 250px;'>",
//       "TIP: <span class='inline-code'>px</span> stands for <span class='inline-code'>pixels</span> which is a measurement of width."
//     ],
//     seed: {
//       code: [
//         `<style>`,
//           `  body {`,
//             `    border-style: none;`,
//             `    border-width: 0px;`,
//             `    border-color: black;`,
//           `  }`,
//         `</style>`,
//         "",
//         `<style>body { height: 97%; box-sizing: border-box; }</style>`
//       ],
//       hiddenLines: [{start: 7, end: 8}]
//     },
//     tests: [{
//       test: () => ($("iframe").contents().find("body").css("border-top-style") !== "none"),
//       message: "Pick a border-style from the image that is not \"none\"."
//     }, {
//       test: () => (/(\d+)px/g.exec($("iframe").contents().find("body").css("border-top-width"))) && +(/(\d+)px/g.exec($("iframe").contents().find("body").css("border-top-width"))[1]) > 0,
//       message: "Did you keep 'px' after your width number?"
//     }],
//     callbacks: [
//       () => borderStyle.push($("iframe").contents().find("body").css("border-top-style"), $("iframe").contents().find("body").css("border-top-width"), $("iframe").contents().find("body").css("border-top-color"))
//     ],
//   },
//   {
//     number: 6,
//     name: "#6 A Change of Scenery",
//     instructions: [
//       "You're probably getting tired of that background by now... How about we use a picture instead?",
//       "<img src='assets/terrain.jpg' style='height: 150px;'>",
//       () => `Replace <span class='inline-code'>IMAGE</span> with a type of flooring your ${animal}s would like!`
//     ],
//     seed: {
//       code: [
//         "<body id='background'></body>",
//         "<script>",
//         "Element.prototype.setImage = function(k) {this.style.backgroundImage = 'url(assets/' + k.toLowerCase() + '.jpg)';}",
//         "document.getElementById('background').setImage('IMAGE');",
//         "</script>",
//         () => `<style>body { height: 97%; box-sizing: border-box; background-size: cover; border: ${borderStyle[1]} ${borderStyle[0]} ${borderStyle[2]};}</style>`,
//       ],
//       hiddenLines: [{start: -1, end: 2}, {start: 3, end: 5}]
//     },
//     tests: [{
//       test: () => {
//         const url = $("iframe").contents().find("body").css("background-image").slice(-18).toLowerCase().trim();
//         return (url === '/assets/dirt.jpg")') || (url === 'assets/grass.jpg")') || (url === 'assets/stone.jpg")');
//       },
//       message: "Did you replace IMAGE with one of the three types: dirt, grass, or stone?\nRemember to use the format in the instructions: url('assets/IMAGE.jpg');"
//     }],
//     callbacks: [
//       () => bg = $("iframe").contents().find("body").css("background-image"),
//       () => color = (color === "red") ? "palevioletred" : ((color === "green") ? "palegreen" : "paleturquoise")
//     ],
//   },
//   {
//     number: 7,
//     name: "#7 Making Signs",
//     // introduce html element, maybe just <h1></h1>, font-size, color, background-color
//     instructions: [
//       "Hey, it's starting to look pretty spiffy. I think we 'ought to hang up a sign somewhere, so that people can find this place.",
//       "Let's create a header element. Whatever you type in between the <code class='inline-code'>h1</code> tags will show up as the title.",
//       "I've added a few more style settings for you to customize, so make sure to fill those in. Remember that <code class='inline-code'>px</code> is a unit of width, so you should keep that with your font-size."
//     ],
//     seed: {
//       code: [
//         `<h1>TITLE</h1>`,
//         "",
//         `<style>`,
//           `  h1 {`,
//             () => `    background-color: ${color};`,
//             `    font-size: 0px;`,
//             `    color: black;`,
//           `  }`,
//         `</style>`,
//         "",
//         () => `<style>body { height: 97%; box-sizing: border-box; background-image: ${bg}; background-size: cover; border: ${borderStyle[1]} ${borderStyle[0]} ${borderStyle[2]};}</style>`,
//         `<style>h1 { font-family: arial, sans-serif; font-weight: bold; z-index: 3; position: absolute; top: 50px; left: 50%; transform: translateX(-50%); padding: 20px;}</style>`
//       ],
//       hiddenLines: [{start: 9, end: 14}]
//     },
//     tests: [{
//       test: () => $("iframe").contents().find("h1")[0].textContent.length > 0,
//       message: "Make sure there's an actual title inbetween the h1 tags!"
//     }, {
//       test: () => +(/(\d+)px/g.exec($("iframe").contents().find("h1").css("font-size"))[1]) > 0,
//       message: "Did you give it a proper font-size?"
//     }],
//     callbacks: [
//       () => title.push($("iframe").contents().find("h1")[0].textContent, $("iframe").contents().find("h1").css("font-size"), $("iframe").contents().find("h1").css("background-color"), $("iframe").contents().find("h1").css("color"))
//     ],
//   },
//   {
//     number: 8,
//     name: "#8 Let's Add Knickknacks",
//     instructions: [
//       () => `Since it's almost the holiday season I think we should decorate the place.`,
//       "<img src='assets/presents.jpg' style='margin: -15px 0 -10px 0; height: 300px;'>",
//       `Time to use <code class='inline-code'>img</code> tags. Just like earlier, change the code right before <code class='inline-code'>.png</code> to select your present type.
//       This time we also have to give them <code class='inline-code'>id</code>s.`
//     ],
//     seed: {
//       code: [
//         `<!-- No two IDs should be the same`,
//         `     Try to finish at least 2 presents! -->`,
//         "",
//           `<img src='assets/p0.png' id='present1'
//                      onerror='this.src="assets/err.png"'>`,
//           `<img src='assets/p0.png' id='present1'
//                      onerror='this.src="assets/err.png"'>`,
//             "",
//         () => `<style>img { height: 100px; } body { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; height: 97%; box-sizing: border-box; background-image: ${bg}; background-size: cover; border: ${borderStyle[1]} ${borderStyle[0]} ${borderStyle[2]};}</style>`,
//         () => `<h1>${title[0]}</h1><style>h1 { font-size: ${title[1]}; background-color: ${title[2]}; color: ${title[3]}; font-family: arial, sans-serif; font-weight: bold; z-index: 3; position: absolute; top: 50px; left: 50%; transform: translateX(-50%); padding: 20px; }</style>`
//       ],
//       hiddenLines: [{start: 7, end: 20}]
//     },
//     tests: [{
//       test: () => {
//         presents = [];
//         var valid = 0;
//         const arr = $("iframe").contents().find("img");
//         const pres = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
//         for (var i = 0; i < arr.length; i++) {
//           if (pres.includes(arr[i].src.slice(-6, -4).toLowerCase())) {
//             presents.push(arr[i].src);
//             valid++;
//           }
//           if (i === arr.length - 1)
//           return (valid >= 2);
//         }
//       },
//       message: "You don't seem to have at least 2 valid images. Check your src."
//     }, {
//       test: () => {
//         ids = [];
//         var valid = 0;
//         const arr = $("iframe").contents().find("img");
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].id && !ids.includes(arr[i].id)) {
//                 ids.push(arr[i].id);
//                 valid++;
//             }
//             if (i === arr.length - 1)
//                 return (valid >= 2);
//             }
//         },
//       message: "You need at least 2 unique id's.\nEvery present should have a different id."
//     }, {
//       test: () => presents.length === ids.length,
//       message: "The number of presents is not the same as the number of unique IDs."
//     }],
//     callbacks: []
//   },
//   {
//     number: 9,
//     name: "#9 Push 'n' Pull",
//     instructions: [
//       "It's boring having everything lumped up in the center like that. Let's reposition the decorations.",
//       `Now this is where the IDs become important. We're going to use them to move the presents around.`,
//       `You can add  <code class='inline-code'>top</code>, <code class='inline-code'>bottom</code>, <code class='inline-code'>left</code>, or <code class='inline-code'>right</code> properties.`,
//       `For example:`,
//       `<pre class='codeblock'>#id {
//             top: 50px;
//             right: 20%;
//       }</pre>
//       Remember that you can use px as units.`
//     ],
//     seed: {
//       code: ()  => {
//             var p = presents, id = ids;
//             var result = [`<style>`, ""];
//             for (var i = 0; i < id.length; i++) {
//                 result.push(`#${id[i]} {`, "", `}`, "")
//             }
//             result.push("</style>", '',
//             `<style>
//     body {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-wrap: wrap;
//       height: 97%;
//       box-sizing: border-box;
//       background-image: ${bg};
//       background-size: cover;
//       border: ${borderStyle[1]} ${borderStyle[0]} ${borderStyle[2]};
//     }
//     img {
//       position: absolute;
//       height: 100px;
//     }
//   </style>`,
//             `
// <h1>${title[0]}</h1>
//
// <style>
//   h1 {
//     font-size: ${title[1]};
//     background-color: ${title[2]};
//     color: ${title[3]};
//     font-family: arial, sans-serif;
//     font-weight: bold;
//     z-index: 3;
//     position: absolute;
//     top: 50px;
//     left: 50%;
//     transform: translateX(-50%);
//     padding: 20px;
//   }
//
//   .animated {
//     width: 150px;
//     height: 150px;
//   }
//
//   p {
//      font-size: 20px;
//      font-family: arial;
//      font-weight: bold;
//      text-align: center;
//      margin: 0;
//    }
// </style>
// `);
//       for (var i = 0; i < p.length; i++) {
//           result.push(`<img src="${p[i]}" id="${id[i]}" onerror='this.src="assets/err.png"'>`);
//       }
//       result.push('', `<img src='assets/p1.png' id='ref' style='opacity:0'>`);
//       return result;
//       },
//       hiddenLines: () => [{start: (presents.length * 5), end: 500}]
//     },
//     tests: [{
//       test: () => {
//         var top = false, bot = false, left = false, right = false;
//         var topref = $("iframe").contents().find(`#ref`).css("top");
//         var botref = $("iframe").contents().find(`#ref`).css("bottom");
//         var leftref = $("iframe").contents().find(`#ref`).css("left");
//         var rightref = $("iframe").contents().find(`#ref`).css("right");
//         var pass = true;
//         for (var i = 0; i < presents.length; i++) {
//           top = $("iframe").contents().find(`#${ids[i]}`).css("top");
//           bot = $("iframe").contents().find(`#${ids[i]}`).css("bottom");
//           left = $("iframe").contents().find(`#${ids[i]}`).css("left");
//           right = $("iframe").contents().find(`#${ids[i]}`).css("right");
//           if ((top === topref) && (bot === botref) && (left === leftref) && (right === rightref)) {
//             pass = false;
//           }
//        }
//        return pass;
//       },
//       message: "Try moving each present box with top, bottom, left, or right."
//     }, ],
//     callbacks: [
//       () => ed = $('.CodeMirror')[0].CodeMirror.getValue()
//     ],
//   },
//   {
//     number: 10,
//     name: "#10 The Grand Unveiling",
//     instructions: [
//       "Look who's back! I guess the presents did work as a lure. I think we're done the remodeling, but that doesn't mean your adventure has to end here.",
//       "There are lots of resources about HTML tags and CSS styling if you found this activity fun, like at FreeCodeCamp, Codecademy, and Khan Academy.",
//       "",
//       `Feel free to play around with the editor/preview below. Just make sure to keep CSS between <code class="inline-code">style</code> tags and Javascript between <code class="inline-code">script</code> tags.`
//     ],
//     seed: {
//       code: [
//         `<style>${animatecss}</style>`,
//         () => `
// <div style="position: absolute; left: 50%;
//             transform: translate(-100%, -25%);">
//   <p>${name1}</p>
//   <img id="${name1}" src="assets/${animal}.svg"
//        style="position: static; height: 150px;"
//        class="${ani1}">
//  </div>`,
//         () => `
// <div style="position: absolute; left: 50%;
//             transform: translate(0, -25%);">
//   <p>${name2}</p>
//   <img id="${name2}" src="assets/${animal}.svg"
//        style="position: static; height: 150px;"
//        class="${ani2}">
// </div>
//         `,
//         () => ed
//       ],
//       hiddenLines: [{start: -1, end: 670}
//       ]
//     },
//   }
  // so on ...
];
