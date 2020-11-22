import React from 'react'; 

const Results = ({price,photo,address,city,stateCode,zip,beds,baths,sqft,type,status,office}) => {
    return (
      <div className="col-sm-6 col-lg-4 listing">
        <div className="info2">{office}</div>
        <div className="card clean-card"><img className="card-img-top w-100 d-block"
            src={photo}/>
          <div className="card-body info">
            <div className="row">
              <div className="card-title col-sm-5">{price}</div>
    <div className="card-text2 col-sm-7 text-right"><strong>{beds}</strong> bds | <strong>{baths}</strong> ba | <strong>{sqft}</strong> sqft</div>
            </div>
            <p className="card-text2">{address}, {city}, {stateCode} {zip}</p>
            <p className="card-text2">{type} {status}</p>
          </div>
        </div>
      </div>
    );
};

export default Results;

