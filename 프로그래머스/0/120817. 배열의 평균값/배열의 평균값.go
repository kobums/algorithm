func solution(numbers []int) float64 {
    sum := 0
    
    for _, value := range numbers {
        sum += value
    }
    
    
    return float64(sum) / float64(len(numbers))
}