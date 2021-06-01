import HeaderNch55 from './ComponentsNch55/HeaderNch55/HeaderNch55';
import FooterNch55 from './ComponentsNch55/FooterNch55/FooterNch55';
import LearnNch55 from './ComponentsNch55/LearnNch55/LearnNch55';
import QuizNch55 from './ComponentsNch55/QuizNch55/QuizNch55';
import NotFoundPageNch55 from './ComponentsNch55/NotFoundPageNch55/NotFoundPageNch55';
import PracticeNch55 from './ComponentsNch55/PracticeNch55/PracticeNch55'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
              <Router>
          
          <HeaderNch55 key="header"/>
          <Switch>
          <Route path="/" exact component={()=> <LearnNch55 key="learn"/>}/>
          <Route path="/quiz" exact component={() => <QuizNch55 key="quiz"/>}/> 
          <Route path="/practice" exact component={() => <PracticeNch55 key="practice" />} />
          <Route exact component={()=> <NotFoundPageNch55 key="notFound"/>} />
          </Switch>
          <FooterNch55 key="footer"/>
          
          </Router>
      
      
     
    </div>
  );
}

export default App;
