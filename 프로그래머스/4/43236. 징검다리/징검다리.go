import "sort"

func solution(distance int, rocks []int, n int) int {
	left := 1
	right := distance

	sort.Ints(rocks)
	rocks = append(rocks, distance)

	var answer int

	for left <= right {
		mid := (left + right) / 2
		delete := 0
		prevRock := 0

		for _, rock := range rocks {
			dist := rock - prevRock
			if dist < mid {
				delete++
				if delete > n {
					break
				}
			} else {
				prevRock = rock
			}
		}

		if delete > n {
			right = mid - 1
		} else {
			answer = mid
			left = mid + 1
		}
	}

	return answer
}