import styled from 'styled-components';

export const DatePickerWrap = styled.div`
  .react-datepicker {
    font-family: 'Helvetica Neue', helvetica, arial, sans-serif;
    font-size: 0.8rem;
    background-color: #f7f7f7;
    color: #000;
    border: 1px solid #f7f7f7;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
    right: 72px;
    line-height: initial;
  }

  /*헤더*/
  .react-datepicker__header {
    text-align: left;
    background-color: #f7f7f7;
    border-bottom: 1px solid #f7f7f7;
    border-top-left-radius: 0.5rem;
    padding: 8px;
    position: relative;
  }

  /*요일*/
  .react-datepicker__day-name {
    color: #bfbfc1;
    display: inline-block;
    width: 1.7rem;
    line-height: 0.8rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__day-names {
    white-space: nowrap;
    margin-top: 10px;
    margin-bottom: -15px;
    font-size: 9px;
  }

  /*일*/
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: lighter;
  }

  .react-datepicker__day--outside-month {
    color: #bfbfc1;
    pointer-events: none;
  }

  /*월*/
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #000;
    font-weight: 550;
    font-size: 0.7rem;
  }

  /*화살표*/
  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation--previous {
    left: 170px;
  }
  .react-datepicker__navigation--next {
    right: 8px;
  }
  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 85px;
  }
  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__navigation--years-previous {
    top: 4px;
  }
  .react-datepicker__navigation--years-upcoming {
    top: -4px;
  }
  .react-datepicker__navigation:hover *::before {
    border-color: #ffbf87;
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: 20px;
    width: 0;
  }
  .react-datepicker__navigation-icon--next {
    left: -2px;
  }
  .react-datepicker__navigation-icon--next::before {
    transform: scale(0.6) rotate(45deg);
    left: -7px;
  }
  .react-datepicker__navigation-icon--previous {
    right: -2px;
  }
  .react-datepicker__navigation-icon--previous::before {
    transform: scale(0.6) rotate(225deg);
    right: -7px;
  }

  /*선택일자*/
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 1rem;
    background-color: #f7f7f7;
    color: #ffbf87;
  }

  .react-datepicker__day:not([aria-disabled='true']):hover,
  .react-datepicker__month-text:not([aria-disabled='true']):hover,
  .react-datepicker__quarter-text:not([aria-disabled='true']):hover,
  .react-datepicker__year-text:not([aria-disabled='true']):hover {
    border-radius: 1rem;
    background-color: #f8f0e9;
    font-size: 14px;
    color: #ffbf87;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 0.3rem;
    background-color: #f8f0e9;
    color: rgb(0, 0, 0);
  }

  /*input*/
  .example-custom-input {
    background-color: #ffe5cf;
    color: #000;
    border: #ffbf87;
    border-radius: 1rem;
    padding: 3px 10px;
    font-size: 15px;
  }

  .example-custom-input:hover {
    background-color: #ffbf87;
  }
`;
