package main

import (
  "fmt"
  "net/http"
)

func getData(w http.ResponseWriter, req *http.Request) {
  fmt.Fprintf(w, "Hello world\n")
}

func main() {
  http.HandleFunc("/data", getData)

  http.ListenAndServe(":8080", nil)
}