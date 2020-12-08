function ClosestEnemy(arr) {
  if (!arr.includes(2)) {
    return 0;
  }
  loc1 = arr.findIndex((val) => {
    return val === 1;
  });

  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[loc1 + i] === 2 || arr[loc1 - i] === 2) {
      return i;
    }
  }
  return loc1;
}

ClosestEnemy([0, 0, 1, 0, 0, 2, 0, 2]);
ClosestEnemy([1, 0, 0, 0, 2, 2, 2]);
ClosestEnemy([2, 0, 0, 0, 2, 2, 1, 0]);
