import React from 'react';
import "../assets/sass/main.scss"
import { Input, Select, Button } from 'antd';

const options = [
  { value: "Teacher" },
  { value: "Group" },
  { value: "Lesson" }
]

const MainPage = () => {
  const [filter, setFilter] = React.useState(false)
  return (
    <div className='main-filter'>
      <div className='navbar'>
        <Input type="text" className='input-page ms-3' placeholder='Başlıq' />
        <div>
          <Button className='filter-btn me-3' type='default' onClick={() => {
            setFilter(!filter)
          }}> <i className="bi bi-funnel"></i> Filter 
           {filter ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
          </Button>
          
        </div>
      </div>
      {
        filter && <div className='col-12 px-3'>
          <div className="row">
            <div className="col-3">
              <Select options={options} placeholder="Bütün" className='select-react'/>
            </div>
            <div className="col-3">
              <Select options={options} placeholder="Bütün" className='select-react' />
            </div>
            <div className="col-3">
              <Select options={options} placeholder="Bütün" className='select-react' />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MainPage