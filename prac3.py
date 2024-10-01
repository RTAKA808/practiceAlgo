sample=[1,2,3,4,5,6,7,8,9,10]

def add_even(numbers):
  total = 0
  for num in numbers:
    if num % 2 == 0:
      total +=num
  return total
  
print(add_even(sample))