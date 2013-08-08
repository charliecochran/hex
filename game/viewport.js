var Viewport = {
	scale: 1,
	scrollup: false,
	scrollleft: false,
	scrolldown: false,
	scrollright: false,
	scrollspeed: 5,
	scroll: function() {
		if(Viewport.scrollup) {
			Viewport.y += Viewport.scrollspeed;
		}
		if(Viewport.scrolldown) {
			Viewport.y -= Viewport.scrollspeed;
		}
		if(Viewport.scrollleft) {
			Viewport.x += Viewport.scrollspeed;
		}
		if(Viewport.scrollright) {
			Viewport.x -= Viewport.scrollspeed;
		}
	},
	x: 0,
	y: 0
};