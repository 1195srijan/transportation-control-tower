import React from 'react';
import './css/page.css';
import CA_1 from './image/CA-1.JPG';
import CA_2 from './image/CA-2.JPG';
import CA_3 from './image/CA-3.JPG';
import CA_4 from './image/CA-4.JPG';
import CA_5 from './image/CA-5.JPG';
import CA_6 from './image/CA-6.JPG';


class Page2 extends React.Component {
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
        <h1>Cost Analytics</h1>
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
        <div className="tab-content-container">
          <div className={`tab-content tab-1 ${this.state.activeTab === 1 ? 'active' : ''}`}>
          <img className="ca-first-image" src={CA_1} alt="Cost Analytics" />
          <img className="ca-map-image" src={CA_2} alt="Cost Analytics" />
          <img className="ca-map-image" src={CA_3} alt="Cost Analytics" />
          </div>
          <div className={`tab-content tab-2 ${this.state.activeTab === 2 ? 'active' : ''}`}>
          <img className="ca-first-image" src={CA_4} alt="Cost Analytics" />
          <img className="ca-map-image" src={CA_5} alt="Cost Analytics" />
          <img className="lv-table-image" src={CA_6} alt="Cost Analytics" />
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

export default Page2;
