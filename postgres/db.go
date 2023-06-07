package db

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

var Connection *sql.DB

func InitDB() {
  connStr := fmt.Sprintf(
    "user=%s password=%s host=%s port=%d dbname=%s sslmode=disable",
    "postgres", "mysecretpassword", "db", 5432, "postgres",
  )

  var err error
  Connection, err = sql.Open("postgres", connStr)
  if err != nil {
    fmt.Println(err)
  }
}