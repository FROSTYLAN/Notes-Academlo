from process_file import File
import os

# Scores Files
dir_list = os.listdir()
files = [file for file in dir_list if file.endswith(".csv")]

# ---------------------------------------------------------------------#
file_quiz = File()
number_winners = 2
percentage =70

list_join = file_quiz.open_files(files)
processed_file = file_quiz.process_files(list_join)

users_winners = file_quiz.find_winners(processed_file, number_winners)

list_highest_accuracy = file_quiz.users_highest_accuracy(processed_file, percentage)
# ---------------------------------------------------------------------#

print(
    f"\nLOS {number_winners} GANADORES:\n", 
    users_winners
)
print(
    f"\nLISTA DE USUARIOS CON UN PORCENTAJE DE ACIERTO MAYOR A {percentage}%:\n", 
    list_highest_accuracy
)