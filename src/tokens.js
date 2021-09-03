import { css } from "atomico";

export const tokensInput = css`
    :host {
        --border-width: var(--fm--input-border-width, 1px);
        --border-color: var(--fm--input-border-color, rgba(255, 255, 255, 0.5));
        --min-height: var(--fm--input-min-height, 2.5rem);
        --radius: var(--fm--input-radius, 0.5rem);
        --padding-y: var(--fm--input-padding-y, 0.5rem);
        --padding-x: var(--fm--input-padding--x, 1rem);
        --background: var(--fm--input-background, rgba(255, 255, 255, 0.5));
        --shadow-size: var(--fm--input-shadow-size, 0px 6px 22px);
        --shadow-color: var(--fm--input-shadow-color, rgba(0, 0, 0, 0.05));
        --font-size: var(--fm-input--font-size, 0.875rem);
        display: inline-block;
        font-size: var(--font-size);
        min-height: var(--min-height);
    }

    .input-box {
        background: var(--background);
        color: var(--color);
        border-radius: var(--radius);
        backdrop-filter: var(--backdrop);
        box-shadow: var(--shadow-size) var(--shadow-color);
        padding: var(--padding-y) var(--padding-x);
        box-sizing: border-box;
    }

    .input-box--use-border {
        border: var(--border-width) solid var(--border-color);
    }
`;

export const tokenColors = css`
    :host {
        --primary: var(--fm--primary, #2c3a41);
        --primary-contrast: var(--fm--primary, #fff);
        --secondary: var(--fm--secondary, black);
        --success: var(--fm--warning, rgb(24, 212, 124));
        --warning: var(--fm--warning, #f9aa33);
        --danger: var(--fm--warning, rgb(255, 91, 91));
        --info: var(--fm--warning, #0080ff);
        --checked: var(--primary);
        --checked-contrast: var(--primary-contrast);
    }
`;