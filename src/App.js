import React, { Component } from 'react'
import { Tabs, TabList, Tab, TabContent } from './Tab'

class App extends Component {
  render() {
    return (
      <div>
        <Tabs selectedTabId="test3">
          <TabList>
            <Tab id="test1"><span>Test 1</span></Tab>
            <Tab id="test2"><span>Test 2</span></Tab>
            <Tab id="test3"><span>Test 3</span></Tab>
          </TabList>
          
          <TabContent id="test1"><p>Test 1 content</p></TabContent>
          <TabContent id="test2"><p>Test 2 content</p></TabContent>
          <TabContent id="test3"><p>Test 3 content</p></TabContent>
        </Tabs>
      </div>
    )
  }
}

export default App
