import React from 'react';

import '../../styles/main.scss';
import Header from '../components/header';
import Footer from '../components/footer';

type LayoutProps = {
  children: React.ReactNode;
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
    return (
      <div className="d-flex flex-column h-100">
        <Header
          mobileMenuOpen={this.state.mobileMenuOpen}
          mobileMenuClickHandler={this.mobileMenuClickHandler}
        />
        <div className="flex-grow-1">
          {this.state.mobileMenuOpen ? null : this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
