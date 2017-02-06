import React from 'react';
var FormInput = (props) => (
    <div>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4"/>
            <label className="mdl-textfield__label" htmlFor="sample4">Number</label>
            <span className="mdl-textfield__error">Input is not a number!</span>
        </div>
    </div>
)

export default FormInput;
