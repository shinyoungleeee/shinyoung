import React from 'react';
import classnames from 'classnames';

import '../styles/main.scss';
import Header from '../components/header';
import Footer from '../components/footer';

type LayoutProps = {
  noHeader?: boolean;
};

type LayoutState = {
  mobileMenuOpen: boolean;
};

class Layout extends React.Component<LayoutProps, LayoutState> {
  state: LayoutState = {
    mobileMenuOpen: false,
  };

  private mobileMenuClickHandler = (): void => {
    this.setState(state => ({ mobileMenuOpen: !state.mobileMenuOpen }));
  };

  render() {
    const mainContentClass = classnames({
      'layout__main-content': true,
      'layout__main-content--faded': this.state.mobileMenuOpen,
    });

    return (
      <div className="layout">
        {this.props.noHeader ? null : (
          <Header
            mobileMenuOpen={this.state.mobileMenuOpen}
            mobileMenuClickHandler={this.mobileMenuClickHandler}
          />
        )}
        <div className={mainContentClass}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
