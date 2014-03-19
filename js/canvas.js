var draw = {

	//clearCanvas
	clearCanvas: function(context, canvas){
		context.clearRect(0, 0, canvas.width, canvas.height);
	},
	
	//scaled line
	line: function(context, scalefactor, thickness, x1, y1, x2, y2){
	
		context.beginPath();
		context.lineWidth = String(thickness);
		context.moveTo(x1 * scalefactor, y1 * scalefactor);
		context.lineTo(x2 * scalefactor, y2 * scalefactor);
		context.stroke();
	},
	
	//scaled object line
	obLine: function(context, scalefactor, thickness, line){
		
		var x1 = line.x1 * scalefactor;
		var y1 = line.y1 * scalefactor;
		var x2 = line.x2 * scalefactor;
		var y2 = line.y2 * scalefactor;
	
		context.beginPath();
		context.lineWidth = String(thickness);
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
	},
	
	//scaled object rect
	obRect: function(context, scalefactor, thickness, box){
	
		var x = box.x * scalefactor;
		var y = box.y * scalefactor;
		var w = box.w * scalefactor;
		var h = box.h * scalefactor;
		
		context.strokeStyle="black";
		context.fillStyle="black";
		context.beginPath();
		context.lineWidth=String(thickness);
		context.rect(x, y, w, h); 
		context.stroke();
	},
	
	obRectLine: function(context, scalefactor, thickness, color, box){
	
		var x = box.x * scalefactor;
		var y = box.y * scalefactor;
		var w = box.w * scalefactor;
		var h = box.h * scalefactor;
		
		context.strokeStyle=color;
		context.beginPath();
		context.lineWidth=String(thickness);
		context.rect(x, y, w, h); 
		context.stroke();
	},
	
	//filled scaled object rect
	fillObRect: function(context, scalefactor, color, box){
		
		var x = box.x * scalefactor;
		var y = box.y * scalefactor;
		var w = box.w * scalefactor;
		var h = box.h * scalefactor;
	
		context.fillStyle=color;
		context.fillRect(x, y, w, h);
	},
	//filled scaled object rect with opacity
	fillObRectAlph: function(context, scalefactor, box){
		
		var x = box.x * scalefactor;
		var y = box.y * scalefactor;
		var w = box.w * scalefactor;
		var h = box.h * scalefactor;
	
		context.fillStyle="rgba(0,0,0,.75)";
		context.fillRect(x, y, w, h);
	},
	
	//scaled object arc
	obArc: function(context, scalefactor, thickness, circle){
		
		var x = circle.x * scalefactor;
		var y = circle.y * scalefactor;
		var r = circle.r * scalefactor;
		var sAngle = circle.sAngle;
		var eAngle = circle.eAngle;
		
		//context.strokeStyle="black";
		context.beginPath();
		context.lineWidth=String(thickness);
		context.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI);
		context.stroke();
	},
	
	fillArc: function(context, scalefactor, color, x, y, r, sAngle, eAngle){
		
		var x = x * scalefactor;
		var y = y * scalefactor;
		var r = r * scalefactor;
		var sAngle = sAngle;
		var eAngle = eAngle;
		
		context.lineWidth=".25";
		context.strokeStyle="black";
		context.fillStyle=String(color);
		context.beginPath();
		context.moveTo(x, y);
		context.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI);
		context.stroke();
		context.fill()
	},
	
	lineArc: function(context, scalefactor, color, linewidth, x, y, r, sAngle, eAngle){
		
		var x = x * scalefactor;
		var y = y * scalefactor;
		var r = r * scalefactor;
		var sAngle = sAngle;
		var eAngle = eAngle;
		
		context.lineWidth=String(linewidth);
		context.strokeStyle=String(color);
		//context.fillStyle=String(color);
		context.beginPath();
		//context.moveTo(x, y);
		context.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI, false);
		context.stroke();
		//context.fill()
	},
	
	fillObArc: function(context, scalefactor, color, circle){
		
		var x = circle.x * scalefactor;
		var y = circle.y * scalefactor;
		var r = circle.r * scalefactor;
		var sAngle = circle.sAngle;
		var eAngle = circle.eAngle;
		
		context.beginPath();
		context.fillStyle=String(color);
		context.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI);
		context.stroke();
		context.fill()
	},
	
	//scaled image
	image: function (context, scalefactor, imageSource, x, y, w, h){
		
		var image = new Image();
		image.src = imageSource;
		
		context.drawImage(image, x * scalefactor, y * scalefactor, w * scalefactor, h * scalefactor);
	},
	
	//scaled object image
	obImage: function (context, scalefactor, imageSource, image){
		
		var newImage = new Image();
		newImage.src = imageSource;
		
		var x = image.x * scalefactor;
		var y = image.y * scalefactor;
		var w = image.w * scalefactor;
		var h = image.h * scalefactor;

		context.drawImage(newImage, x, y, w, h);
	},
	
	fillTri: function(context, scalefactor, color, x, y, r, sAngle, eAngle){
		
		var x = x * scalefactor;
		var y = y * scalefactor;
		var r = r * scalefactor;
		var sAngle = sAngle;
		var eAngle = eAngle;
		
		context.fillStyle=String(color);
		context.beginPath();
		context.moveTo(x, y);
		context.arc(x, y, r, sAngle * Math.PI, eAngle * Math.PI);
		context.stroke();
		context.fill()
	}
}

var interaction = {

	rectClickTruth: function(event, scalefactor, leftMargin, upperMargin, scrolled, box){
		var clientX = event.clientX;
		var clientY = event.clientY;
		
		var x = (box.x * scalefactor) + leftMargin;
		var y = (box.y * scalefactor) + upperMargin - scrolled;
		var w = box.w * scalefactor;
		var h = box.h * scalefactor;
		
		if (clientX > x && clientX < x + w && clientY > y && clientY < y + h){
			return true;
		}
		
		else{
			return false;
		}
	},
	
	circleClickTruth: function(event, scalefactor, leftMargin, upperMargin, scrolled, circle){
		var clientX = event.clientX;
		var clientY = event.clientY;

		var x = (circle.x * scalefactor) + leftMargin;
		var y = (circle.y * scalefactor) + upperMargin - scrolled;
		var r = circle.r * scalefactor;
		
		var dx = x - clientX;
		var dy = y - clientY;
		
		var clientR = Math.sqrt((dx*dx) + (dy*dy))
		
		if (clientR < r){
			return true;
		}
		else{
			return false;
		}
	}
}