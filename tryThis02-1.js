function printDay(str) {
	console.log(`오늘은 ${str} 입니다.`);
}

const day = new Date().toString().split(' ')[0];

switch(day) {
	case "Mon":
			printDay("월요일");
			break;
	case "Tue":
			printDay("화요일");
			break;
	case "Wed":
			printDay("수요일");
			break;
	case "Thu":
			printDay("목요일");
			break;
	case "Fri":
			printDay("금요일");
			break;
	case "Sat":
			printDay("토요일");
			break;
	case "Sun":
			printDay("일요일");
			break;
}