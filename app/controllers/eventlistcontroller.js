apollo13App.controller('EventListController', function( $scope ) {

    $scope.events = [
    
     {name: 'launch', title: 'Apollo 13 Launch', date: '1970-04-11', description: 'Following liftoff, the Apollo 13 Saturn V launch vehicle S-II second stage boosters center engine cut off 132 seconds early. To compensate, the four remaining S-II engines burned an extra 34 seconds, and the S-IVB third stage burned an extra nine seconds.The flight continued according to plan. For the first time, the S-IVB third stage booster was fired on a lunar trajectory following spacecraft separation.The S-IVB impacted the Moon on April 15, 1970 at a point about 85 miles from the seismometer planted on the lunar surface by the Apollo 12 astronauts.'},
   

    {name: 'explosion', title: 'Apollo 13 Explosion ', date: '1970-04-13', description: 'About 56 hours after liftoff and more than halfway to the Moon, a spark and resulting fire ruptured the Number Two Oxygen Tank in the Service Module (SM) section of the Command Service Module (CSM), causing a violent explosion.Ironically, the explosion took place on April 13th.It resulted in a loss of all fuel cell-generated electricity and created a plethora of other complications with spacecraft operation, including a complete loss of oxygen and water supply from the CSM.The mission was immediately aborted, with the main focus shifting to the safe return of the crew.The CSM was powered down, and the crew shifted to the Lunar Module (LM) for the bulk of the return flight. Not wishing to risk complicated maneuvers to turn the spacecraft around, NASA directed Apollo 13 to proceed to the Moon.' },

    {name: 'splashdown', title: 'Apollo 13 Splash Down', date: '1970-04-17', description: 'Swigert jettisoned the SM while Lovell and Haise remained aboard the LM. Following jettison, the Apollo 13 crew viewed and took dramatic pictures of the explosions aftermath.Indeed, an entire side of the SM had been blown out. Were it not for the near-vacuum of space, the crew would surely have been killed by the blast and resulting fire.Eventually, Lovell and Haise joined Swigert on the CM, and the LM which had successfully acted as a lifeboat was jettisoned. After final attitude adjustments, the CM re-entered Earth atmosphere.Under such challenging circumstances, no one on the ground was certain that the CM could achieve the proper inclination to avoid burning up in, or skipping off, Earth atmosphere.As in all previous U.S. manned space flights, a communications blackout of several minutes occurred as the Apollo 13 spacecraft passed through the atmosphere.To the cheers and tears of an anxious world, Apollo 13 splashed down within sight of the recovery team. The crew was officially rescued about one hour following splashdown.' },
      ];
   

    $scope.new_album = {};
    $scope.add_event_error = "";

    $scope.addEvent = function( new_event ){
            // if new_event is not defined
            if (typeof(new_event) === 'undefined') {
        // then add an error message to $scope and exit
        $scope.add_event_error = "The form is not properly filled out";
        return false;
    };
    if (!new_event.title) 
    {
        $scope.add_event_error = "Missing title";
    }
    else if (!new_event.date || !is_valid_date(new_event.date))
    {
        $scope.add_event_error = "You must provide a date in format yyyy/mm/dd";
    }
    else if (!new_event.description)
    {
        $scope.add_event_error = "Missing description";
    }
    else if (!new_event.name)
    {
        $scope.add_event_error = "Missing name - six characters";
    }
    else {
        $scope.events.push( new_event );
        $scope.adding_event = {};
        $scope.add_event_error = "";
    };
};

function is_valid_date (the_date){
        //http://eloquentjavascript.net/09_regexp.html
        if (the_date.match(/^[0-9]{4,4}\/[0-9]{2,2}\/[0-9]{2,2}$/)){
            var d = new Date(the_date);
            return !(isNaN(d.getTime()));
        } else {
            return false;
        };
    };
});