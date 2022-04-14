import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="g-4 col-sm-12 col-md-6 col-lg-4 ">
      <div class="col">
        <div class="card h-100">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
                      </p>
                     <a className="btn btn-primary" href="#">See about me </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
