package main

import (
	"bufio"
	"fmt"
	"os"
    "math"
    "strconv"
)

func main() {

    var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()
    
    var N, M int
    
    fmt.Fscanln(reader, &N, &M)
    
    numMap := make([][]int, N)
    
    for i := range numMap {
        numMap[i] = make([]int, M)
    }
    
    res := -1
    
    for i := 0; i < N; i++ {
        var text string
		fmt.Fscanln(reader, &text)
        for j, v := range text {
            n := v-'0'
            numMap[i][j] = int(n)
        }
    }
    
    for i := 0; i < N; i++ {
        for j := 0; j < M; j++ {
            for a := -N; a < N; a++ {
                for b := -M; b < M; b++ {
                    var num string
                    y, x := i, j
                    
                    for 0 <= y && y < N && 0 <= x && x < M {
                        num += strconv.Itoa(numMap[y][x])
                        if a == 0 && b == 0 {
                            break
                        }

                        n, _ := strconv.Atoi(num)
                        
                        sqrt := int(math.Sqrt(float64(n)))

                        if sqrt * sqrt == int(n) {
                            res = int(math.Max(float64(n), float64(res)))
                        }
                        y += a
                        x += b
                    }
                }
            }
        }
    }
    fmt.Fprintln(writer, res)
}