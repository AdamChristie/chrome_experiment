// event booleans
var pausePlayButtonRectTruth = false;
var pausePlayButtonShouldTrigger = false;
var rewindButtonRectTruth = false;
var fastForwardButtonRectTruth = false;
var video1PlayTruth = false;
var video1PlayShouldTrigger = false;
var video1IconPlayTruth = false;
var video1IconPlayShouldTrigger = false;

var location1IconPlayTruth = false;
var location1IconPlayShouldTrigger = false;

var location2IconPlayTruth = false;
var location2IconPlayShouldTrigger = false;

var location3IconPlayTruth = false;
var location3IconPlayShouldTrigger = false;

var location4IconPlayTruth = false;
var location4IconPlayShouldTrigger = false;

var video2PlayTruth = false;
var video2PlayShouldTrigger = false;
var video2IconPlayTruth = false;
var video2IconPlayShouldTrigger = false;
var video3PlayTruth = false;
var video3PlayShouldTrigger = false;
var video3IconPlayTruth = false;
var video3IconPlayShouldTrigger = false;
var video4PlayTruth = false;
var video4PlayShouldTrigger = false;
var video5PlayTruth = false;
var video5PlayShouldTrigger = false;
var timeDotTruth = false;
var bottomBarButton1Truth = false;
var bottomBarButton2Truth = false;
var bottomBarButton3Truth = false;
var bottomBarButton4Truth = false;
var bottomBarButton5Truth = false;
var bottomBarButton5ShouldTrigger = false;
var bottomBarButton6Truth = false;
var visibleMapRectTruth = false;
var expand = false;
var resetExpansion = false;
var hasExpanded = false;
var mouseX;
var mouseY;

window.onmousedown = function(event){
	// click interactions for thumbs and canvas objects
	pausePlayButtonRectTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, pausePlayButtonRect);
	if (pausePlayButtonRectTruth == true){
		pausePlayButtonShouldTrigger = true;
	}
	pausePlayButtonRectTruth = false;
	
	video1PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view1);
	if (video1PlayTruth == true){
		video1PlayShouldTrigger = true;
	}
	
	video1IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, directionalMarker1);
	if (video1IconPlayTruth == true){
		video1IconPlayShouldTrigger = true;
	}
	
	location1IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint1);
	if (location1IconPlayTruth == true){
		location1IconPlayShouldTrigger = true;
	}
	
	video2PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view2);
	if (video2PlayTruth == true){
		video2PlayShouldTrigger = true;
	}
	
	video2IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, directionalMarker2);
	if (video2IconPlayTruth == true){
		video2IconPlayShouldTrigger = true;
	}
	
	location2IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint2);
	if (location2IconPlayTruth == true){
		location2IconPlayShouldTrigger = true;
	}
	
	video3PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view3);
	if (video3PlayTruth == true){
		video3PlayShouldTrigger = true;
	}
	
	video3IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, directionalMarker3);
	if (video3IconPlayTruth == true){
		video3IconPlayShouldTrigger = true;
	}
	
	location3IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint3);
	if (location3IconPlayTruth == true){
		location3IconPlayShouldTrigger = true;
	}
	
	video4PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view4);
	if (video4PlayTruth == true){
		video4PlayShouldTrigger = true;
	}
	
	location4IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint4);
	if (location4IconPlayTruth == true){
		location4IconPlayShouldTrigger = true;
	}
	
	video5PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view5);
	if (video5PlayTruth == true){
		video5PlayShouldTrigger = true;
	}
	bottomBarButton5Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect5);
	if (bottomBarButton5Truth == true){
		bottomBarButton5ShouldTrigger = true;
	}
	bottomBarButton5Truth = false;
	
	timeDotTruth = interaction.circleClickTruth(event, windowCanvas.width, 0, 0, scrolled, timeDot);
	rewindButtonRectTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, rewindButtonRect);
	fastForwardButtonRectTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, fastForwardButtonRect);
	mouseX = event.clientX;
	mouseY = event.clientY;
}

window.onmousemove = function(event){

	if (timeDotTruth == true){
		timeDot.x = timeDot.x + ((event.clientX - mouseX) / windowCanvas.width);
		mouseX = event.clientX;
    	//currentTime = ((timeDot.x - (timeDotStartX))/(timeDotEndX))*whichVideo.duration;
    	currentTime = ((timeDot.x - (timeDotStartX))/(timeDotEndX))*maxDuration;
    	whichVideo.currentTime = currentTime;
	}
}

