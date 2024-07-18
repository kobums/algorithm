func solution(n int, times []int) int {
    left := 1
	right := max(times) * n
	var answer int

	for left <= right {
		mid := (left + right) / 2
		people := 0

		for _, time := range times {
			people += mid / time
			if people >= n {
				break
			}
		}

		if people >= n {
			answer = mid
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return answer
}

func max(arr []int) int {
	maxVal := arr[0]
	for _, v := range arr {
		if v > maxVal {
			maxVal = v
		}
	}
	return maxVal
}