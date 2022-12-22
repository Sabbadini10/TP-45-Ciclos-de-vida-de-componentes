import React from 'react'

function Gif(props) {
  return (
    <div class="container mt-5 col-lg-3">
  <div class="d-flex row">
    <div class="col-lg-9 col-md-6 mb-4">
      <div class="card h-100">
        <img class="card-img-top" src={props.url} alt='gif imagen' />
        <div class="card-body">
          <h4 class="card-title">{props.title}</h4>
        </div>
      </div>
    </div>
  </div>
</div>  

  )
}

export default Gif;
