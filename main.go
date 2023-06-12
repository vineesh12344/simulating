package main

import (
	db "app/postgres"
	"fmt"
  "log"
	"net/http"
	"os"
)

func getDrivers(w http.ResponseWriter, req *http.Request) {
	rows, err := db.Connection.Query("SELECT name FROM drivers")
	if err != nil {
		fmt.Println(err)
	}
	defer rows.Close()

	data := ""
	for rows.Next() {
		var name string
		err = rows.Scan(&name)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println(name)
		data += fmt.Sprintf("%s ", name)
	}

	err = rows.Err()
	if err != nil {
		fmt.Println(err)
	}

	fmt.Fprint(w, data)
}

func main() {
	db.InitDB()
	defer db.Connection.Close()

	http.Handle("/", http.FileServer(http.Dir("./frontend/build")))
	http.HandleFunc("/drivers", getDrivers)

	serverEnv := os.Getenv("SERVER_ENV")

  fmt.Printf("Starting server at port 8080\n")
  if err := http.ListenAndServe(":8080", nil); err != nil {
      log.Fatal(err)
  }
	if serverEnv == "DEV" {
    fmt.Printf("Starting server at port 8080\n")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
		
	} else if serverEnv == "PROD" {
		fmt.Printf("Not implemented")
	}
}