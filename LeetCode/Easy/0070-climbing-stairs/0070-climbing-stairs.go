func climbStairs(n int) int {
    res := make([]int, n+1)
    res[0], res[1] = 1, 1

    for i := 2; i <= n; i++ {
        res[i] = res[i-1] + res[i-2]
    }

    return res[n]
}