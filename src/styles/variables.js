import { css } from 'styled-components';

const variables = css`
  :root {
    /* Main page colours */
    // colour scheme 1
    /*
    --dark-navy: #e5e5e5; // load screen background
    --navy: #e5e5e5; // Main index background
    --navy-shadow: rgba(2, 12, 27, 0.7); // Picture & header background shadow
    --dark-slate: #e5e5e5; // scroll bar
    --slate: #1d3557; // Text color
    --light-slate: #14213d; // Sub accent
    --lightest-slate: #14213d; // Titles
    --green: #fca311; // Main accent
    --green-tint: rgba(255, 255, 255, 0.3); // Button overlay
    --nav-heading: #1d3557;
*/

    // colour scheme 2
    /*
    --dark-navy: #023047; // load screen background
    --navy: #023047; // Main index background
    --navy-shadow: rgba(255, 134, 0, 0.9); // Picture & header background shadow
    --dark-slate: #fb8500; // scroll bar
    --slate: #8ecae6; // Text color
    --light-slate: #ffb703; // Sub accent
    --lightest-slate: #8ecae6; // Titles
    --green: #fb8500; // Main accent
    --green-tint: rgba(255, 255, 255, 0.3); // Button overlay
    --nav-heading: #8ecae6;
*/
    /*
        // colour scheme 3
        --dark-navy: #ffffff; // load screen background
        --navy: #ffffff; // Main index background
        --slate: #f9c784; // Text color
        --dark-slate: #4e598c; // scroll bar
        --lightest-slate: #4e598c; // Titles
        --light-slate: #4e598c; // Sub accent
        --lightest-navy: #4e598c; // Background colour extra elements
        --nav-heading: #4e598c;
        --green: #ff8811; // Main accent
        --green-tint: rgba(255, 255, 255, 0.6); // Button overlay
        --navy-shadow: rgba(255, 255, 255, 0.9); // Picture & header background shadow
    */

    /*
    // colour scheme 4
    --dark-navy: #ffffff; // load screen background
    --navy: #ffffff; // Main index background
    --slate: #000000; // Text color
    --dark-slate: #14213d; // scroll bar
    --lightest-slate: #14213d; // Titles
    --light-slate: #14213d; // Sub accent
    --lightest-navy: #14213d; // Background colour extra elements
    --nav-heading: #14213d;
    --green: #fca311; // Main accent
    --green-tint: rgba(255, 255, 255, 0.6); // Button overlay
    --navy-shadow: rgba(255, 255, 255, 0.9); // Picture & header background shadow
*/

    // colour scheme 5
    --dark-navy: #f7f5fb; // load screen background
    --navy: #f7f5fb; // Main index background
    --slate: #857e7b; // Text color
    --lightest-slate: #0a2463; // Titles
    --dark-slate: #231651; // scroll bar
    --light-slate: #231651; // Sub accent
    --lightest-navy: #ff8811; // Background colour extra elements
    --nav-heading: #628395;
    --green: #ff8811; // Main accent
    --green-tint: rgba(169, 167, 167, 0.2); // Button overlay
    --navy-shadow: rgba(255, 255, 255, 0.9); // Picture & header background shadow

    /* Extra pages specific colours*/
    --light-navy: #ffffff; /* Border extra pages */
    /* Generic colours*/
    --white: #e6f1ff; /* ? */
    --pink: #f57dff; /* No ref */
    --blue: #57cbff; /* No ref */

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
