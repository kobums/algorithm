package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

func main() {
    var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()
    
    var n int
    
    fmt.Fscanln(reader, &n)
    
    list := make([]int64, 0)
    
    if n <= 10 {
        fmt.Fprintln(writer, n)
    } else if n > 1022 {
        fmt.Fprintln(writer, -1)
    } else {
        for i := int64(0); i < 10; i++ {
            bp(int64(i), 1, &list)
        }

		sort.Slice(list, func(i, j int) bool {
			return list[i] < list[j]
		})

        fmt.Fprintln(writer, list[n])
    }
}

func bp(num int64, idx int, list *[]int64) {
	if idx > 10 {
		return
	}

	*list = append(*list, num)
	for i := int64(0); i < num%10; i++ {
		bp((num * 10) + i, idx + 1, list)
	}
}