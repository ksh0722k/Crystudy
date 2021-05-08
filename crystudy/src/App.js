import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './pages/Main.js';
import StudySearch from './pages/StudySearch.js';
import StudyManage from './pages/StudyManage.js';
import StudyDetail from './pages/StudyDetail.js';
import StudyCalendar from './pages/StudyCalendar.js';
import StudyDataStore from './pages/StudyDataStore.js';

const App = () => {
  return(
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/studySearch" component={StudySearch} exact/>
          <Route path="/studyDetail" component={StudyDetail} exact/>
          <Route path="/studyManage" component={StudyManage} exact/>
          <Route path="/studyDetail" component={StudyDetail} exact/>
          <Route path="/studyCalendar" component={StudyCalendar} exact/>
          <Route path="/studyDataStore" component={StudyDataStore} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;