window.onmouseup = function(event){
	var portThumb1 = scene.children[1];
	var portThumb2 = scene.children[2];
	var portThumb3 = scene.children[3];
	var portThumb4 = scene.children[4];
	//pause
	pausePlayButtonRectTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, pausePlayButtonRect);
	if (whichVideo.paused == false && pausePlayButtonRectTruth == true && pausePlayButtonShouldTrigger == true){
		pauseAll();
		pausePlayButtonShouldTrigger = false;
		pausePlayButtonRectTruth = false;
	}
	
	//play
	pausePlayButtonRectTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, pausePlayButtonRect);
	if (whichVideo.paused == true && pausePlayButtonRectTruth == true && pausePlayButtonShouldTrigger == true){
		whichVideo.play();
		pausePlayButtonShouldTrigger = false;
		pausePlayButtonRectTruth = false;
		writeThumbs = true;
	}
	//thumbnail clicks
	video1PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view1);
	if (video1PlayTruth == true && video1PlayShouldTrigger == true){
		//if (!video1.ended){
			// setting 3d cylinder size, last played angle and 3d scene object coordinates
			videoImage.width = 1440;
			videoImage.height = 544;
			playVideo1();
			whichVideo = video1;
			targetRotation = angleSet1;
			portThumb1.position.set(60, 100, 60);
			portThumb1.rotation.y = -.5;
			portThumb2.position.set(80, 20, 80);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(70, 25, -60);
			portThumb3.rotation.y = -.5;
			portThumb4.position.set(-90, 0, 18);
			portThumb4.rotation.y = -1.5;
			
		//}
		
	}
	video1PlayTruth = false;
	video1PlayShouldTrigger = false;
	
	video1IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, directionalMarker1);
	if (video1IconPlayTruth == true && video1IconPlayShouldTrigger == true){
		//if (!video1.ended){
			videoImage.width = 1440;
			videoImage.height = 544;
			playVideo1();
			whichVideo = video1;
			targetRotation = angleSet1;
			portThumb1.position.set(60, 100, 60);
			portThumb1.rotation.y = -.5;
			portThumb2.position.set(80, 20, 80);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(70, 25, -60);
			portThumb3.rotation.y = -.5;
			portThumb4.position.set(-90, 0, 18);
			portThumb4.rotation.y = -1.5;			
		//}
		
	}
	video1IconPlayTruth = false;
	video1IconPlayShouldTrigger = false;
	
	location1IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint1);
	if (location1IconPlayTruth == true && location1IconPlayShouldTrigger == true){
		//if (!video1.ended){
			videoImage.width = 1440;
			videoImage.height = 544;
			playVideo1();
			whichVideo = video1;
			targetRotation = angleSet1;
			portThumb1.position.set(60, 100, 60);
			portThumb1.rotation.y = -.5;
			portThumb2.position.set(80, 20, 80);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(70, 25, -60);
			portThumb3.rotation.y = -.5;
			portThumb4.position.set(-90, 0, 18);
			portThumb4.rotation.y = -1.5;	
		//}
		
	}
	location1IconPlayTruth = false;
	location1IconPlayShouldTrigger = false;
	
	
	video2PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view2);
	if (video2PlayTruth == true && video2PlayShouldTrigger == true){
		//if (!video2.ended){
			videoImage.width = 1152;
			videoImage.height = 320;
			playVideo2();
			whichVideo = video2;
			targetRotation = angleSet2;
			portThumb1.position.set(-90, 15, -10);
			portThumb1.rotation.y = -1.5;
			portThumb2.position.set(80, 100, 80);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(-90, 25, -90);
			portThumb3.rotation.y = -2.5;
			portThumb4.position.set(-100, 10, 35);
			portThumb4.rotation.y = -1.5;
		//}
		
	}
	video2PlayTruth = false;
	video2PlayShouldTrigger = false;
	
	video2IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, directionalMarker2);
	if (video2IconPlayTruth == true && video2IconPlayShouldTrigger == true){
		//if (!video2.ended){
			videoImage.width = 1152;
			videoImage.height = 320;
			playVideo2();
			whichVideo = video2;
			targetRotation = angleSet2;
			portThumb1.position.set(-90, 15, -10);
			portThumb1.rotation.y = -1.5;
			portThumb2.position.set(80, 100, 80);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(-90, 25, -90);
			portThumb3.rotation.y = -2.5;
			portThumb4.position.set(-100, 10, 35);
			portThumb4.rotation.y = -1.5;
		//}
		
	}
	video2IconPlayTruth = false;
	video2IconPlayShouldTrigger = false;
	
	location2IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint2);
	if (location2IconPlayTruth == true && location2IconPlayShouldTrigger == true){
		//if (!video2.ended){
			videoImage.width = 1152;
			videoImage.height = 320;
			playVideo2();
			whichVideo = video2;
			targetRotation = angleSet2;
			portThumb1.position.set(-90, 15, -10);
			portThumb1.rotation.y = -1.5;
			portThumb2.position.set(80, 100, 80);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(-90, 25, -90);
			portThumb3.rotation.y = -2.5;
			portThumb4.position.set(-100, 10, 35);
			portThumb4.rotation.y = -1.5;
		//}
		
	}
	location2IconPlayTruth = false;
	location2IconPlayShouldTrigger = false;
	
	video3PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view3);
	if (video3PlayTruth == true && video3PlayShouldTrigger == true){
		//if (!video3.ended){
			videoImage.width = 822;
			videoImage.height = 144;
			playVideo3();
			whichVideo = video3;
			targetRotation = angleSet3;
			portThumb1.position.set(-20, -20, 80);
			portThumb1.rotation.y = -.5;
			portThumb2.position.set(80, -40, 110);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(70, 100, -60);
			portThumb3.rotation.y = -.5;
			portThumb4.position.set(-60, -24, 80);
			portThumb4.rotation.y = -.5;
		//}
		
	}
	video3PlayTruth = false;
	video3PlayShouldTrigger = false;
	
	video3IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, directionalMarker3);
	if (video3IconPlayTruth == true && video3IconPlayShouldTrigger == true){
		//if (!video3.ended){
			videoImage.width = 822;
			videoImage.height = 144;
			playVideo3();
			whichVideo = video3;
			targetRotation = angleSet3;
			portThumb1.position.set(-20, -20, 80);
			portThumb1.rotation.y = -.5;
			portThumb2.position.set(80, -40, 110);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(70, 100, -60);
			portThumb3.rotation.y = -.5;
			portThumb4.position.set(-60, -24, 80);
			portThumb4.rotation.y = -.5;
		//}
		
	}
	video3IconPlayTruth = false;
	video3IconPlayShouldTrigger = false;
	
	location3IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint3);
	if (location3IconPlayTruth == true && location3IconPlayShouldTrigger == true){
		//if (!video3.ended){
			videoImage.width = 822;
			videoImage.height = 144;
			playVideo3();
			whichVideo = video3;
			targetRotation = angleSet3;
			portThumb1.position.set(-20, -20, 80);
			portThumb1.rotation.y = -.5;
			portThumb2.position.set(80, -40, 110);
			portThumb2.rotation.y = -2.5;
			portThumb3.position.set(70, 100, -60);
			portThumb3.rotation.y = -.5;
			portThumb4.position.set(-60, -24, 80);
			portThumb4.rotation.y = -.5;
		//}
	}
	location3IconPlayTruth = false;
	location3IconPlayShouldTrigger = false;
	
	video4PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view4);
	if (video4PlayTruth == true && video4PlayShouldTrigger == true){
		//if (!video4.ended){
			playVideo4();
			whichVideo = video4;
			targetRotation = angleSet4;
		//}
		
	}
	video4PlayTruth = false;
	video4PlayShouldTrigger = false;
	
	location4IconPlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, locationPoint4);
	if (location4IconPlayTruth == true && location4IconPlayShouldTrigger == true){
		//if (!video4.ended){
			playVideo4();
			whichVideo = video4;
			targetRotation = angleSet4;
		//}
		
	}
	location4IconPlayTruth = false;
	location4IconPlayShouldTrigger = false;
	/*
	video5PlayTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, view5);
	if (video5PlayTruth == true && video5PlayShouldTrigger == true){
		init();
		playVideo5();
		targetRotation = angleSet5;
		whichVideo = video5;
		//targetRotation = targetRotation5;
	}
	video5PlayTruth = false;
	video5PlayShouldTrigger = false;
	
	////////
	
	function timeLine(){
   		var mathy = Math.max(video1.duration,video2.duration,video3.duration,video4.duration);
   	}
   	timeLine(); 
	
	bottomBarButton1Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect1);
	bottomBarButton2Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect2);
	bottomBarButton3Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect3);
	bottomBarButton4Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect4);
	bottomBarButton6Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect6);
	
	bottomBarButton5Truth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, bottomBarButtonRect5);
	visibleMapRectTruth = interaction.rectClickTruth(event, windowCanvas.width, 0, 0, scrolled, visibleMapRect);
	if (bottomBarButton5Truth == true && hasExpanded == false && bottomBarButton5ShouldTrigger == true){
		resetExpansion = false;
		expand = true;
		hasExpanded = true;
	} else if (hasExpanded == true && (bottomBarButton5Truth == true && bottomBarButton5ShouldTrigger == true || visibleMapRectTruth == true)){
		expand = false
		resetExpansion = true;
		hasExpanded = false;
	}
	bottomBarButton5ShouldTrigger = false;
	bottomBarButton5Truth = false;
	
	*/
	
	rewindButtonRectTruth = false;
	fastForwardButtonRectTruth = false;
	timeDotTruth = false;
}

