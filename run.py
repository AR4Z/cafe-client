# Imports
import eel
from ga import GeneticAlgorithm

@eel.expose
def scheduler(rendimientos, pendientes, kilogramos):
    ga_object = GeneticAlgorithm(rendimientos, pendientes, kilogramos)
    ga_object.run()
    solution = ga_object.get_solution_for_humans()
    return solution


eel.init('web')
eel.start('index.html', options={'port': 8686})