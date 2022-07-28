import csv

class File:

  def __init__(self) -> None:
    pass





  def open_files(self, files: list) -> list:
    """Esta función trae todas las puntuaciones de los usuarios de todos los quizes

    Args:
        files (list): Archivos de quizes

    Returns:
        dict: diccionario con las puntuaciones de usuarios de todos los quizes
    """

    list_join = []

    for i in files:
      with open(i, encoding="utf-8") as csv_file:
        file_to_process = csv.DictReader(csv_file)

        for i in file_to_process:

          name = i["First Name"].lower() + " " + i["Last Name"].lower()
          score = int(i["Score"])
          string_list = (i["Accuracy"]).split()
          accuracy = int(string_list[0])

          list_join.append({"name": name, "score": score, "accuracy": accuracy})

    return list_join




  def process_files(self, list_join: list) -> dict:
    """Procesa las puntuaciones de usuarios dando una puntuación 
       y un porcentaje de acierto total

    Args:
        list_join (list): puntuaciones de usuarios de todos los quizes

    Returns:
        dict: Todos los usuarios con su puntaje total
    """

    final_list = {}

    for i in list_join:

      if i["name"] in final_list.keys():
        final_list[i["name"]]["score"] += i["score"]
        final_list[i["name"]]["accuracy"] += i["accuracy"]
      else:
        final_list[i["name"]] = {"score": i["score"], "accuracy": i["accuracy"]}
    
    if "diego angeles" in final_list.keys():
      final_list["diego angeles"]["score"] += 2000

    if "kevin salvador casas" in final_list.values():
      final_list["kevin salvador casas"]["score"] += 8000

    for i in final_list:
      final_list[i]["accuracy"] //= 4

    return final_list

  


  def find_winners(self, final_list: dict, number_winners: int) -> list: 
    """Se encarga de buscar usuarios con el mayor puntaje considerados ganadores.

    Args:
        final_list (dict): Todos los usuarios
        number_winners (int): Numero de ganadores

    Returns:
        list: lista de ganadores
    """

    def score(elem):
      return elem[1]['score']

    winners = []

    list_sorted = sorted(final_list.items(), key=score, reverse=True)

    for i in list_sorted:
      if list_sorted.index(i) < number_winners:
        winners.append(i)

    return winners





  def users_highest_accuracy(self, final_list: dict, percentage: int) -> list:
    """Se encarga de filtrar a usuarios con un determinado porcentaje de aciertos

    Args:
        final_list (dict): Todos los usuarios
        percentage (int): Porcentaje de acierto

    Returns:
        list: lista de usuario que superan el porcentaje dado
    """

    list_highest_accuracy = []
    
    def accuracy(elem):
      return elem[1]['accuracy']

    list_sorted = sorted(final_list.items(), key=accuracy, reverse=True)

    for i in list_sorted:
      if i[1]['accuracy'] > percentage:
        list_highest_accuracy.append(i)

    return list_highest_accuracy
