import React from 'react';
import './App.css';

var text = '';

function getText(event) { 
  console.log(event);
}

function App() {
  return (
    <div className="container w-100 h-100">
      <div className="mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <div className="row mt-5">
              <textarea className="form-control" value={text} readOnly></textarea>
            </div>
              <div className="row mt-3">
                <div className="btn-group btn-group-lg w-100" role="group">
                  <button type="button" className="btn btn-info btn-block" disabled>1</button>
                  <button onClick={() => getText(2)} type="button" className="btn btn-info btn-block">2</button>
                  <button onClick={() => getText(3)} type="button" className="btn btn-info btn-block">3</button>
                </div>
              </div>
              <div className="row my-1">
                <div className="btn-group btn-group-lg w-100" role="group">
                  <button onClick={() => getText(4)} type="button" className="btn btn-info">4</button>
                  <button onClick={() => getText(5)} type="button" className="btn btn-info">5</button>
                  <button onClick={() => getText(6)} type="button" className="btn btn-info">6</button>
                </div>
              </div>
              <div className="row my-1">
                <div className="btn-group btn-group-lg w-100" role="group">
                  <button onClick={() => getText(7)} type="button" className="btn btn-info">7</button>
                  <button onClick={() => getText(8)} type="button" className="btn btn-info">8</button>
                  <button onClick={() => getText(9)} type="button" className="btn btn-info">9</button>
                </div>
              </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
