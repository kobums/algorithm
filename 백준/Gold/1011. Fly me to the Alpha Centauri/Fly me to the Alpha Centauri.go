package main

import (
	"bufio"
	"fmt"
	"os"
    "math"
)

func main() {

    var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

    TC := 0
    x, y, sqrt := 0, 0, 0
    move_count := 0
    var length int
    
    fmt.Fscanln(reader, &TC)
    
    for i := 0; i < TC; i++ {
        fmt.Fscanln(reader, &x, &y)
        length = y - x
        var z = math.Sqrt(float64(length))
        sqrt = int(z)
        if sqrt * sqrt == length {
            move_count = 2 * sqrt -1
        } else {
            move_count = 2 * sqrt
        }
//        move_count = sqrt * sqrt == length ? 2 * sqrt -1 : 2 * sqrt
        if length > sqrt * (sqrt + 1) {
            move_count += 1   
        }
        fmt.Fprintln(writer, move_count)
    }
}