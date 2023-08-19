# # def add(no1,no2):
# #     return no1,no2

# # i1,i2=add(1,2)

# # for i in range(0,10):
# #     print(i)

# # if(1==1):
# #     print(1)
# # elif(2==2):
# #     print(1)
# # else:
# #     print(2)

# # arr=[1,2,3,4]

# def occ(str1):
#     arr = list(str1)
#     print(arr[::-1])
#     map = dict()
#     for i in arr:
#         if i in map.keys():
#             map[i] = map.get(i)+1
#         else:
#             map[i] = 1
#     print(map)


# str1 = "Maangesh"
# occ(str1)
list1 = [1, 2, 3,1, 2, 3, 4,5,6]
for i in range(0,len(list1)):
    for j in range(i+1,len(list1)):
        if(list1[i]==list1[j]):
            list1.remove(list1[j])
print(list1)
