var React = require('react');
var {Link,IndexLink} = require('react-router');

var Navigation = () =>{

    return(
        <div className="top-bar">
            <div className="top-bar-left">
                  <ul className="menu">
                      <li className="menu-text">React Timer Application</li>
                      <li><IndexLink to="/" activeClassName="active-link" >Timer</IndexLink></li>
                      <li><Link to="/" activeClassName="active-link">Count Down</Link></li>
                  </ul>

              </div>

            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">Created By: <a href="www.necceo.com" target="_blank">Phaneendra Kalakuri</a></li>
              </ul>
            </div>

        </div>
    )

};
module.exports = Navigation
