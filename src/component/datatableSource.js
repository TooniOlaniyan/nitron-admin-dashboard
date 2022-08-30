
export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 } , {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg"src={params.row.img} alt=""/>
                {params.row.username}

            </div>
        )
    },

}, {
    field:'email',
    headerName: 'Email',
    width: 230,
} , {
    field:'age',
    headerName:'Age',
    width: 100
} , {
    field: 'status',
    headerName:'Status',
    width: 160,
    renderCell: (params) => {
        return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    }
}]

export const userRows = [
  {
    id: 1,
    username: 'Bolu',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'active',
    email: 'bolu@gmail.com',
    age: 36,
  },
  {
    id: 2,
    username: 'said',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'active',
    email: 'said@gmail.com',
    age: 21,
  },
  {
    id: 3,
    username: 'Tolu',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'pending',
    email: 'tolu@gmail.com',
    age: 31,
  },
  {
    id: 4,
    username: 'Agatha',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'active',
    email: 'agatha@gmail.com',
    age: 23,
  },
  {
    id: 5,
    username: 'paul',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'active',
    email: 'paul@gmail.com',
    age: 25,
  },
  {
    id: 6,
    username: 'Ibukun',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'pending',
    email: 'ibk@gmail.com',
    age: 20,
  },
  {
    id: 7,
    username: 'Ayomide',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'pending',
    email: 'ayo@gmail.com',
    age: 24,
  },
  {
    id: 8,
    username: 'Jessica',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'pending',
    email: 'jessica@gmail.com',
    age: 26,
  },
  {
    id: 9,
    username: 'Lilly',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'active',
    email: 'lily@gmail.com',
    age: 30,
  },
  {
    id: 10,
    username: 'Mark',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80',
    status: 'active',
    email: 'mark@gmail.com',
    age: 40,
  },
]