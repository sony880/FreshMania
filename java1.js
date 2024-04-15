function help() {
	alert('Телефон тех.поддержки:\nHаписать в тех.поддержку:@support.telegram')
}
function contact(){
	var tel="+8900333450";
	var mail="freshmania@gmail.com";
	var hours="24 часа";
	alert("Tелефон тех.поддержки: " + tel + "\n" + "Кoнтакты тех.поддержки: " + mail + "\n" + "Режим работы: " + hours)
}
function calc() {
	var a = parseFloat(prompt("Введите первое число:"));
	var b = parseFloat(prompt("Введите второе число:"));
	var sum = a + b;
	var vichit = a - b;
	var pr = a * b;
	var del = a / b;
	alert("сумма " + a + "+" + b + "=" + sum);
	alert("разность " + a + "-" + b + "=" + vichit);
	alert("произведение " + a + "*" + b + "=" + pr);
	alert("частное " + a + "/" + b + "=" + del);
}
function string(){
	let text = prompt("Введите текст");
	let l = text.length;
	alert(l);
	let e = text[l-1];
	alert(e);
	let otzv = text.indexOf('mania');
	alert(otzv)
}
function metod(){
	var str = prompt("введите название блюда");
	var str = str.replace( 'шоколадный' , 'ванильный' );
	alert(str);
	var k = prompt("");
	var k = k.toLowerCase();
	alert(k)
}
function anim_on(){
	var a = document.getElementById('animate');
	a.style.padding = "20px";
}
function anim_off(){
	var a = document.getElementById('animate');
	a.style.padding= "10px";
}
function overrble(){
	var h = document.getElementById('overr');
	if (window.getComputedStyle(h).backgroundColor == "rgb(255, 154, 118)")
	{
		h.style.backgroundColor = "#679B9B";
	}
	else 
		h.style.backgroundColor = "rgb(255, 154, 118)";
}
function difficult(){
	let a = prompt("Введите число");
	let b = prompt("Введите число");
	if (a < b && a != 5)
	{
		alert("условие верно")
	}
	else
		alert("условие не верно")
}
function massive(){
	var arr =['арбуз','вишня','банан','абрикос'];
	alert(arr.length);
	arr[2] = 'гранат';
	alert(arr);
	arr.push('личи');
	alert(arr);
	alert(arr.shift());
	alert(arr);
}
function cycle(){
	do{
		alert(i);
		i--;	
	}while( i > 3 );
}
function modalOn(){
	var s = document.getElementById('modal');
	s.style.display = "block";
}
function modalOff(){
	var s = document.getElementById('modal');
	s.style.display = "none";
}
function serf(){
	document.getElementById('serf').style.opacity = 1;
}
setTimeout( serf,2000 )
function add(){
	alert("вы получили подарочек");
}
setTimeout( add,2000 )

function form(){
	var name = document.getElementById('text');
	var email = document.getElementById('email');
	var phone = document.getElementById('tel');
	alert(name.value);
}
