import React from 'react';
import ReactDOM from 'react-dom';
import Page from './app/covid/Page';

// import registerServiceWorker from './registerServiceWorker';
if(document.location.href.includes("case")){
  document.querySelector("title").innerHTML = "Cases";
  ReactDOM.render(<Page case="case" />, document.body);
}else 
if(document.location.href.includes("vaccination")){
  document.querySelector("title").innerHTML = "Vaccinations";
  ReactDOM.render(<Page vaccination="vaccination" />, document.body);
}else {
  document.querySelector("title").innerHTML = "Vaccinations & Cases";
  ReactDOM.render(<Page case="case" vaccination="vaccination" />, document.body);
}

// registerServiceWorker();