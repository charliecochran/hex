var lineTest = function(A, B, C) {
	return (B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x);
}
var saveMaps = function(maps) {
	localStorage.setItem("maps", JSON.stringify(maps));
};
var getMaps = function() {
	return JSON.parse(localStorage.getItem("maps")) || [];
};