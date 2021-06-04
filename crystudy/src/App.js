import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main.js';
import Navigator from './pages/Navigator.js';
import StudySearch from './pages/StudySearch.js';
import StudySearchDetail from './pages/StudySearchDetail.js';
import StudyAdd from './pages/StudyAdd.js';
import StudyManage from './pages/StudyManage.js';
import StudyPlan from './pages/StudyPlan.js';
import StudyData from './pages/StudyData.js';
import StudyWrite from './pages/StudyWrite.js';
import MainComponent from './pages/MainComponent.js';

const App = () => {
  return(
    <div className='App'>
      <Navigator></Navigator>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/studySearch" component={StudySearch} exact/>
          <Route path="/studySearch/:title" component={StudySearchDetail} exact/>
          <Route path="/studyAdd" component={StudyAdd} exact/>
          <Route path="/studyManage" component={StudyManage} exact/>
          <Route path="/studyPlan" component={StudyPlan} />
          <Route path="/studyData" component={StudyData} />
          <Route path="/studyDataWrite" component={StudyWrite} />
          <Route path="/mainComponent" component={MainComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;