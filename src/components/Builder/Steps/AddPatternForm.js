import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './AddPatternForm.css';

@inject('BuilderStore')
@observer
export default class AddPatternForm extends Component {
  setLocalPatterns = () => {
    const localPatterns = localStorage.getItem("patterns")
      ? JSON.parse(localStorage.getItem("patterns"))
      : {};
    const newLocalPatterns = Object.assign(
      {},
      localPatterns,
      { [this.props.BuilderStore.patternName]: this.props.BuilderStore.patternAsObject },
    );

    localStorage.setItem("patterns", JSON.stringify(newLocalPatterns));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setLocalPatterns();
    this.props.BuilderStore.setHasSavedPattern(true);
  }
  
  handleChange = (e) => {
    this.props.BuilderStore.setPatternName(e.target.value);
  }

  render() {
    const buttonIsDisabled = this.props.BuilderStore.patternName.length === 0;

    return (
      <form className="pattern-form" onSubmit={this.handleSubmit}>
        <div className="pattern-form__chunk">
          <label htmlFor="pattern" className="pattern-form__label">Name the Pattern</label>
          <input 
            className="pattern-form__input"
            name="pattern"
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <button
          className="pattern-form__button"
          name="Save Pattern"
          disabled={buttonIsDisabled}
        >
          Save Pattern
        </button>
      </form>
    )
  }
}