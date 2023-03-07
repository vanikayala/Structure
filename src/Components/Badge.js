import React from 'react'
import {connect} from 'react-redux'
const Badge = ({products}) => {
  return (
    <div style={{"margin":"50px 0px 20px 0px"}}>
      <center>
        <button type="button"className=" tb btn btn-primary position-relative">
          Total Products..
          <span className="postion-absolute top-0 start-00 translate-middle badge rounded-pill bg-danger">{products.length}</span>
        </button>
      </center>
    </div>
  )
}
const mapStateToProps=state=>({
  products:state
})
export default connect(mapStateToProps)(Badge);