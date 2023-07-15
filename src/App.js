import './App.css';
import { useState } from 'react';
import data from './data';




function App() {


  const uniqueitem = ['All', ...new Set(data.map((item) => item.category))];

  const [catdata, setCatdata] = useState(data);

  function handleMenue(val) {

    if (val == 'All') {
      setCatdata(data);
    }
    else {
      const newdata = data.filter((item) => item.category === val);
      setCatdata(newdata);
    }

  }

  return (
    < >
      <h1 >Today's Menue</h1>
      <div className="buttoncontainer">
        {
          uniqueitem.map((item) => {
            return (<div className='buttonitem'>
              <button type='button' onClick={() => handleMenue(item)}>{item}</button>
            </div>)
          })}
      </div>

      <div className='container'>
        {
          catdata.map((item) => {
            return (<div className='item'>

              <img className='inneritem' id='image' src={item.img} alt="image" />
              <div className="inneritem">
                <div className="inneritem2">
                  <h4 className='item title-price' id='para1'  >{item.title}</h4>
                  <p className='item title-price' id='para2'>&#8377; {item.price}</p>
                  <p className='item' id='para3'>{item.desc}</p>
                </div>
              </div>
            </div>
            )
          })}

      </div>
    </ >
  )

}

export default App;
