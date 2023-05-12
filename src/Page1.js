import React from 'react';
import './css/page.css';
import LV_map from './image/LV-map.JPG';
import LV_first from './image/LV-first.JPG';
import LV_graph1 from './image/Lv_graph1.JPG';
import LV_graph2 from './image/Lv-graph2.JPG';
import Lv_table from './image/Lv_table.JPG';


class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      activeTab: 1,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  toggleAccordion(index) {
    this.setState(prevState => ({
      activeIndex: prevState.activeIndex === index ? -1 : index
    }));
  }

  toggleSubMenu(e) {
    e.currentTarget.querySelector('.sub-sub-menu').classList.toggle('show');
  }

  handleTabClick(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <div>
        <h1>Load Visibility</h1>
        <button className={`accordion ${this.state.activeIndex === 0 ? 'active' : ''}`} onClick={() => this.toggleAccordion(0)}>Filters</button>
        <div className={`panel ${this.state.activeIndex === 0 ? 'show' : ''}`}>
        <div className="dropdown-container">
            <ul className="dropdown-list">
                <li><a href="#">Filter 1</a>
                <ul className="sub-menu">
                <li><a href="#" onClick={this.toggleSubMenu}>Option 1</a>
                    <ul className="sub-sub-menu">
                      <li><a href="#">Sub-Option 1</a></li>
                      <li><a href="#">Sub-Option 2</a></li>
                      <li><a href="#">Sub-Option 3</a></li>
                    </ul>
                  </li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                </ul>
                </li>
                <li><a href="#">Filter 2</a></li>
                <li><a href="#">Filter 3</a></li>
                <li><a href="#">Filter 4</a></li>
            </ul>
            </div>
          
        </div>
        <div className="tabs-container">
        <div className="tab-buttons">
          <button
            className={this.state.activeTab === 1 ? 'active' : ''}
            onClick={() => this.handleTabClick(1)}
          >
            Tab 1
          </button>
          <button
            className={this.state.activeTab === 2 ? 'active' : ''}
            onClick={() => this.handleTabClick(2)}
          >
            Tab 2
          </button>
          {/* <button
            className={this.state.activeTab === 3 ? 'active' : ''}
            onClick={() => this.handleTabClick(3)}
          >
            Tab 3
          </button> */}
        </div>
        <img className="lv-first-image" src={LV_first} alt="Load Visibility" />
        <div className="tab-content-container">
          <div className={`tab-content tab-1 ${this.state.activeTab === 1 ? 'active' : ''}`}>
          <div class="grid-container">
            <div class="card">
            <img className="lv-map-image" src={LV_map} alt="Load Visibility" />
          </div>
          </div>
          {/* <iframe src="https://unifybi.kencogroup.com/single/?appid=e2d5954c-68fd-47b0-952c-a18a6de445b4&obj=DPSfVyJ&opt=ctxmenu,currsel"></iframe> */}
          </div>
          <div className={`tab-content tab-2 ${this.state.activeTab === 2 ? 'active' : ''}`}>
          <div class="grid-container">
            <div class="card">
              <img class="lv-graph-image" src={LV_graph1} alt="Load Visibility" />
            </div>
            <div class="card">
              <img class="lv-graph2-image" src={LV_graph2} alt="Load Visibility" />
            </div>
            <div class="card">
              <img class="lv-table-image" src={Lv_table} alt="Load Visibility" />
            </div>
          </div>

          </div>
          {/* <div className={`tab-content tab-3 ${this.state.activeTab === 3 ? 'active' : ''}`}>
            Content of Tab 3
          </div> */}
        </div>
      </div>
      </div>
    );
  }
}

export default Page1;
