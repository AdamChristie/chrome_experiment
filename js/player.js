
	/*
	scrolled = check if video is scrolled, whichVideo = the current video, currentTime = stores the current time, container = 360 video container, (camera, scene, renderer, cylinder, video, videoImage, videoImageContext, videoTexture, targetRotation, targetRotationOnMouseDown, mouseX, mouseXOnMouseDown, windowHalfX, windowHalfY, eometry, material) = specific three.js variables, video(integer)Is360 = checks videos to see if 360 based on width, (timeDotStartX, timeDotEndX) = stores x value of the timeline marker, frameNum = keeps track of which video to load, targetRotation(#) = variable tracking the rotation for each video, angleSet(#) = stores the rotation for each video
	*/
	
	var scrolled, whichVideo, currentTime, container, camera, scene, renderer, cylinder,
	mainCanvas, video, videoImage, videoImageContext, videoTexture, targetRotation,
	targetRotationOnMouseDown, mouseX, mouseXOnMouseDown, windowHalfX, windowHalfY,
	marval, geometry, material, windowCanvas, windowCanvasContext, video1Is360,
	video2Is360, video3Is360, video4Is360, video5Is360, timeDotStartX, timeDotEndX,
	frameNum, targetRotation1, targetRotation2, targetRotation3, targetRotation4,
	targetRotation5, angleSet1, angleSet2, angleSet3, angleSet4, angleSet5;
	
	// selecting the canvas and setting the context, assigning values
	
	windowCanvas = document.getElementById('windowCanvas');
	windowCanvasContext = windowCanvas.getContext('2d');
   	
   	video1Is360 = false;
   	video2Is360 = false;
   	video3Is360 = false;
   	video4Is360 = false;
   	video5Is360 = false;
   	
   	videoIsLucy = false;
   	
   	//frameNum = 1;
   	targetRotation = 4.75;
   	targetRotation1 = 4.75;
   	targetRotation2 = 4.75;
   	targetRotation3 = 4.75;
   	targetRotation4 = 4.75;
   	targetRotation5 = 4.75;
   	
   	angleSet1 = 4.75;
   	angleSet2 = 4.75;
   	angleSet3 = 4.75;
   	angleSet4 = 4.75;
   	angleSet5 = 4.75;
   	
	var arWidth = [];
	
	var projector, plane, object;
	var objects = [];
	var canSnag = document.getElementById('canvas360');
	
	var maxDuration;

	/*
	var videoDuration1 = 67.918367;
	var videoDuration2 = 67.866667 ;
	var videoDuration3 = 67.150417;
	var videoDuration4 = 136.576;
	*/
	
	// iterating through video elements to see which is 360 video
   	var nodes = document.getElementsByTagName('video');
   	for ( var lnt = 0; lnt < nodes.length; lnt++){
   		
   		var tnt= nodes[lnt].getAttribute('width');
   		arWidth.push(tnt);
   		if ( lnt == nodes.length - 1){
   		}
   	}

   	// detecting if the video is 360
	
	function videoTypeDetect(){
	
		if (video1.paused == false && video1.videoWidth > 1000){
			video = document.getElementById('video1');
		} else if (video2.paused == false && video2.videoWidth > 1000){
			video = document.getElementById('video2');
		} else if (video3.paused == false && video3.videoWidth > 1000){
			video = document.getElementById('video3');
		} else if (video4.paused == false && video4.videoWidth > 1000){
			video = document.getElementById('video4');	
		} 
		
		if (arWidth[0] > 1000){
			video1Is360 = true;
		}
		
		if (arWidth[1] > 1000){
			video2Is360 = true;
		}
		
		if (arWidth[2] > 1000){
			video3Is360 = true;
		}
		
		if (arWidth[3] > 1000){
			video4Is360 = true;
		}
		if (arWidth[4] > 1000){
			video5Is360 = true;
		}
		
	}
	
	videoTypeDetect()
	
	// assigning three.js variables
	
	mainCanvas = document.getElementById('windowCanvas');
	targetRotationOnMouseDown = 0;
	mouseX = 0;
	mouseXOnMouseDown = 0;
	windowHalfX = window.innerWidth/2;
	windowHalfY = window.innerHeight/2;
	container = document.getElementById( 'canvas360div' ); 
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.y = 0;
	camera.position.z = 10;
	
	// initialize three.js
	
	function init(){
		scene = new THREE.Scene();
		videoImage = document.createElement('canvas');
		videoImage.width = 1440;
		videoImage.height = 544;
		videoImageContext = videoImage.getContext('2d');
		videoTexture = new THREE.Texture(videoImage);
		videoTexture.minFilter = THREE.LinearFilter;
		videoTexture.magFilter = THREE.LinearFilter;
		geometry = new THREE.CylinderGeometry(360, 360, 520, 200, 200, true);
		geometry.applyMatrix(new THREE.Matrix4().makeRotationY(-Math.PI/2));		
		material = new THREE.MeshBasicMaterial({map: videoTexture, overdraw: true});
		cylinder = new THREE.Mesh(geometry, material);
		cylinder.scale.x = -1;
		cylinder.position.y = 0;
		scene.add( cylinder );
		
		var planeGeometry = new THREE.PlaneGeometry(8, 10);
		
		// creating objects in the 3d scene
		
		for ( var i = 0; i < 4; i ++ ) {
			var imgstring = 'img/kogeto_' + i + '.png';
			var planeTexture = new THREE.ImageUtils.loadTexture( imgstring );
			var planeMaterial = new THREE.MeshBasicMaterial( { map: planeTexture, side: THREE.DoubleSide, transparent: true } );
			var object = new THREE.Mesh(planeGeometry, planeMaterial);
			var sel = object.name = i;
			
			if (sel == 0){
				object.position.x = 60;
				object.position.y = 100;
				object.position.z = 60;
				object.rotation.y = -.5;
			}
			if (sel == 1){
				object.position.x = 80;
				object.position.y = 20;
				object.position.z = 80;
				object.rotation.y = -2.5;
			}
			if (sel == 2){
				object.position.x = 70;
				object.position.y = 25;
				object.position.z = -60;
				object.rotation.y = -.5;
			}
			if (sel == 3){
				object.position.x = -90;
				object.position.y = 0;
				object.position.z = 18;
				object.rotation.y = -1.5;
			}
	      	scene.add( object );
	      	objects.push( object );
		}			
		
		// projector for raycasting
		projector = new THREE.Projector();
		
		// Render
		renderer = new THREE.WebGLRenderer({antialias:true, canvas: canvas360});
		renderer.setSize( mainCanvas.width * 56/75, mainCanvas.width * 25.04/75 );
		container.appendChild( renderer.domElement );
		container.addEventListener( 'mousedown', onDocumentMouseDown, false );
	}

	// drawing all the objects and a refresh function to update them
	
	function layout(){
		refreshPieces();
		// map
		draw.image(windowCanvasContext, windowCanvas.width, "img/map.jpg", mapRect.x, mapRect.y, mapRect.w, mapRect.h);
		draw.fillObRect(windowCanvasContext, windowCanvas.width, "WhiteSmoke", leftCoverRect);
		draw.line(windowCanvasContext, windowCanvas.width, .5, 0, mapRect.y + mapRect.h, mapRect.w, mapRect.y + mapRect.h);
		// rewind, pause/play, fast forward objects
		draw.fillObRect(windowCanvasContext, windowCanvas.width, "white", rewindButtonRect);
		draw.obRect(windowCanvasContext, windowCanvas.width, .25, rewindButtonRect);
		draw.fillObRect(windowCanvasContext, windowCanvas.width, "white", pausePlayButtonRect);
		draw.obRect(windowCanvasContext, windowCanvas.width, .25, pausePlayButtonRect);
		draw.fillObRect(windowCanvasContext, windowCanvas.width, "white", fastForwardButtonRect);
		
		//timeline Rect
		draw.fillObRect(windowCanvasContext, windowCanvas.width, "lightsteelblue", timeLineRect);
		
		// rewind, pause/play, fast forward images
		draw.obRect(windowCanvasContext, windowCanvas.width, .25, fastForwardButtonRect);
		draw.image(windowCanvasContext, windowCanvas.width, "img/rewind.png", rewindButtonRect.x, rewindButtonRect.y, rewindButtonRect.w, rewindButtonRect.h);
		draw.image(windowCanvasContext, windowCanvas.width, "img/fastforward.png", fastForwardButtonRect.x, fastForwardButtonRect.y, fastForwardButtonRect.w, fastForwardButtonRect.h);
		draw.obLine(windowCanvasContext, windowCanvas.width, .5, viewDivision);
		
		// playback head
		draw.fillObArc(windowCanvasContext, windowCanvas.width, "white", timeDot);
		draw.obArc(windowCanvasContext, windowCanvas.width, .25, timeDot);
				
		draw.fillObRect(windowCanvasContext, windowCanvas.width, "white", rightCoverRect);
		
		// logo
		draw.obImage(windowCanvasContext, windowCanvas.width, "img/logo.png", logoRect);
		
		// sidebar thumbnails
		draw.obImage(windowCanvasContext, windowCanvas.width, "img/view_1.jpg", view1);
    	draw.obImage(windowCanvasContext, windowCanvas.width, "img/view_2.jpg", view2);
    	draw.obImage(windowCanvasContext, windowCanvas.width, "img/view_3.jpg", view3);
    	draw.obImage(windowCanvasContext, windowCanvas.width, "img/view_4.jpg", view4);
		
		// panoramic/normal video markers for the thumbs
    	draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_0.png", cameraMarker1);
		draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_1.png", cameraMarker2);
		draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_2.png", cameraMarker3);
		draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_3.png", cameraMarker4);
		
	}
	
	// drawing non-panoramic video and objects ] 
	function shouldDrawToVideoRect(video, videoIs360){
		if (video == whichVideo && videoIs360 != true){
    		windowCanvasContext.drawImage(whichVideo, videoRect.x * windowCanvas.width, videoRect.y * windowCanvas.width, videoRect.w * windowCanvas.width, videoRect.h * windowCanvas.width);
    		draw.obRect(windowCanvasContext, windowCanvas.width, .25, videoRect);
    		draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_0.png", directionalMarker1);
    		draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_1.png", directionalMarker2);
    		draw.obImage(windowCanvasContext, windowCanvas.width, "img/kogeto_2.png", directionalMarker3);
    		draw.obImage(windowCanvasContext, windowCanvas.width, "img/norotate.png", noRotateMarker);
    	}
	}
	
	function drawFrames(){
    	
    	draw.obRect(windowCanvasContext, windowCanvas.width, .25, view1);
    	if (currentTime == video1.duration || currentTime == 0){
    		draw.fillObRect(windowCanvasContext, windowCanvas.width, "alpha", view1);
    	}
		draw.obRect(windowCanvasContext, windowCanvas.width, .25, view2);
		draw.obRect(windowCanvasContext, windowCanvas.width, .25, view3);
		draw.obRect(windowCanvasContext, windowCanvas.width, .25, view4);

    	shouldDrawToVideoRect(video1, video1Is360);
    	shouldDrawToVideoRect(video2, video2Is360);
    	shouldDrawToVideoRect(video3, video3Is360);
    	shouldDrawToVideoRect(video4, video4Is360);
    	
    	draw360Circle(targetRotation1, video1, video1Is360, piview1, "yellowgreen");
    	draw360Circle(targetRotation2, video2, video2Is360, piview2, "cornflowerblue");
    	draw360Circle(targetRotation3, video3, video3Is360, piview3, "pink");
    	
    	draw360tooCircle(targetRotation1, video1, video1Is360, locationPoint1, "yellowgreen");
    	draw360tooCircle(targetRotation2, video1, video1Is360, locationPoint2, "CornflowerBlue");
    	draw360tooCircle(targetRotation3, video1, video1Is360, locationPoint3, "pink");
		
	}
	
	// browser event for playback
	window.requestAnimFrame = (function(){   
   		return window.requestAnimationFrame  ||    
		window.webkitRequestAnimationFrame ||    
 		window.mozRequestAnimationFrame ||    
   		window.oRequestAnimationFrame  ||    
     	window.msRequestAnimationFrame  ||    
     	function(callback, element){   
      		window.setTimeout(callback, 1000 / 60);   
     	};   
   	})();
	
	// renders 3d and adjusts margins of 3d container
	function render(){
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		if (whichVideo.readyState === whichVideo.HAVE_ENOUGH_DATA){
			videoImageContext.drawImage(whichVideo, 0, 0);
			if (videoTexture)
				videoTexture.needsUpdate = true;
				renderer.setSize(mainCanvas.width * videoRect.w, mainCanvas.width * videoRect.h);
				marval = (((videoRect.y) * mainCanvas.width)/height)*100;
				container.setAttribute("style", "top:" + marval.toString() + "%");						
		}
		camera.rotation.y = camera.rotation.y += (targetRotation - camera.rotation.y);
		renderer.render(scene, camera);
	}
	
	// synching video by time
	function synchronize(video){
   		if (video.paused == false){
    		currentTime = video.currentTime;
    		
    		if (video != video1){
    			video1.currentTime = currentTime;
    		}
    		
    		if (video != video2){
				video2.currentTime = currentTime;
			}
			
			if (video != video3){
				video3.currentTime = currentTime;
			}
			
			if (video != video4){
				video4.currentTime = currentTime;
			}
			/*
			if (video != video5){
				video5.currentTime = currentTime;
			}*/
			
			whichVideo = video;
		}
   	}
   	
   	// hide/show floating 3d canvas
   	function hide360Canvas(videoIs360, video){
   		if (videoIs360 == false && whichVideo == video){
    		document.getElementById('canvas360div').style.display = 'inline';
    		document.getElementById('canvas360div').style.display = 'none';
    	}
   	}
   	// rotation trackers on the thumbs
   	function draw360Circle(targetRotation, video, videoIs360, view, color){
   		if (videoIs360 == true){
   			draw.fillArc(windowCanvasContext, windowCanvas.width, "white", view.x + 11.5/75, view.y + 4.25/75, .75/75, 0, 2);
   			draw.fillArc(windowCanvasContext, windowCanvas.width, color, view.x + 11.5/75, view.y + 4.25/75, .75/75, -(targetRotation/Math.PI) - 1.25, -(targetRotation/Math.PI) - .75);
   		}
   	}
   	// rotation trackers on the map
   	function draw360tooCircle(targetRotation, video, videoIs360, locationPoint, color ){
   		if (videoIs360 == true){
   			draw.fillArc(windowCanvasContext, windowCanvas.width, "white", locationPoint.x + .01, locationPoint.y + .01, .75/75, 0, 2);
   			draw.fillArc(windowCanvasContext, windowCanvas.width, color, locationPoint.x + .01, locationPoint.y + .01, .75/75, -(targetRotation/Math.PI) - 1.85, -(targetRotation/Math.PI) - 1.35);
   		}
   	}
   	// play back circle
   	function playCircle(targetRotation, video, videoIs360, locationPoint, color ){
   		if (videoIs360 == true){
   			draw.lineArc(windowCanvasContext, windowCanvas.width, color, 2.5, locationPoint.x + .01, locationPoint.y + .01, .75/75, 0, 2);
   		}
   	}
   	//triangle shapes
   	function drawTriangle(targetRotation, video, videoIs360, view){
   		if (videoIs360 == false){
   			draw.fillTri(windowCanvasContext, windowCanvas.width, "orange", view.x + 11.5/75, view.y + 5/75, 1/75, (1.5) - .25, (1.5) + .25);
   		}
   	}
   	
   	function drawTriangle2(targetRotation, video, videoIs360, view){
   			draw.fillTri(windowCanvasContext, windowCanvas.width, "orange", locationPoint4.x + .02, locationPoint4.y + .005, 1/75, (-1.15) - .25, (-1.15) + .25);
   	}
   	
   	// updating objects and event conditionals
	
	function update(){
		draw.clearCanvas(windowCanvasContext, windowCanvas);
		draw.clearCanvas(windowCanvasContext, canSnag);
		render();
		layout();
		drawFrames();
		
		scrolled = document.body.scrollTop;
		
		if (expand == true){
			if (bottomBarBottomLine.y1 < 60/75){
				bottomBarTopLine.y1 += 1.125/75;
				bottomBarTopLine.y2 += 1.125/75;
			}
			if (viewDivision.x1 < 1){
				viewDivision.x1 += .75/75;
				viewDivision.x2 += .75/75;
				videoRect.w += (.007 * 1.4)
				videoRect.h += (.00313 * 1.4)
				rewindButtonRect.x += .375/75;
				timeDotX1 = videoRect.x + 1.5/75;
   				timeDotX2 = videoRect.x + videoRect.w;
			}
		} else {
			expand = false;
		}

		if (resetExpansion == true){
			if (bottomBarTopLine.y1 > 35.05/75){
				bottomBarTopLine.y1 -= 1.125/75;
				bottomBarTopLine.y2 -= 1.125/75;
			}
			if (viewDivision.x1 > 60/75){
				viewDivision.x1 -= .75/75;
				viewDivision.x2 -= .75/75;
				videoRect.w -= (.007 * 1.4)
				videoRect.h -= (.00313 * 1.4)
				rewindButtonRect.x -= .375/75;
				timeDotX1 = videoRect.x + 1.5/75;
   				timeDotX2 = videoRect.x + videoRect.w;
			}
		} else {
			resetExpansion = false;
		}
		
		if (whichVideo == video1){
			targetRotation1 = targetRotation;
			angleSet1 = targetRotation1;
			draw.obRectLine(windowCanvasContext, windowCanvas.width, 6, "yellowgreen", view1);
			playCircle(targetRotation1, video1, video1Is360, locationPoint1, "yellowgreen");
			
		} else {
			targetRotation1 = angleSet1;
		}
		if (whichVideo == video2){
			targetRotation2 = targetRotation;
			angleSet2 = targetRotation2;
			draw.obRectLine(windowCanvasContext, windowCanvas.width, 6, "cornflowerblue", view2);
			playCircle(targetRotation1, video1, video1Is360, locationPoint2, "cornflowerblue");
		} else {
			targetRotation2 = angleSet2;
		}
		if (whichVideo == video3){
			targetRotation3 = targetRotation;
			angleSet3 = targetRotation3;
			draw.obRectLine(windowCanvasContext, windowCanvas.width, 6, "pink", view3);
			playCircle(targetRotation1, video1, video1Is360, locationPoint3, "pink");
		} else {
			targetRotation3 = angleSet3;
		}
		if (whichVideo == video4){
			targetRotation4 = targetRotation;
			angleSet4 = targetRotation4;
			draw.obRectLine(windowCanvasContext, windowCanvas.width, 6, "orange", view4);
			drawTriangle2(2.5, video4, video4Is360, locationPoint4);
		} else {
			targetRotation4 = angleSet4;
		}
		
		draw360Circle(targetRotation1, video1, video1Is360, piview1, "yellowgreen");
    	draw360Circle(targetRotation2, video2, video2Is360, piview2, "cornflowerblue");
    	draw360Circle(targetRotation3, video3, video3Is360, piview3, "pink");

    	drawTriangle(targetRotation4, video4, video4Is360, piview4);
    	drawTriangle2(2.3, video4, video4Is360, locationPoint4);
		
		synchronize(video1);
		synchronize(video2);
		synchronize(video3);
		synchronize(video4);
		
		if (whichVideo.paused == true){
    		drawFrames();
    		draw.image(windowCanvasContext, windowCanvas.width, "img/play.png", pausePlayButtonRect.x, pausePlayButtonRect.y, pausePlayButtonRect.w, pausePlayButtonRect.h);
    	} else {
    		draw.image(windowCanvasContext, windowCanvas.width, "img/pause.png", pausePlayButtonRect.x, pausePlayButtonRect.y, pausePlayButtonRect.w, pausePlayButtonRect.h);
    	}
    	
    	hide360Canvas(video1Is360, video1);
		hide360Canvas(video2Is360, video2);
		hide360Canvas(video3Is360, video3);
		hide360Canvas(video4Is360, video4);
    	
    	if (timeDot.x < timeDotStartX){
    		//timeDot.x = timeDotStartX;
    		whichVideo.pause();
    		if (timeDotTruth == false){
    			whichVideo.play();
    		}
    	}
    	if (timeDot.x > timeDotEndX){
    		timeDot.x = timeDotEndX;
    		whichVideo.pause();
    		if (timeDotTruth == false){
    			whichVideo.play();
    		}
    	}
    	if (rewindButtonRectTruth == true){
    		currentTime -= 4/10;
    		whichVideo.currentTime = currentTime;
    	}
    	if (fastForwardButtonRectTruth == true){
    		currentTime += 4/10;
    		whichVideo.currentTime = currentTime;
    	}
    	
    	maxDuration = Math.max(video1.duration,video2.duration,video3.duration,video4.duration);

    	timeDot.x = ((currentTime/maxDuration)*(timeDotEndX))+ timeDotStartX;
    	//timeDot.x = ((currentTime/maxDuration)*(timeDotEndX))+ timeDotStartX;
    	currentTime = ((timeDot.x - timeDotStartX)/timeDotEndX)*maxDuration;
    	
    	timeDotStartX = videoRect.x + 1.5/75;
   		timeDotEndX = videoRect.x + videoRect.w - 1.5/75;
    	
    	if (timeDot.x > timeDotEndX){
    		timeDot.x = timeDotEndX;
    	}
    	if (timeDot.x < timeDotStartX){
    		timeDot.x = timeDotStartX;
    	}
	}
	
	function animate(){
		requestAnimFrame(animate);
		update();
	}
	
	// play one video at a time
	
	function playVideo1(){
    	video2.pause();
    	video3.pause();
    	video4.pause();
    	
    	video1.play();
    	
    }
    
    function playVideo2(){
    	video1.pause();
    	video3.pause();
    	video4.pause();

    	video2.play();
    }
    
     function playVideo3(){
    	video1.pause();
    	video2.pause();
    	video4.pause();

    	video3.play();
    }
    
     function playVideo4(){
    	video1.pause();
    	video2.pause();
    	video3.pause();

    	video4.play();
    }
    
    function pauseAll(){
    	video1.pause();
    	video2.pause();
    	video3.pause();
    	video4.pause();
    }
	
	function rotateLeft(){
		targetRotation += 1/30;
	}
	
	function rotateRight(){
		targetRotation -= 1/30;
	}
	// initializing on load
	window.onload = function(){
		whichVideo = video1;
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		if ( width < 1000 ){
		windowCanvas.width = width;
		} else {
		windowCanvas.width = 1000;
		}
		windowCanvas.height = windowCanvas.width * 1.08;
		
		layout();

		init();
		
		animate();
	}
	// redrawing for resize
	window.onresize = function(){
		width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		if ( width < 1000 ){
		windowCanvas.width = width;
		} else {
		windowCanvas.width = 1000;
		}
		windowCanvas.height = windowCanvas.width * 1.08;
	
		if ( width < 1001 ){
		renderer.setSize(windowCanvas.width * videoRect.w, windowCanvas.width * videoRect.h);
		}

	}
