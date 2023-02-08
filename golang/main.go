package main

import "fmt"

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
}

/*
	Twosum
*/

func twoSum(nums []int, target int) []int {
	output := []int{0, 0}
	diffStore := map[int]int{}
	for i := 0; i < len(nums); i++ {
		val, ok := diffStore[nums[i]]
		if !ok {
			diffStore[target-nums[i]] = i
		} else {
			output[0] = val
			output[1] = i
		}
	}

	return output
}
