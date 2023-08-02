/**
 * Part 1. 다음의 지하철 노선에서, 출발역~도착역까지만을 반환하는 클래스를 작성하시오.(단방향)
 */
const LINE2 = [
  '신도림',
  '성수',
  '신설동',
  '용두',
  '신답',
  '용답',
  '시청',
  '충정로',
  '아현',
  '이대',
  '신촌',
  '공항철도',
  '홍대입구',
  '합정',
  '당산',
  '영등포구청',
  '문래',
  '대림',
  '구로디지털단지',
  '신대방',
  '신림',
  '봉천',
  '서울대입구',
  '낙성대',
  '사당',
  '방배',
  '서초',
  '교대',
  '강남',
  '역삼',
  '선릉',
  '삼성',
  '종합운동장',
  '신천',
  '잠실',
  '잠실나루',
  '강변',
  '구의',
  '건대입구',
  '뚝섬',
  '한양대',
  '왕십리',
  '상왕십리',
  '신당',
  '동대문역사문화공원',
  '을지로4가',
  '을지로3가',
  '을지로입구',
];

class Subway {
  finalStation = '을지로입구';
  constructor(start, end) {
    this.start = LINE2.indexOf(start);
    this.end = LINE2.indexOf(end);
    this.current = this.start - 1; // 현위치가 0일땐 어쩌지..
    this.rotateCnt = 0;
  }

  goToNextStation() {
    this.current++;
    if (this.current >= LINE2.length) this.current = 0;
    if (this.current === this.start - 1) this.rotateCnt++;
  }

  get isEnd() {
    return (
      (this.end && this.current === this.end) ||
      (this.rotateCnt === 2 && this.current === this.start - 1)
    );
  }

  [Symbol.iterator]() {
    // 이터레이터
    return {
      next: () => {
        if (this.isEnd) return { done: true };
        this.goToNextStation();
        return { value: LINE2[this.current], done: false };
      },
    };
  }
}

const routes = new Subway('문래', '신림');
console.log('🚀 ~ routes:', [...routes]); // 문래, 대림, 구로디지털단지, 신대방, 신림

// const routes2 = new Subway('신도림');
// console.log('🚀 ~ routes2:', [...routes2]);

const routes3 = new Subway('문래');
console.log('🚀 ~ routes2:', [...routes3]);
