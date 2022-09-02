function binarySearch(list, lastname) {
  const middle = Math.floor(list.length / 2);
  if (list[middle].lastname === lastname) {
    return list[middle];
  } else {
    if (lastname < list[middle].lastname) {
      const data = list.slice(0, middle);
      return binarySearch(data, lastname);
    } else {
      const data = list.slice(middle);
      return binarySearch(data, lastname);
    }
  }
}

const data = [
  { lastname: "Angeles" },
  { lastname: "Bernal" },
  { lastname: "Contreras" },
  { lastname: "Díaz" },
  { lastname: "Esparza" },
  { lastname: "Fernandez" },
  { lastname: "Gutierrez" },
  { lastname: "Hernandez" },
  { lastname: "Ibarra" },
  { lastname: "Juarez" },
  { lastname: "Katlin" },
  { lastname: "Lopez" },
];
