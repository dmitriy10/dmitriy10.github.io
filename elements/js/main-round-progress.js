
var i = 0;
var k = 100;
var l = 0;
var m = 100;
var n = 0;
var o = 100;
var p = 0;
var a = 100;
var b = 0;
var x = 0;
setInterval(function() {
	i++;
	$('#p1').progress({
		value: i
	});

	if (i > 110) {
		k--;
		$('#p1').progress({
			value: k
		});
	}  

	if (k < -10) {
		l++;
		$('#p1').progress({
			value: l
		});
	}

	if (l > 110) {
		m--;
		$('#p1').progress({
			value: m
		});
	}  

	if (m < -10) {
		n++;
		$('#p1').progress({
			value: n
		});
	}
	
	if (n > 110) {
		o--;
		$('#p1').progress({
			value: o
		});
	}  

	if (o < -10) {
		p++;
		$('#p1').progress({
			value: p
		});
	}

	if (p > 110) {
		a--;
		$('#p1').progress({
			value: a
		});
	}  

	if (a < -10) {
		b++;
		$('#p1').progress({
			value: b
		});
	}

}, 50);