0 represents the dog.
Each array represents a house and each 1 represents an empty room.

Return the house and the room where it is located, there can be only one dog lost per building.

Examples
lostDog([1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1])
➞ "Dog not found!"

lostDog([1, 1, 1, 1, 1, 1],  [0, 1, 1, 1, 1, 1],  [1, 0, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1])
➞ {"Dog1": "House (2) and Room (1)", "Dog2": "House (3) and Room (2)"}

lostDog([1, 1, 1, 1, 1, 0],  [0, 1, 1, 1, 1, 1],  [1, 0, 1, 1, 1, 1],  [1, 1, 0, 1, 1, 1])
➞ {"Dog1": "House (1) and Room (6)", "Dog2": "House (2) and Room (1)", "Dog3": "House (3) and Room (2)", "Dog4": "House (4) and Room (3)"}
