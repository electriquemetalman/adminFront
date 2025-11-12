import React, { useEffect, useState, useCallback } from 'react'
import './List.css'
import axios from "axios"
import { toast } from "react-toastify";
import DeletePopup from '../../components/DeletePopup/DeletePopup';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const List = ({url}) => {

  const [list, setList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const { token } = useContext(AuthContext);

  const fetchList = useCallback(async () => {
    const response = await axios.get(`${url}/api/food/list`);
    
    if (response.data.success){
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  }, [url]);
  

  const handleOpendPopup = (foodId) => {
    setSelectedFoodId(foodId);
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedFoodId(null);
  }

  const deleteFood = async () => {
    if (!selectedFoodId) return toast.error("error");

    const response = await axios.delete(`${url}/api/food/delete/${selectedFoodId}`, {headers: {Authorization: `Bearer ${token}`}});
    await fetchList();

    if (response.data.success){
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    handleClosePopup();
  }

  useEffect(() => {
    fetchList();
  },[fetchList])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return(
            <div key={index} className='list-table-format'>
              <img src = {`${url}/images/`+ item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => handleOpendPopup(item._id)} className='cursor'>❌</p>
            </div>
          )
        })}
      </div>
      {showPopup && (
        <DeletePopup 
          delateFood={deleteFood}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}

export default List
