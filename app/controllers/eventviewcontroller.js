apollo13App.controller("EventViewController", function ($scope, $routeParams){
	
	
	$scope.load_error_text = "";

	$scope.event_name = $routeParams.event_name;

	var events = { 
		"explosion": [
		 
		{   filename: "image5.jpg",
		date: "1970/04/13",
		description: "About 56 hours after liftoff and more than halfway to the Moon, a spark and resulting fire ruptured the Number Two Oxygen Tank in the Service Module (SM) section of the Command Service Module (CSM), causing a violent explosion." },
		{ filename: "image6.jpg",
		date: "1970/04/13",
		description: "It resulted in a loss of all fuel cell-generated electricity and created a plethora of other complications with spacecraft operation, including a complete loss of oxygen and water supply from the CSM." }
		],
		"splashdown": [
		{ filename: "image3.jpg",
		date: "1970/04/17",
		description: "To the cheers and tears of an anxious world, Apollo 13 splashed down within sight of the recovery team. The crew was officially rescued about one hour following splashdown." },
		{ filename: "image4.jpg",
		date: "1970/04/17",
		description: "Apollo 13 Command Module Recovered." }
		],
		"launch": [
		{ filename: "image1.jpg",
		date: "1970/04/11",
		description: "Liftoff of Apollo 13 on April 11, 1970 13:13 p.m. Houston Time " },
		{ filename: "image2.jpg",
		date: "1970/04/11",
		description: " Apollo 13 Crew  James A. Lovell, Jr., Commander John L. Swigert, Jr., Command Module Pilot Fred W. Haise, Jr., Lunar Module Pilot " }
		]
	};

	if( events[$scope.event_name]){
		$scope.events = events[$scope.event_name];
	} else {
		$scope.load_error_text = "Event not found.";
	}
	});

	