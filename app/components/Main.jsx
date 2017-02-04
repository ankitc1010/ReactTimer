var React = require('react');
import Header from 'Header';
import Drawer from 'Drawer';
class Main extends React.Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        return (

            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title="COYAN"/>
                <Drawer title="COYAN"/>
                <main className="mdl-layout__content">
                    <div className="page-content">{this.props.children}</div>
                </main>
            </div>

        );
    }
}

module.exports = Main;