// key commands
var SPACE_BAR = 32;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

document.onkeydown = function(event){
	var code = event.keyCode;
	if (code == SPACE_BAR){
		if (whichVideo.paused == false){
			pauseAll();
		} else {
			whichVideo.play();
		}
		return false;
	}
	
	if (code == LEFT_ARROW){
		rotateLeft();
		return false;
	}
	
	if (code == RIGHT_ARROW){
		rotateRight();
		return false;
	}
}

document.onkeyup = function(event){
	rewindButtonRectTruth = false;
	fastForwardButtonRectTruth = false;
}

// mouse events for 3d (rotating the cylinder, raycasting projector for 3d scene objects)
function onDocumentMouseDown(event){
	event.preventDefault();
	container.addEventListener( 'mousemove', onDocumentMouseMove, false );
	container.addEventListener( 'mouseup', onDocumentMouseUp, false );
	container.addEventListener( 'mouseout', onDocumentMouseOut, false );
	
	var vectorWidth = mainCanvas.width * 56/75;
	var vectorHeight = mainCanvas.width * 25.04/75;
	
	var mousexx = ( ( event.clientX - container.offsetLeft ) / vectorWidth ) * 2 - 1;
	var mouseyy =  - ( ( event.clientY - container.offsetTop ) / vectorHeight ) * 2 + 1;
	
	var vector = new THREE.Vector3( mousexx, mouseyy, 1 );
	
	projector.unprojectVector( vector, camera );

	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( objects );
	
	if ( intersects.length > 0 ) {
	
		var port1 = scene.children[1];
		var port2 = scene.children[2];
		var port3 = scene.children[3];
		var port4 = scene.children[4];
		var partname = intersects[ 0 ].object.name;
		if ( partname == 0 ){
			videoImage.width = 1440;
			videoImage.height = 544;
			playVideo1();
			whichVideo = video1;
			targetRotation = angleSet1;
			port1.position.set(60, 100, 60);
			port1.rotation.y = -.5;
			port2.position.set(80, 20, 80);
			port2.rotation.y = -2.5;
			port3.position.set(70, 25, -60);
			port3.rotation.y = -.5;
			port4.position.set(-90, 0, 18);
			port4.rotation.y = -1.5;
		}
		if ( partname == 1 ){
			videoImage.width = 1152;
			videoImage.height = 320;
			playVideo2();
			whichVideo = video2;
			targetRotation = angleSet2;
			port1.position.set(-90, 15, -10);
			port1.rotation.y = -1.5;
			port2.position.set(80, 100, 80);
			port2.rotation.y = -2.5;
			port3.position.set(-90, 25, -90);
			port3.rotation.y = -2.5;
			port4.position.set(-100, 10, 35);
			port4.rotation.y = -1.5;
		}
		if ( partname == 2 ){
			videoImage.width = 822;
			videoImage.height = 144;
			playVideo3();
			whichVideo = video3;
			targetRotation = angleSet3;
			port1.position.set(-20, -20, 80);
			port1.rotation.y = -.5;
			port2.position.set(80, -40, 110);
			port2.rotation.y = -2.5;
			port3.position.set(70, 100, -60);
			port3.rotation.y = -.5;
			port4.position.set(-60, -24, 80);
			port4.rotation.y = -.5;
		}
		if ( partname == 3 ){
			playVideo4();
		}

	}

	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;
}

function onDocumentMouseMove(event){
	mouseX = event.clientX - windowHalfX;
	targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown)*.005;
}
// removing events that would cause bugs
function onDocumentMouseUp(event){
	container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	container.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	container.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}
		
function onDocumentMouseOut(event) {
	container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	container.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	container.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}