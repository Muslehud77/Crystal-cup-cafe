import React from 'react';
import { Link } from 'react-router-dom';
import useContextData from '../../Hooks/useContextData';

const Table = ({item,handleDelete}) => {
    const {user} = useContextData()
    return (
      <tr className="">
        <td>
          <div className="flex items-center space-x-3">
            <div className="">
              <div className=" w-16 h-10">
                <img src={item.image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
              <div className="text-sm opacity-50">{item.category}</div>
            </div>
          </div>
        </td>
        <td>
          {item.nameOfAdder}
          <br />
          <span className="badge badge-ghost badge-sm">{item.addedBy}</span>
        </td>
        <td>{item.sellingCount}</td>
        <td>{item.quantity}</td>
        <td>{item.price_BTD}/-</td>

        <th>
          <Link to={`/edit-item/${item._id}`} className="btn btn-ghost btn-sm">
            Edit
          </Link>
        </th>
        <th>
          <button
            onClick={() => handleDelete(item?._id)}
            className="btn btn-ghost btn-sm"
          >
            Remove
          </button>
        </th>
      </tr>
    );
};

export default Table;