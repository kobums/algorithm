func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)

	res := [][]int{}
	solution := []int{}
	cs2(candidates, solution, target, &res)

	return res
}

func cs2(candidates, solution []int, target int, result *[][]int) {
	if target == 0 {
		*result = append(*result, solution)
	}

	if len(candidates) == 0 || target < candidates[0] {
		return
	}

	solution = solution[:len(solution):len(solution)]

	cs2(candidates[1:], append(solution, candidates[0]), target-candidates[0], result)

	cs2(next(candidates), solution, target, result)
}

func next(candidates []int) []int {
	i := 0
	for i+1 < len(candidates) && candidates[i] == candidates[i+1] {
		i++
	}
	return candidates[i+1:]
}