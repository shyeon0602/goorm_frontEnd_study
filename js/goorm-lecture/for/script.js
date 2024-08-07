// for/in
const user = {
  name: "han",
  province: "경기도",
  city: "성남시",
};

for (let x in user) {
  console.log(x);
}

// 배열 loop
const locations = ["서울", "부산", "경기도", "대구"];

for (let i = 0; i < locations.length; i++) {
  console.log(locations[i]);
}

// forEach
locations.forEach(function (location, i, arr) {
  console.log(`${i} : ${location}`);
  console.log(arr);
});

// map
locations.map(function (location) {
  console.log(location);
});
