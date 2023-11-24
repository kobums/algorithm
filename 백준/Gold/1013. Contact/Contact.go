package main

import (
	"bufio"
	"fmt"
	"os"
    "regexp"
)

func main() {

    var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()
    
    var N int
    
    fmt.Fscanln(reader, &N)

	for i := 0; i < N; i++ {
		var text string
		fmt.Fscanln(reader, &text)
        
        match, _ := regexp.MatchString(`^(100+1+|01)+$`, text)
        if match {
            fmt.Fprintln(writer, "YES")
        } else {
            fmt.Fprintln(writer, "NO")
        }
	}
}