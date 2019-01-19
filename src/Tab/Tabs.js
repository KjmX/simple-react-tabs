import * as React from 'react'
import TabList from './TabList'
import TabContent from './TabContent'
import { TAB_ROLE } from './Tab'

export const TABS_ROLE = 'tabs'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    const { selectedTabId } = this.props
    this.state = {
      selectedTabId: selectedTabId || ''
    }
  }

  isNode(node) {
    return node instanceof HTMLElement
  }

  isNodeHasAttribute(node, attribute) {
    return this.isNode(node) && node.getAttribute('role') === attribute
  }

  isTabNode(node) {
    return this.isNodeHasAttribute(node, TAB_ROLE)
  }

  isTabsNode(node) {
    return this.isNodeHasAttribute(node, TABS_ROLE)
  }

  selectTab(tabId) {
    const state = { ...this.state }
    state.selectedTabId = tabId
    this.setState(state)
  }

  selectTabFromNode(node) {
    if (node == null || this.isTabsNode(node)) return
    if (this.isTabNode(node)) {
      const id = node.id
      this.selectTab(id)
      return
    }

    this.selectTabFromNode(node.parentNode)
  }

  cloneTabList(tabList) {
    return React.cloneElement(tabList, {
      children: React.Children.map(tabList.props.children, (tab) => {
        const { id } = tab.props
        const { selectedTabId } = this.state
        const selected = id === selectedTabId
        const props = {
          selected: selected
        }
        console.log(`${id} -> ${selected}`)
        return React.cloneElement(tab, props)
      })
    })
  }

  cloneTabContent(tabContent) {
    const { id } = tabContent.props
    const { selectedTabId } = this.state
    const props = {
      selected: id === selectedTabId
    }
    return React.cloneElement(tabContent, props)
  }

  getChildren() {
    console.log('rendering')
    const { children } = this.props
    return React.Children.map(children, (child) => {
      let clonedChild = child

      if (child.type.name === TabList.name) {
        clonedChild = this.cloneTabList(child)
      } else if (child.type.name === TabContent.name) {
        clonedChild = this.cloneTabContent(child)
      }

      return clonedChild
    })
  }

  handleClick = (clickEvent) => {
    this.selectTabFromNode(clickEvent.target)
  }

  render() {
    return (
      <React.Fragment>
        <div role={TABS_ROLE} onClick={this.handleClick}>
          {this.getChildren()}
        </div>
      </React.Fragment>
    )
  }
}

export default Tabs
