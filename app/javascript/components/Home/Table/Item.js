import React from 'react';
import styled from 'styled-components'
import Thumbnail from './Thumbnail';

function Item(props) {


const Button = styled.a`
display: inline-block;
padding: 10px 20px;
text-decoraton: none;
cursor: pointer;
border-radius: none;
font-weight: bold;
background: #fff;
box-shadow: 0 0 0 3px #473528, -6px 6px #ef5f17, -6px 6px 0 3px #473228;
color: #888;
font-size: 18px;
`
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail />
              </div>
              <div className="col-md-8">
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className="cta-wrapper">
                    <Button href="#" className="btn cta-btn">
                      Watch This Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
