package main

import (
    "fmt"
    "strconv"
    "os"
)

func main () {
    var N int
    
    fmt.Scan(&N)
    
    for i := 0; i<N; i++ {
        var n1 string
        var n2 string

        fmt.Scan(&n1, &n2)

        n1Int, err := strconv.ParseInt(n1, 10, 32)
        if err != nil {
            os.Exit(1)
        }

        n2Int, err := strconv.ParseInt(n2, 10, 32)
        if err != nil {
            os.Exit(1)
        }

        fmt.Println(n1Int+n2Int)   
    }
}