package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(jump([]int{2, 3, 1, 1, 4}))
	fmt.Println(jump([]int{2, 3, 0, 1, 4}))
}

/*
	Jump Game 2
*/
func jump(nums []int) int {
	// set variables
	jumps := 0
	maxDistance := 0
	currentPos := 0

	// loop through all items, except the last.
	for i := 0; i < len(nums)-1; i++ {
		// look for what is greater, current reach or new reachable.
		maxDistance = int(math.Max(float64(maxDistance), float64(nums[i]+i)))

		// if this iteration is the current step
		if currentPos == i {

			// increment jumps, set current position to maxDistance.
			jumps++
			currentPos = maxDistance
		}
	}

	// return total jumps
	return jumps
}

/*
	Twosum
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
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
