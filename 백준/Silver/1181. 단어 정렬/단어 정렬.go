package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

func main() {
	// Read input
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	var N int
	fmt.Sscanf(scanner.Text(), "%d", &N)

	words := make(map[string]struct{})
	for i := 0; i < N; i++ {
		scanner.Scan()
		word := scanner.Text()
		words[word] = struct{}{}
	}

	// Convert map keys to slice
	uniqueWords := make([]string, 0, len(words))
	for word := range words {
		uniqueWords = append(uniqueWords, word)
	}

	// Sort by length and lexicographically
	sort.Slice(uniqueWords, func(i, j int) bool {
		if len(uniqueWords[i]) == len(uniqueWords[j]) {
			return uniqueWords[i] < uniqueWords[j]
		}
		return len(uniqueWords[i]) < len(uniqueWords[j])
	})

	// Print the result
	for _, word := range uniqueWords {
		fmt.Println(word)
	}
}