func maxProduct(nums []int) int {
  cur, neg, max := 1, 1, nums[0]

	for i := 0; i < len(nums); i++ {

		switch {
		case nums[i] > 0:
			cur, neg = nums[i]*cur, nums[i]*neg
		case nums[i] < 0:
			cur, neg = nums[i]*neg, nums[i]*cur
		default:
			cur, neg = 0, 1
		}

		if max < cur {
			max = cur
		}

		if cur <= 0 {
			cur = 1
		}
	}

	return max
}