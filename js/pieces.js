var viewDivision = {x1: 60/75, y1: 0, x2: 60/75, y2: .875}
var topBarBottomLine = {x1: 0, y1: 3/75, x2: viewDivision.x1, y2: 3/75}
var videoRect = {x: 2/75, y: .55/75, w: 56/75, h: 25.04/75}
/*
var view1 = {x: viewDivision.x1 + 1/75, y: 2/75, w: 11.375/75, h: 5.075/75}
var view2 = {x: viewDivision.x1 + 1/75, y: 10.8/75, w: 11.375/75, h: 5.075/75}
var view3 = {x: viewDivision.x1 + 1/75, y: 17.6/75, w: 11.375/75, h: 5.075/75}
var view4 = {x: viewDivision.x1 + 1/75, y: 24.4/75, w: 11.375/75, h: 5.075/75}
var view5 = {x: viewDivision.x1 + 1/75, y: 31.2/75, w: 13/75, h: 5.8/75}
*/

// thumbnails
var view1 = {x: viewDivision.x1 + 1/75, y: .55/75, w: 11.375/75, h: 5.075/75}
var view2 = {x: viewDivision.x1 + 1/75, y: 6.625/75, w: 11.375/75, h: 5.075/75}
var view3 = {x: viewDivision.x1 + 1/75, y: 12.8/75, w: 11.375/75, h: 5.075/75}
var view4 = {x: viewDivision.x1 + 1/75, y: 18.875/75, w: 11.375/75, h: 5.075/75}
var view5 = {x: viewDivision.x1 + 1/75, y: 31.2/75, w: 13/75, h: 5.8/75}

// thumbnail rotation trackers
var piview1 = {x: viewDivision.x1 - 9/75, y: 0/75, w: 11.375/75, h: 5.075/75}
var piview2 = {x: viewDivision.x1 - 9/75, y: 6.075/75, w: 11.375/75, h: 5.075/75}
var piview3 = {x: viewDivision.x1 - 9/75, y: 12.25/75, w: 11.375/75, h: 5.075/75}
var piview4 = {x: viewDivision.x1 - 9/75, y: 18.325/75, w: 11.375/75, h: 5.075/75}

var bottomBarTopLine = {x1: 0, y1: 35.05/75, x2: viewDivision.x1, y2: 35.05/75}
var bottomBarTopLine2 = {x1: 0, y1: videoRect.y + videoRect.h + 6/75, x2: viewDivision.x1, y2: videoRect.y + videoRect.h + 6/75}
var rewindButtonRect = {x: 18/75, y: bottomBarTopLine.y1 - 5/75, w: 6/75, h: 2.5/75}
var pausePlayButtonRect = {x: rewindButtonRect.x + 8/75, y: bottomBarTopLine.y1 - 5/75, w: 6/75, h: 2.5/75}
var fastForwardButtonRect = {x: rewindButtonRect.x + 16/75, y: bottomBarTopLine.y1 - 5/75, w: 6/75, h: 2.5/75}
var timeDot = {x: 2.5/75, y: bottomBarTopLine2.y1, r: .5/75, sAngle: 0, eAngle: 2}

// timeline markers for diff. duration videos
var vid1dur = {x: .425, y: bottomBarTopLine2.y1, w: .25/75, h: 1/75}
var vid2dur = {x: .417, y: bottomBarTopLine2.y1, w: .25/75, h: 1/75}
var vid3dur = {x: .415, y: bottomBarTopLine2.y1, w: .25/75, h: 1/75}

// canvas objects on the map
var locationPoint1 = {x: .5, y: bottomBarTopLine2.y1, w: 2/75, h: 2/75}
var locationPoint2 = {x: .45, y: bottomBarTopLine2.y1, w: 2/75, h: 2/75}
var locationPoint3 = {x: .5, y: bottomBarTopLine2.y1, w: 2/75, h: 2/75}
var locationPoint4 = {x: .54, y: bottomBarTopLine2.y1, w: 2/75, h: 2/75}

