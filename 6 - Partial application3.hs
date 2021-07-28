list = [1,2,3,4,5]

addOne :: Int -> Int
addOne = (+) 1

listPlusOne = map addOne list
listPlusTwo = map (+ 2) list
listPlusThree = map (+ 3) list


main = do
  putStr "original:  "
  print list
  putStr "plusOne:   "
  print listPlusOne
  putStr "plusTwo:   "
  print listPlusTwo
  putStr "plusThree: "
  print listPlusThree
  putStr "22 + 13 = "
  print (22 + 13)

