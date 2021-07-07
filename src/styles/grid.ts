import { css } from 'styled-components';

// Documentation https://snack-ui.github.io/snack/#grid
const Grid = css`
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .col,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    position: relative;
    width: 100%;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  @media (min-width: 576px) {
    .col {
      flex: 1 0 0%;
    }
    .col-1 {
      flex: 0 0 8.33333%;
      max-width: 8.33333%;
    }
    .col-offset-1 {
      margin-left: 8.33333%;
    }
    .col-2 {
      flex: 0 0 16.66667%;
      max-width: 16.66667%;
    }
    .col-offset-2 {
      margin-left: 16.66667%;
    }
    .col-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-offset-3 {
      margin-left: 25%;
    }
    .col-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
    .col-offset-4 {
      margin-left: 33.33333%;
    }
    .col-5 {
      flex: 0 0 41.66667%;
      max-width: 41.66667%;
    }
    .col-offset-5 {
      margin-left: 41.66667%;
    }
    .col-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-offset-6 {
      margin-left: 50%;
    }
    .col-7 {
      flex: 0 0 58.33333%;
      max-width: 58.33333%;
    }
    .col-offset-7 {
      margin-left: 58.33333%;
    }
    .col-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
    .col-offset-8 {
      margin-left: 66.66667%;
    }
    .col-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-offset-9 {
      margin-left: 75%;
    }
    .col-10 {
      flex: 0 0 83.33333%;
      max-width: 83.33333%;
    }
    .col-offset-10 {
      margin-left: 83.33333%;
    }
    .col-11 {
      flex: 0 0 91.66667%;
      max-width: 91.66667%;
    }
    .col-offset-11 {
      margin-left: 91.66667%;
    }
    .col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .col-offset-12 {
      margin-left: 100%;
    }
    .cols-10 > .col-1 {
      flex: 0 0 10%;
      max-width: 10%;
    }
    .cols-10 > .col-offset-1 {
      margin-left: 10%;
    }
    .cols-10 > .col-2 {
      flex: 0 0 20%;
      max-width: 20%;
    }
    .cols-10 > .col-offset-2 {
      margin-left: 20%;
    }
    .cols-10 > .col-3 {
      flex: 0 0 30%;
      max-width: 30%;
    }
    .cols-10 > .col-offset-3 {
      margin-left: 30%;
    }
    .cols-10 > .col-4 {
      flex: 0 0 40%;
      max-width: 40%;
    }
    .cols-10 > .col-offset-4 {
      margin-left: 40%;
    }
    .cols-10 > .col-5 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .cols-10 > .col-offset-5 {
      margin-left: 50%;
    }
    .cols-10 > .col-6 {
      flex: 0 0 60%;
      max-width: 60%;
    }
    .cols-10 > .col-offset-6 {
      margin-left: 60%;
    }
    .cols-10 > .col-7 {
      flex: 0 0 70%;
      max-width: 70%;
    }
    .cols-10 > .col-offset-7 {
      margin-left: 70%;
    }
    .cols-10 > .col-8 {
      flex: 0 0 80%;
      max-width: 80%;
    }
    .cols-10 > .col-offset-8 {
      margin-left: 80%;
    }
    .cols-10 > .col-9 {
      flex: 0 0 90%;
      max-width: 90%;
    }
    .cols-10 > .col-offset-9 {
      margin-left: 90%;
    }
    .cols-10 > .col-10 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .cols-10 > .col-offset-10 {
      margin-left: 100%;
    }
  }

  .row.g-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .row.g-0 > [class*='col'] {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .row.g-4 {
    margin-left: -2px !important;
    margin-right: -2px !important;
  }

  .row.g-4 > [class*='col'] {
    padding-left: 2px !important;
    padding-right: 2px !important;
  }

  .row.g-8 {
    margin-left: -4px !important;
    margin-right: -4px !important;
  }

  .row.g-8 > [class*='col'] {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .row.g-12 {
    margin-left: -6px !important;
    margin-right: -6px !important;
  }

  .row.g-12 > [class*='col'] {
    padding-left: 6px !important;
    padding-right: 6px !important;
  }

  .row.g-16 {
    margin-left: -8px !important;
    margin-right: -8px !important;
  }

  .row.g-16 > [class*='col'] {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .row.g-20 {
    margin-left: -10px !important;
    margin-right: -10px !important;
  }

  .row.g-20 > [class*='col'] {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .row.g-24 {
    margin-left: -12px !important;
    margin-right: -12px !important;
  }

  .row.g-24 > [class*='col'] {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .row.g-28 {
    margin-left: -14px !important;
    margin-right: -14px !important;
  }

  .row.g-28 > [class*='col'] {
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  .row.g-32 {
    margin-left: -16px !important;
    margin-right: -16px !important;
  }

  .row.g-32 > [class*='col'] {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
`;

export default Grid;