// buttons
var timeBarBarDistance = 5/75;
var belowTimeDotLine = {x1: 0, y1: timeDot.y + 1/75, x2: viewDivision.x1, y2: timeDot.y + 1/75}
var aboveBottomBarLine = {x1: 0, y1: videoRect.y + videoRect.h + timeBarBarDistance, x2: bottomBarTopLine.x2, y2: videoRect.y + videoRect.h + timeBarBarDistance}
var bottomBarButtonRect1 = {x: bottomBarTopLine.x2 * 0, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
var bottomBarButtonRect2 = {x: bottomBarTopLine.x2 * 1/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
var bottomBarButtonRect3 = {x: bottomBarTopLine.x2 * 2/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
var bottomBarButtonRect4 = {x: bottomBarTopLine.x2 * 3/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
var bottomBarButtonRect5 = {x: bottomBarTopLine.x2 * 4/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
var bottomBarButtonRect6 = {x: bottomBarTopLine.x2 * 5/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
var bottomBarBottomLine = {x1: 0, y1: bottomBarTopLine.y1 + 2.5/75, x2: bottomBarTopLine.x2, y2: bottomBarTopLine.y1 + 2.5/75}
var leftCoverRect = {x: 0, y: 0, w: viewDivision.w, h: bottomBarBottomLine.y1 - .5};
var bottomBarDivision1 = {x1: bottomBarTopLine.x2 * 1/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 1/6, y2: bottomBarBottomLine.y1}
var bottomBarDivision2 = {x1: bottomBarTopLine.x2 * 2/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 2/6, y2: bottomBarBottomLine.y1}
var bottomBarDivision3 = {x1: bottomBarTopLine.x2 * 3/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 3/6, y2: bottomBarBottomLine.y1}
var bottomBarDivision4 = {x1: bottomBarTopLine.x2 * 4/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 4/6, y2: bottomBarBottomLine.y1}
var bottomBarDivision5 = {x1: bottomBarTopLine.x2 * 5/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 5/6, y2: bottomBarBottomLine.y1}
var playLine1 = {x1: pausePlayButtonRect.x + 2.5/75, y1: pausePlayButtonRect.y + .375/75, x2: pausePlayButtonRect.x + 2.5/75, y2: pausePlayButtonRect.y + 2.125/75}
var playLine2 = {x1: pausePlayButtonRect.x + 2.5/75, y1: pausePlayButtonRect.y + .375/75, x2: pausePlayButtonRect.x + 4/75, y2: pausePlayButtonRect.y + 1.25/75}
var playLine3 = {x1: pausePlayButtonRect.x + 4/75, y1: pausePlayButtonRect.y + 1.25/75, x2: pausePlayButtonRect.x + 2.5/75, y2: pausePlayButtonRect.y + 2.125/75}
var playLine4 = {x1: pausePlayButtonRect.x + 2.125/75, y1: pausePlayButtonRect.y + .375/75, x2: pausePlayButtonRect.x + 2.125/75, y2: pausePlayButtonRect.y + 2.125/75}
var fastForwardLine1 = {x1: fastForwardButtonRect.x + 2.375/75, y1: fastForwardButtonRect.y + .375/75, x2: fastForwardButtonRect.x + 2.375/75, y2: fastForwardButtonRect.y + 2.125/75}
var fastForwardLine2 = {x1: fastForwardButtonRect.x + 2.375/75, y1: fastForwardButtonRect.y + .375/75, x2: fastForwardButtonRect.x + 3.875/75, y2: fastForwardButtonRect.y + 1.25/75}
var fastForwardLine3 = {x1: fastForwardButtonRect.x + 3.875/75, y1: fastForwardButtonRect.y + 1.25/75, x2: fastForwardButtonRect.x + 2.375/75, y2: fastForwardButtonRect.y + 2.125/75}
var rewindLine1 = {x1: rewindButtonRect.x + 3.625/75, y1: rewindButtonRect.y + .375/75, x2: rewindButtonRect.x + 3.625/75, y2: rewindButtonRect.y + 2.125/75}
var rewindLine2 = {x1: rewindButtonRect.x + 3.625/75, y1: rewindButtonRect.y + .375/75, x2: rewindButtonRect.x + 2.125/75, y2: rewindButtonRect.y + 1.25/75}
var rewindLine3 = {x1: rewindButtonRect.x + 2.125/75, y1: rewindButtonRect.y + 1.25/75, x2: rewindButtonRect.x + 3.625/75, y2: rewindButtonRect.y + 2.125/75}
var pauseRect1 = {x: pausePlayButtonRect.x + 2.375/75, y: pausePlayButtonRect.y + .375/75, w: .375/75, h: 1.75/75}
var pauseRect2 = {x: pausePlayButtonRect.x + 3.25/75, y: pausePlayButtonRect.y + .375/75, w: .375/75, h: 1.75/75}
//var logoRect = {x: viewDivision.x1 + 4/75, y: topBarBottomLine.y1 - 2.375/75, w: 7/75, h: 2/75}
var logoRect = {x: 18/75, y: bottomBarTopLine.y1 - 5/75, w: 10.5/75, h: 3/75}
var otherLogoRect = {x: logoRect.x - 1, y: topBarBottomLine.y1 - 2.375/75, w: 7/75, h: 2/75}
var mapHeight = 1 - bottomBarBottomLine.y1
var mapRect = {x: 0, y: bottomBarBottomLine.y1 - .17, w: viewDivision.x1, h: mapHeight}
var timeLineRect = {x: 0, y: aboveBottomBarLine.y1 - 1.5, w: 60/75, h: 1/75}
var rightCoverRect = {x: viewDivision.x1, y: viewDivision.y1, w: 1 - viewDivision.x1, h: 2}
var visibleMapRect = {x: 0, y: bottomBarBottomLine.y1, w: viewDivision.x1, h: 1 - bottomBarBottomLine.y1}
// icons over thumbs
var cameraMarker1 = {x: viewDivision.x1 + 13/75, y: 3.55/75, w: 2/75, h: 2/75}
var cameraMarker2 = {x: viewDivision.x1 + 13/75, y: 9.625/75, w: 2/75, h: 2/75}
var cameraMarker3 = {x: viewDivision.x1 + 13/75, y: 15.8/75, w: 2/75, h: 2/75}
var cameraMarker4 = {x: viewDivision.x1 + 13/75, y: 21.875/75, w: 2/75, h: 2/75}
//click objects on normal video
var directionalMarker1 = {x: 2/75 + .26, y: 4/75 + .14, w: 1.5/75, h: 1.5/75}
var directionalMarker2 = {x: 2/75 + .585, y: 4/75 + .16, w: 1.5/75, h: 1.5/75}
var directionalMarker3 = {x: 2/75 + .005, y: 4/75 + .14, w: 1.5/75, h: 1.5/75}

var noRotateMarker = {x: 2/75 + .65, y: 4/75 - .02, w: 5/75, h: 2.5/75}
// refreshing object sizes
function refreshPieces(){
	bottomBarButtonRect1 = {x: bottomBarTopLine.x2 * 0, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
	bottomBarButtonRect2 = {x: bottomBarTopLine.x2 * 1/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
	bottomBarButtonRect3 = {x: bottomBarTopLine.x2 * 2/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
	bottomBarButtonRect4 = {x: bottomBarTopLine.x2 * 3/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
	bottomBarButtonRect5 = {x: bottomBarTopLine.x2 * 4/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
	bottomBarButtonRect6 = {x: bottomBarTopLine.x2 * 5/6, y: bottomBarTopLine.y1, w: bottomBarTopLine.x2 * 1/6, h: 2.5/75}
	view1 = {x: viewDivision.x1 + 1/75, y: .55/75, w: 11.375/75, h: 5.075/75}
	view2 = {x: viewDivision.x1 + 1/75, y: 6.625/75, w: 11.375/75, h: 5.075/75}
	view3 = {x: viewDivision.x1 + 1/75, y: 12.8/75, w: 11.375/75, h: 5.075/75}
	view4 = {x: viewDivision.x1 + 1/75, y: 18.875/75, w: 11.375/75, h: 5.075/75}
	view5 = {x: viewDivision.x1 + 1/75, y: 31.2/75, w: 13/75, h: 5.8/75}
	view6 = {x: viewDivision.x1 + 1/75, y: 38/75, w: 13/75, h: 5.8/75}
	view7 = {x: viewDivision.x1 + 1/75, y: 44.8/75, w: 13/75, h: 5.8/75}
	view8 = {x: viewDivision.x1 + 1/75, y: 51.6/75, w: 13/75, h: 5.8/75}
	
	piview1 = {x: viewDivision.x1 - 9/75, y: 0/75, w: 11.375/75, h: 5.075/75}
	piview2 = {x: viewDivision.x1 - 9/75, y: 6.075/75, w: 11.375/75, h: 5.075/75}
	piview3 = {x: viewDivision.x1 - 9/75, y: 12.25/75, w: 11.375/75, h: 5.075/75}
	piview4 = {x: viewDivision.x1 - 9/75, y: 18.325/75, w: 11.375/75, h: 5.075/75}
	/*
	cameraMarker1 = {x: viewDivision.x1 + 1.5/75, y: 4.5/75, w: 1.5/75, h: 1.5/75}
	cameraMarker2 = {x: viewDivision.x1 + 1.5/75, y: 11.3/75, w: 1.5/75, h: 1.5/75}
	cameraMarker3 = {x: viewDivision.x1 + 1.5/75, y: 18.1/75, w: 1.5/75, h: 1.5/75}
	cameraMarker4 = {x: viewDivision.x1 + 13/75, y: 27.9/75, w: 2/75, h: 2/75}
	*/
	cameraMarker1 = {x: viewDivision.x1 + 13/75, y: 3.55/75, w: 2/75, h: 2/75}
	cameraMarker2 = {x: viewDivision.x1 + 13/75, y: 9.625/75, w: 2/75, h: 2/75}
	cameraMarker3 = {x: viewDivision.x1 + 13/75, y: 15.8/75, w: 2/75, h: 2/75}
	cameraMarker4 = {x: viewDivision.x1 + 13/75, y: 21.875/75, w: 2/75, h: 2/75}
	
	directionalMarker1 = {x: 2/75 + .26, y: 4/75 + .14, w: 1.5/75, h: 1.5/75}
	directionalMarker2 = {x: 2/75 + .585, y: 4/75 + .16, w: 1.5/75, h: 1.5/75}
	directionalMarker3 = {x: 2/75 + .005, y: 4/75 + .14, w: 1.5/75, h: 1.5/75}
	
	noRotateMarker = {x: 2/75 + .65, y: 4/75 - .02, w: 5/75, h: 2.5/75}
	
	bottomBarTopLine2 = {x1: 0, y1: videoRect.y + videoRect.h + 6/75, x2: viewDivision.x1, y2: videoRect.y + videoRect.h + 6/75}
	bottomBarBottomLine = {x1: 0, y1: bottomBarTopLine.y1 + 2.5/75, x2: bottomBarTopLine.x2, y2: bottomBarTopLine.y1 + 2.5/75}
	leftCoverRect = {x: 0, y: 0, w: viewDivision.x1, h: bottomBarBottomLine.y1 - .09};
	rightCoverRect = {x: viewDivision.x1, y: viewDivision.y1, w: 1 - viewDivision.x1, h: 2}
	bottomBarDivision1 = {x1: bottomBarTopLine.x2 * 1/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 1/6, y2: bottomBarBottomLine.y1}
	bottomBarDivision2 = {x1: bottomBarTopLine.x2 * 2/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 2/6, y2: bottomBarBottomLine.y1}
	bottomBarDivision3 = {x1: bottomBarTopLine.x2 * 3/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 3/6, y2: bottomBarBottomLine.y1}
	bottomBarDivision4 = {x1: bottomBarTopLine.x2 * 4/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 4/6, y2: bottomBarBottomLine.y1}
	bottomBarDivision5 = {x1: bottomBarTopLine.x2 * 5/6, y1: bottomBarTopLine.y1, x2: bottomBarTopLine.x2 * 5/6, y2: bottomBarBottomLine.y1}
	//rewindButtonRect.y = bottomBarTopLine.y1 - 5/75;
	rewindButtonRect.y = videoRect.y + videoRect.h + 1/75;
	//pausePlayButtonRect.y = bottomBarTopLine.y1 - 5/75;
	pausePlayButtonRect.y = videoRect.y + videoRect.h + 1/75;
	pausePlayButtonRect.x = rewindButtonRect.x + 8/75;
	//fastForwardButtonRect.y = bottomBarTopLine.y1 - 5/75;
	fastForwardButtonRect.y = videoRect.y + videoRect.h + 1/75;
	fastForwardButtonRect.x = rewindButtonRect.x + 16/75;
	playLine1 = {x1: pausePlayButtonRect.x + 2.5/75, y1: pausePlayButtonRect.y + .375/75, x2: pausePlayButtonRect.x + 2.5/75, y2: pausePlayButtonRect.y + 2.125/75}
	playLine2 = {x1: pausePlayButtonRect.x + 2.5/75, y1: pausePlayButtonRect.y + .375/75, x2: pausePlayButtonRect.x + 4/75, y2: pausePlayButtonRect.y + 1.25/75}
	playLine3 = {x1: pausePlayButtonRect.x + 4/75, y1: pausePlayButtonRect.y + 1.25/75, x2: pausePlayButtonRect.x + 2.5/75, y2: pausePlayButtonRect.y + 2.125/75}
	playLine4 = {x1: pausePlayButtonRect.x + 2.125/75, y1: pausePlayButtonRect.y + .375/75, x2: pausePlayButtonRect.x + 2.125/75, y2: pausePlayButtonRect.y + 2.125/75}
	fastForwardLine1 = {x1: fastForwardButtonRect.x + 2.375/75, y1: fastForwardButtonRect.y + .375/75, x2: fastForwardButtonRect.x + 2.375/75, y2: fastForwardButtonRect.y + 2.125/75}
	fastForwardLine2 = {x1: fastForwardButtonRect.x + 2.375/75, y1: fastForwardButtonRect.y + .375/75, x2: fastForwardButtonRect.x + 3.875/75, y2: fastForwardButtonRect.y + 1.25/75}
	fastForwardLine3 = {x1: fastForwardButtonRect.x + 3.875/75, y1: fastForwardButtonRect.y + 1.25/75, x2: fastForwardButtonRect.x + 2.375/75, y2: fastForwardButtonRect.y + 2.125/75}
	rewindLine1 = {x1: rewindButtonRect.x + 3.625/75, y1: rewindButtonRect.y + .375/75, x2: rewindButtonRect.x + 3.625/75, y2: rewindButtonRect.y + 2.125/75}
	rewindLine2 = {x1: rewindButtonRect.x + 3.625/75, y1: rewindButtonRect.y + .375/75, x2: rewindButtonRect.x + 2.125/75, y2: rewindButtonRect.y + 1.25/75}
	rewindLine3 = {x1: rewindButtonRect.x + 2.125/75, y1: rewindButtonRect.y + 1.25/75, x2: rewindButtonRect.x + 3.625/75, y2: rewindButtonRect.y + 2.125/75}
	pauseRect1 = {x: pausePlayButtonRect.x + 2.375/75, y: pausePlayButtonRect.y + .375/75, w: .375/75, h: 1.75/75}
	pauseRect2 = {x: pausePlayButtonRect.x + 3.25/75, y: pausePlayButtonRect.y + .375/75, w: .375/75, h: 1.75/75}
	//logoRect = {x: viewDivision.x1 + 4/75, y: topBarBottomLine.y1 - 2.375/75, w: 7/75, h: 2/75}
	logoRect = {x: 2/75, y: bottomBarTopLine.y1 - 8.5/75, w: 10.5/75, h: 3/75}
	otherLogoRect.x = logoRect.x - 78.125/75;
	mapRect.w = viewDivision.x1;
	mapRect.h = viewDivision.x1 * (852/1250);
	timeLineRect = {x: 0, y: aboveBottomBarLine.y1, w: 60/75, h: 1/75}
	bottomBarTopLine.x2 = viewDivision.x1;
	timeDot.y = bottomBarTopLine2.y1 - .5/75;
	
	//
	
	vid1dur.y = bottomBarTopLine2.y1 - 1/75;
	vid2dur.y = bottomBarTopLine2.y1 - 1/75;
	vid3dur.y = bottomBarTopLine2.y1 - 1/75;
	
	locationPoint1.y = bottomBarTopLine2.y1 + 4.5/75;
	locationPoint2.y = bottomBarTopLine2.y1 + 4.5/75;
	locationPoint3.y = bottomBarTopLine2.y1 + 7.5/75;
	locationPoint4.y = bottomBarTopLine2.y1 + 4/75;
	
	//
	
	visibleMapRect = {x: 0, y: bottomBarBottomLine.y1, w: viewDivision.x1, h: 1 - bottomBarBottomLine.y1}
	aboveBottomBarLine = {x1: 0, y1: videoRect.y + videoRect.h + timeBarBarDistance, x2: bottomBarTopLine.x2, y2: videoRect.y + videoRect.h + timeBarBarDistance}
	belowTimeDotLine = {x1: 0, y1: timeDot.y + 1/75, x2: viewDivision.x1, y2: timeDot.y + 1/75}
}