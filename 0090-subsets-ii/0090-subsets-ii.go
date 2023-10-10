func subsetsWithDup(A []int) [][]int {
	res := [][]int{}
	sort.Ints(A)

	var dfs func(int, []int)
	dfs = func(index int, temp []int) {
		res = append(res, temp)
		n := len(temp) + 1
		for i := index; i < len(A); i++ {
			if i == index || A[i] != A[i-1] {
				dfs(i+1, append(temp, A[i])[:n:n])
			}
		}
	}

	temp := make([]int, 0, 0)
	dfs(0, temp)

	return res
}