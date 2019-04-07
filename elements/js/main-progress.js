
var i = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
setInterval(function() {
	i++;
	$('#p1').progress({
		value: i
	});
}, 30);

setInterval(function() {
	k++;
	$('#p2').progress({
		value: k
	});
}, 240);

setInterval(function() {
	l++;
	$('#p3').progress({
		value: l
	});
}, 950);

setInterval(function() {
	m++;
	$('#p4').progress({
		value: m
	});
}, 1620);

setInterval(function() {
	n++;
	$('#p5').progress({
		value: n
	});
}, 1750);
