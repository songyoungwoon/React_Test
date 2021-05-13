import '../pages/Cities.css';

import CityListState from '../pages/CityListState.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


    function CityList(props){
        const {cities} = props;

        return (
        <Router>
         <div>

           <h1>
             <Link to= "/cities/CityListState">CityList</Link>
           </h1>

           <Switch>
             <Route path="/cities/CityListState">
               <CityListState />
             </Route>
           </Switch>


           <ul className = "cityList">
             {cities.map((item, index) => {
               return <li key={index}>{item}</li>;
             })}
           </ul>



         </div>
        </Router>

        );

    }

    export default CityList;