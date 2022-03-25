(function() {
	// const button = document.querySelector('#menu-button'); // Hamburger Icon
	// const menu = document.querySelector('#menu'); // Menu
	//
	// button.addEventListener('click', () => {
	// 	menu.classList.toggle('hidden');
	// });

	const backToTop = document.querySelector(".back-to-top");
	const opacityClass = "opacity-0";
	const visibilityClass = "invisible";

	const scroll = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
		tablet: { smooth: true },
		smartphone: { smooth: true }
	});

	const arrayOfColors = [
		"#0a9396",
		"#005f73",
		"#ae2012",
		"#3d405b",
		"#003049",
		"#bc6c25",
		"#ff006e",
		"#ef476f",
		"#1982c4",
		"#ee964b",
		"#0ead69",
		"#390099",
		"#f6aa1c",
		"#54101d",
		"#2b2c28",
		"#85c7f2",
		"#e15a97",
		"#2b70e3",
		"#b36a5e"
	];

	function getRandomColor() {
		const arrayLength = arrayOfColors.length;
		const randomValue = Math.random() * arrayLength;
		const roundedNumber = Math.floor(randomValue);
		const color = arrayOfColors[roundedNumber];
		return color;
	}

	scroll.on("call", (value, way, obj) => {
		if (value === "randomizeTextColor") {
			if (way === "enter") {
				obj.el.style.color = getRandomColor();
			}
		} else if (value === "toggleBackToTop") {
			if (way === "enter") {
				backToTop.classList.add(opacityClass, visibilityClass);
			} else {
				backToTop.classList.remove(opacityClass, visibilityClass);
			}
		}
	});


	consoleText(["Hi!", "Welcome to", "Peter Le's", "resume page"], 'text');

	function consoleText(words, id, colors) {
		if (colors === undefined) colors = ['#fff'];
		let visible = true;
		const con = document.getElementById('console');
		let letterCount = 1;
		let x = 1;
		let waiting = false;
		const target = document.getElementById(id)
		target.setAttribute('style', 'color:' + colors[0])
		window.setInterval(function() {
			if (letterCount === 0 && waiting === false) {
				waiting = true;
				target.innerText = words[0].substring(0, letterCount)
				window.setTimeout(function() {
					const usedColor = colors.shift();
					colors.push(usedColor);
					const usedWord = words.shift();
					words.push(usedWord);
					x = 1;
					target.setAttribute('style', 'color:' + colors[0])
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (letterCount === words[0].length + 1 && waiting === false) {
				waiting = true;
				window.setTimeout(function() {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 1000)
			} else if (waiting === false) {
				target.innerText = words[0].substring(0, letterCount)
				letterCount += x;
			}
		}, 120)
		window.setInterval(function() {
			const underscore = document.getElementById('underscore');
			const space = document.getElementById('space');
			underscore.classList.toggle('hidden');
			space.classList.toggle('hidden');
			if (visible === true) {
				visible = false;
			} else {
				visible = true;
			}
		}, 500)
	}
})()