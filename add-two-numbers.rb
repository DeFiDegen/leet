def add_two_numbers(l1, l2)
  l1 = l1.reverse.join.to_i
  l2 = l2.reverse.join.to_i
  (l1 + l2).to_s.reverse.split("").map { |number| number.to_i }
end

l1 = [2,4,3]
l2 = [5,6,4]

result = add_two_numbers(l1, l2)
p result
# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.
# Example 2:

# Input: l1 = [0], l2 = [0]
# Output: [0]
# Example 3:

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]