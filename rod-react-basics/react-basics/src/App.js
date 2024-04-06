import Header from "./components/Header";
import SubjectList from "./components/SubjectList";

import { CMSCSubject, MathSubject } from "./data";

import "./style.css";

import sandwich from './sub.jpg';

function App() {
  return (
    <div id="main-content">
      <Header />
      <SubjectList subjects={CMSCSubject} title="BS Computer Science" />

      <SubjectList subjects={MathSubject} title="BS Mathematics" />

      <img src={sandwich} />

    </div>
  );
}

export default App;
