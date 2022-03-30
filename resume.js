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

	window.addEventListener('resize', () => {
		setScrollSpeed();
	});

	window.addEventListener("DOMContentLoaded", () => {
		setScrollSpeed();
	});

	const khs = document.getElementById("khs");
	const cernerls = document.getElementById("cerner-s");
	const cernerla = document.getElementById("cerner-a");
	const cernerl6 = document.getElementById("cerner-l6");
	const cernerl7 = document.getElementById("cerner-l7");
	const dst = document.getElementById("dst");

	const setScrollSpeed = () => {
		let width = window.innerWidth;
		const breakpoint = 900;
		console.log(khs);
		if (width > breakpoint) {
			console.log('bigger than 768');
			khs.setAttribute('data-scroll-speed', '5');
			cernerls.setAttribute('data-scroll-speed', '-5');
			cernerla.setAttribute('data-scroll-speed', '10');
			cernerl6.setAttribute('data-scroll-speed', '-10');
			cernerl7.setAttribute('data-scroll-speed', '15');
			dst.setAttribute('data-scroll-speed', '-15');
		} else {
			khs.setAttribute('data-scroll-speed', '1');
			cernerls.setAttribute('data-scroll-speed', '-1');
			cernerla.setAttribute('data-scroll-speed', '1');
			cernerl6.setAttribute('data-scroll-speed', '-1');
			cernerl7.setAttribute('data-scroll-speed', '1');
			dst.setAttribute('data-scroll-speed', '-1');
		}
		scroll.update();
	}

	consoleText(["Welcome!", "Peter Le", "Fullstack Developer"], 'text');

	function consoleText(words, id, colors) {
		if (colors === undefined) colors = ['#fff'];
		let visible = true;
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

	const modal = document.getElementById("modal-overlay");
	const closeModal = document.getElementById("close-modal");
	const title = document.getElementById("experience-modal-title");
	const subtitle = document.getElementById("experience-modal-subtitle");
	const datetime = document.getElementById("experience-modal-datetime");
	const content = document.getElementById("experience-modal-content");
	const body = document.querySelector("body");
	khs.onclick = function() {
		const details = [
			"Ability to pick up tasks and work with minimal supervision",
			"Assigned and worked on client projects",
			"Drive, design, and coded client application from the ground up using ReactJs, C#/.NetCore/Java",
			"Lead on the UI team for another client on their new application",
			"Helped whiteboard and design the admin site for the client.",
			"Took initiative on designing services to import standard formatted files used by the clients. i.e NACHA, X12",
			"Advice and mentor clients' new developers through knowledge transfers to get them up to speed on the code base",
			"Make or suggest implementation details to help our clients solve problem they encountered."
		];
		setModalDetail(khs, details);
	}

	cernerls.onclick = function (){
		const details = [
			"Continue to help manage and drive our solution development",
			"Continue to develop and enhance our existing solution using Java, Rails, and React",
			"Continue to mentor new associates joining the company",
			"Mentored new team members",
			"Helped drive and manage the release process on our solution first release"
		];
		setModalDetail(cernerls, details);
	}

	cernerla.onclick = function (){
		const details = [
			"Designed and implemented new Rails and React components to display patient Goals and Activities",
			"Designed and implemented new REST APIs to allow connection to front-end component",
			"Created a new Java layer to allow a seamless connection between Cerner traditional platform and its cloud platform",
			"Enhanced existing REST APIs to support new structures to call into another platform at Cerner",
			"Extensively worked with other internal teams at Cerner to collaborate and connect to their solutions",
			"Helped drive and architect our solution"
		];
		setModalDetail(cernerla, details);
	}

	cernerl6.onclick = function (){
		const details = [
			"Designed and implemented new REST APIs to allow the end user to call into and retrieve patient data",
			"Implemented support for standards on health care services and terminologies",
			"Implemented localization and internalization for the REST APIs",
			"Collaborated with internal teams at Cerner to work and support health care standards"
		];
		setModalDetail(cernerl6, details);
	}

	cernerl7.onclick = function (){
		const details = [
			"Implemented and released a Transplant overview solution for patients using C++ and Cerner Command Language (CCL)",
			"Maintained and supported an existing solution"
		];
		setModalDetail(cernerl7, details);
	}

	dst.onclick = function (){
		const details = [
			"Implemented a web application to allow clients to make redemptions on their mutual fund account",
			"Implemented front end using JavaScript, HTML, and CSS using ExtJs framework",
			"Implemented Java layer to connect to Business Services to retrieve customer data",
			"Developed a responsive front end for user-friendly interaction",
			"Followed MVC pattern to develop the web application",
			"Followed agile methodology"
		];
		setModalDetail(dst, details);
	}

	const setModalDetail = (curObj, details = []) => {
		title.innerText = curObj.children[0].innerText;
		subtitle.innerText = curObj.children[1].innerText;
		datetime.innerText = curObj.children[2].innerText;

		content.innerText = "";
		details.forEach(detail => {
			const element = document.createElement("div")
			const icon = document.createElement("div");
			icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n' +
				'  <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />\n' +
				'</svg>'
			const paragraph = document.createElement("p");
			const textNode = document.createTextNode(detail);
			paragraph.appendChild(textNode);
			icon.style.marginRight = "1rem";
			element.appendChild(icon);
			element.appendChild(paragraph)
			element.style.display = "flex";
			element.style.alignItems = "start";
			element.style.lineHeight = "1rem";
			element.style.textAlign = "start";
			element.style.margin = "0.5rem 0";
			content.append(element);
		});

		modal.style.display = "block";
		modal.style.overflow = "hidden"
		body.style.overflow = "hidden"
	}

	closeModal.onclick = function() {
		modal.style.display = "none";
		modal.style.overflow = "auto"
		body.style.overflow = "auto"
	}


	const entries = [

		{ image: "img/azure.svg", width: "40", height: "40", url: "", target: "_top", tooltip: "Azure" },
		{ image: "img/azureadmin.png", width: "60", height: "60", url: "", target: "_top", tooltip: "Azure Administrator" },
		{ image: "img/azuredevops.png", width: "60", height: "60", url: "", target: "_top", tooltip: "Azure DevOps" },
		{ image: "img/crucible.svg", width: "40", height: "40", url: "", target: "_top", tooltip: "Crucible" },
		{ image: "img/csharp.svg", width: "120", height: "120", url: "", target: "_top", tooltip: "C#" },
		{ image: "img/css3.svg", width: "70", height: "70", url: "", target: "_top", tooltip: "CSS" },
		{ image: "img/dotnetcore.svg", width: "100", height: "100", url: "", target: "_top", tooltip: ".NET Core" },
		{ image: "img/eclipse.svg", width: "50", height: "50", url: "", target: "_top", tooltip: "Eclipse" },
		{ image: "img/git.svg", width: "80", height: "80", url: "", target: "_top", tooltip: "Git" },
		{ image: "img/github.svg", width: "70", height: "70", url: "", target: "_top", tooltip: "Github" },
		{ image: "img/html5.svg", width: "60", height: "60", url: "", target: "_top", tooltip: "HTML" },
		{ image: "img/java.svg", width: "50", height: "50", url: "", target: "_top", tooltip: "JAVA" },
		{ image: "img/jenkins.svg", width: "30", height: "30", url: "", target: "_top", tooltip: "Jenkins" },
		{ image: "img/jetbrains.svg", width: "100", height: "100", url: "", target: "_top", tooltip: "Jetbrains" },
		{ image: "img/jira.svg", width: "60", height: "60", url: "", target: "_top", tooltip: "Jira" },
		{ image: "img/jquery.svg", width: "40", height: "40", url: "", target: "_top", tooltip: "jQuery" },
		{ image: "img/js.svg", width: "120", height: "120", url: "", target: "_top", tooltip: "JavaScript" },
		{ image: "img/junit.png", width: "50", height: "50", url: "", target: "_top", tooltip: "JUnit" },
		{ image: "img/less.svg", width: "30", height: "30", url: "", target: "_top", tooltip: "Less" },
		{ image: "img/materialui.svg", width: "100", height: "100", url: "", target: "_top", tooltip: "Material-UI" },
		{ image: "img/mysql.svg", width: "40", height: "40", url: "", target: "_top", tooltip: "MySQL" },
		{ image: "img/postman.svg", width: "70", height: "70", url: "", target: "_top", tooltip: "Postman" },
		{ image: "img/nodejs.svg", width: "70", height: "70", url: "", target: "_top", tooltip: "NodeJs" },
		{ image: "img/rails.svg", width: "30", height: "30", url: "", target: "_top", tooltip: "Ruby on Rails" },
		{ image: "img/react.svg", width: "130", height: "130", url: "", target: "_top", tooltip: "React" },
		{ image: "img/redux.svg", width: "60", height: "60", url: "", target: "_top", tooltip: "Redux" },
		{ image: "img/redux-saga.svg", width: "50", height: "50", url: "", target: "_top", tooltip: "Redux-Saga" },
		{ image: "img/restapi.png", width: "90", height: "90", url: "", target: "_top", tooltip: "Rest API" },
		{ image: "img/rspec.svg", width: "30", height: "30", url: "", target: "_top", tooltip: "Rspec" },
		{ image: "img/sass.svg", width: "30", height: "30", url: "", target: "_top", tooltip: "Sass" },
		{ image: "img/sqlserver.svg", width: "60", height: "60", url: "", target: "_top", tooltip: "SQL Server" },
		{ image: "img/storedprocedure.svg", width: "70", height: "70", url: "", target: "_top", tooltip: "Stored Procedure" },
		{ image: "img/typescript.svg", width: "40", height: "40", url: "", target: "_top", tooltip: "Typescript" },
		{ image: "img/webdriverio.png", width: "40", height: "40", url: "", target: "_top", tooltip: "WebdriverIO" },
		{ image: "img/xunit.png", width: "50", height: "50", url: "", target: "_top", tooltip: "xUnit" },

	];

	const settings = {
		entries: entries,
		width: "78%",
		height: "78%",
		radius: "75%",
		radiusMin: 75,
		bgDraw: false,
		bgColor: "#333",
		opacityOver: 1.00,
		opacityOut: 0.2,
		opacitySpeed: 1,
		fov: 700,
		speed: 0.07,
		tooltipFontSize: "15",
		tooltipFontColor: "#fff",
		tooltipFontToUpperCase: false,
		tooltipDiffX: 0,
		tooltipDiffY: 10
	};

	$("#tag-cloud").svg3DTagCloud( settings );
	document.getElementById("tag-cloud").children[0].classList.add("m-auto");
})()