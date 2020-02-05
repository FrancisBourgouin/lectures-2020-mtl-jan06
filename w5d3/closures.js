const createRepetition = amount => {
  const repeat = word => {
    for (let i = 0; i < amount; i++) {
      console.log(word);
    }
  };

  return repeat;
};

const repeatSixTimes = createRepetition(6);
const repeatThousandTimes = createRepetition(1000);
repeatSixTimes("Chicken");
// repeatThousandTimes("Pollo");

const createCountdown = time => {
  const liftOff = () => {
    for (let i = time; i > 0; i--) {
      console.log(`${i}...`);
    }
    console.log("Lift off !");
  };
  const crashOff = () => {
    for (let i = time; i > 0; i--) {
      console.log(`${i}...`);
    }
    console.log("OH NOES BIG CRASH !");
  };

  return { liftOff, crashOff };
};

const countdownFromTen = createCountdown(10);

countdownFromTen.liftOff();
countdownFromTen.crashOff();

const { liftOff, crashOff } = createCountdown(5);

liftOff();

// STEPS

const createRepetition = amount => {
  const repeat = word => {
    for (let i = 0; i < amount; i++) {
      console.log(word);
    }
  };

  return repeat;
};

// EXECUTE createRepetition(5)

word => {
  for (let i = 0; i < 5; i++) {
    console.log(word);
  }
};

//Assign it

const countFive = word => {
  for (let i = 0; i < 5; i++) {
    console.log(word);
  }
};
