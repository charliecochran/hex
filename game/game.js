var Game = function() {
	// global game vars
	g = {
		STAGE_WIDTH:800,
		STAGE_HEIGHT:600,
		playerColors: {
			0: "rgba(255,255,255,0.2)",
			1: "rgba(0,0,225,0.5)",
			2: "rgba(0,225,0,0.5)"
		},
		Viewport: {
			scale: 1,
			scrollup: false,
			scrollleft: false,
			scrolldown: false,
			scrollright: false,
			scrollspeed: 5,
			scroll: function() {
				if(g.Viewport.scrollup) {
					g.Viewport.y += g.Viewport.scrollspeed;
				}
				if(g.Viewport.scrolldown) {
					g.Viewport.y -= g.Viewport.scrollspeed;
				}
				if(g.Viewport.scrollleft) {
					g.Viewport.x += g.Viewport.scrollspeed;
				}
				if(g.Viewport.scrollright) {
					g.Viewport.x -= g.Viewport.scrollspeed;
				}
			},
			x: 0,
			y: 0
		}
	};
	
	var game = this;
	
	// set up screens
	var screens = {
		about: new aboutScreen(game),
		editor: new editorScreen(game),
		menu: new menuScreen(game)
	};
	
	// set the screen that opens on load
	screens.current = screens.menu;
	
	game.changeScreen = function(screen) {
		screens.current.remove();
		screens.current = screens[screen];
		screens.current.add();
	};
	
	// initialize!
	game.init = function() {
		var $canvas = $('#c');
		var canvas = $canvas[0];
		
		g.ctx = canvas.getContext('2d');
		
		$canvas.click(function(e) {
			screens.current.click(e.offsetX, e.offsetY);
		});
		
		$canvas.mousemove(function(e) {
			screens.current.hover(e.offsetX, e.offsetY);
		});
		
		// w = 87, a = 65, s = 83, d =68
		$(document).keydown(function(e) {
			if(e.keyCode == 87) {
				g.Viewport.scrollup = true;
			} else if(e.keyCode == 65) {
				g.Viewport.scrollleft = true;
			} else if(e.keyCode == 83) {
				g.Viewport.scrolldown = true;
			} else if(e.keyCode == 68) {
				g.Viewport.scrollright = true;
			}
		});

		$(document).keyup(function(e) {
			if(e.keyCode == 87) {
				g.Viewport.scrollup = false;
			} else if(e.keyCode == 65) {
				g.Viewport.scrollleft = false;
			} else if(e.keyCode == 83) {
				g.Viewport.scrolldown = false;
			} else if(e.keyCode == 68) {
				g.Viewport.scrollright = false;
			} else if(e.keyCode == 81) {
				g.Viewport.scale -= g.Viewport.scale > 0.25 ? 0.25 : 0;
			} else if(e.keyCode == 69) {
				g.Viewport.scale += 0.25;
			}
		});
		
		// load the default screen
		screens.current.add();
		
		// start the game loop
		game.main();
		var loopInterval = setInterval(game.main, 30);
	};
	
	game.main = function() {
		g.Viewport.scroll();
		screens.current.draw();
	};
	
	
	return this;
};