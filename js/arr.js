var nameList = [];
var flag;

for (var i=0; i<5; i++) {
	nameList.push(prompt("Введите любое имя: ", ""));
}

console.log(nameList);

var userName = prompt('Введите Ваше имя: ', '');

for (var i=0; i<nameList.length; i++) {
	if (nameList[i] == userName) {
		flag = true;
		break;
	} else {
		flag = false;
	}
}

if (flag) {
	alert(userName + ', вы успешно вошли!');
} else {
	alert('Ошибка!!! такого пользователя нет.');
}


