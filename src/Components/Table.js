import React from "react";

const Table = () => {
  const [data, setData] = React.useState([]);
  const [tableHead, setTableHead] = React.useState([])

  const requestTable = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const tableData = await res.json();
    
    const requestData = []
    for (let x in tableData.users) {
      let user = tableData.users[x];
   
      requestData.push({
        Firstname: user.firstName,
        Lastname: user.lastName,
        Email: user.email,
        Gender: user.gender,
        Phone: user.phone
      })
    }
    setData(requestData);
    setTableHead(Object.keys(requestData[0]))
  };
  console.log(data)
 
  React.useEffect(() => {
    requestTable();
    
  }, []);




  return (
    <div className="px-3">
      <table className="table ">
        <thead>
          <tr>
            {
            tableHead?.map((item, key) => (
                <th key={key}>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr>
                <td>{item.Firstname}</td>
                 <td>{item.Lastname}</td>
                 <td>{item.Email}</td>
                 <td>{item.Gender}</td>
                 <td>{item.Phone}</td>
              </tr>
             
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
