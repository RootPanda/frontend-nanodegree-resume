/*
resumeBuilder.js - JS builder for my resume.
 */

var bio = {
	"name": "Alexander Leung",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "222-222-2222",
		"email": "alex.leung@outlook.com",
		"github": "https://github.com/RootPanda",
		"twitter": "http://www.twitter.com",
		"location": "Toronto"
	},
	"welcomeMessage": "Hi, this is Alex.",
	"skills": ["C++", "JaveScript", "SDLC"],
	"bioPic": "./images/alex.jpg"
}

var work = {
	"jobs": [
	{
		"employer": "Conglomerate",
		"title": "SDE",
		"location": "Toronto, ON",
		"dates": "2013 - Present",
		"description": "Software design"
	},
	{
		"employer": "Government",
		"title": "SDE",
		"location": "Toronto, ON",
		"dates": "2012",
		"description": "Software test"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Frontend Nanodegree Resume",
		"dates": 2016,
		"description": "UD804 Project",
		"images": "./images/fry.jpg"
	},
	{
		"title": "Sunshine Android App",
		"dates": 2014,
		"description": "Android Fundamentals Project",
		"images": "./images/fry.jpg"
	}
	]
}

var education = {
	"schools": [
	{
		"name": "Georgia Institute of Technology",
		"location": "Atlanta, GA",
		"degree": "MSECE",
		"majors": ["ECE"],
		"dates": 2016,
		"url": "http://www.gatech.edu"
	},
	{
		"name": "University of Waterloo",
		"location": "Waterloo, ON",
		"degree": "BASc",
		"majors": ["ECE"],
		"dates": 2013,
		"url": "http://www.uwaterloo.ca"
	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
}

// HEADER
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

if (bio.skills && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//// MAIN
//$("#main").append(work["position"]);
//$("#main").append(education.name);

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var workEntry = "";

		if (work.jobs.hasOwnProperty(job)) {
			workEntry = workEntry + HTMLworkEmployer.replace("%data%", 
				work.jobs[job].employer);

			workEntry = workEntry + HTMLworkTitle.replace("%data%", 
				work.jobs[job].title);

			workEntry = workEntry + HTMLworkDates.replace("%data%", 
				work.jobs[job].dates);

			workEntry = workEntry + HTMLworkLocation.replace("%data%", 
				work.jobs[job].location);

			workEntry = workEntry + HTMLworkDescription.replace("%data%", 
				work.jobs[job].description);
		}

		$(".work-entry:last").append(workEntry);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var projectEntry = "";

		if (projects.projects.hasOwnProperty(project)) {

			projectEntry = projectEntry + HTMLprojectTitle.replace("%data%", 
				projects.projects[project].title);

			projectEntry = projectEntry + HTMLprojectDates.replace("%data%", 
				projects.projects[project].dates);

			projectEntry = projectEntry + HTMLprojectDescription.replace("%data%", 
				projects.projects[project].description);

			projectEntry = projectEntry + HTMLprojectImage.replace("%data%", 
				projects.projects[project].images);

		}

		$(".project-entry:last").append(projectEntry);
	}
}

projects.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function inName(name) {
	var names = name.trim().split(" ");

	names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1);
	names[1] = names[1].toUpperCase();

	return names[0] + " " + names[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


