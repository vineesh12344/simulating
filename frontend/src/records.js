let path = [
    [8, 17],
    [8, 16],
    [8, 15],
    [8, 14],
    [7, 14],
    [6, 14],
    [6, 13],
    [6, 12],
    [6, 11],
    [6, 10],
    [6, 9],
    [6, 8],
    [6, 7],
    [6, 6],
    [7, 6],
    [8, 6],
    [9, 6],
    [10, 6],
    [11, 6],
    [12, 6],
    [12, 7],
    [12, 8],
    [12, 9],
    [12, 10],
    [12, 11],
    [12, 12],
    [12, 13],
    [12, 14],
    [13, 14],
    [14, 14],
    [15, 14],
    [16, 14],
    [16, 13]
  ];
  
  path = path.map(num => { return [num[0] + 25, num[1] + 25]})

  const records = [
    {
      id: 'car1',
      next: path[0],
      path,
    },
    {
      id: 'car1',
      next: path[5],
      path,
    },
    {
      id: 'car1',
      next: path[12],
      path,
    },
    {
      id: 'car1',
      next: path[18],
      path,
    },
    {
      id: 'car1',
      next: path[24],
      path,
    },
    {
      id: 'car1',
      next: path[32],
      path,
    },
  ];
  export default records;
  