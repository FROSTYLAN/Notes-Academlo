function search(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return item;
    }
  }
  //   return list.find((element) => element === item);
}
