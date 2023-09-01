interface Avengers {
  moveout(): void;
}

class Avenger implements Avengers {
  moveout(): void {
    console.log('raw Avenger');
  }
}

class BaseAvengers implements Avengers {
  constructor(public avenger: Avengers) {}
  moveout(): void {
    this.avenger.moveout();
  }
}

class SpiderManSuit extends BaseAvengers {
  moveout(): void {
    super.moveout();
    console.log('Spider');
  }
}

class IronManSuit extends BaseAvengers {
  moveout(): void {
    super.moveout();
    console.log('Iron');
  }
}
