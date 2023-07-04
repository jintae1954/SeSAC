    const yyyy = date.getFullYear();
    const mm = makeLenString1(date.getMonth());
    const dd = makeLenString2(date.getDate());
    console.log(`${yyyy}-${mm}-${dd}은 ${weekName}요일 입니다.`);