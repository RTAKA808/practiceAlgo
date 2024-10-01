# write a function to solve the following probllem. you are given a sorted array of integers. Your task is to create a new array containing only the elements that are duplicates in the original array, maintaining their sorted order. implement a function that returns the new array with duplicates


sorted_duplicates=([1,1,2,2,3,4,4,5])

sorted_duplicates2=([-2,-1,-1,0,1,1,2])

def sort_dupes(numbers):
  dupe_array=[]
  array_len=len(numbers)

  for i in range(array_len):
    if (i>0 and numbers[i]==numbers[i-1]) and (numbers[i] not in dupe_array):
      dupe_array.append(numbers[i])

  return dupe_array

print(sort_dupes(sorted_duplicates2))

def sorted_duplicates_v1(lst):
    dictionary = {}

[1,1,2,2,3,4,4,5]
    for n in lst:
        if(n in dictionary):
            dictionary[n] += 1 # { 1: 2, 2: 2, 3: 1, 4: 2, 5: 1  }
        else: 
            dictionary[n] = 1
            # dictionary[1] = 1



    duplicates = []
    for key in dictionary:
        if(dictionary[key] >= 2):
            duplicates.append(key)
    return duplicates

# Two seperate for loops 
def sorted_duplicates_v1(lst):
    dictionary = {}
    
    # [1,1,2,2,3,4,4,5]
    for n in lst:
        if(n in dictionary):
            dictionary[n] += 1 # { 1: 2, 2: 2, 3: 1, 4: 2, 5: 1  }
        else: 
            dictionary[n] = 1
            
    duplicates = []
    for key in dictionary:
        if(dictionary[key] >= 2):
            duplicates.append(key)
    return duplicates

# List comprehension version 
def sorted_duplicates_v2(lst):
    dictionary  = {n: lst.count(n) for n in lst}
    duplicates = [key for key in dictionary if dictionary[key] >= 2]  
    # first key in array is sets the actual key
    return duplicates 


print(sorted_duplicates_v1([1,1,2,2,3,4,4,5]))
print(sorted_duplicates_v1([-2, -1, -1, 0, 1, 1, 2]))

print(sorted_duplicates_v2([1,1,2,2,3,4,4,5]))
