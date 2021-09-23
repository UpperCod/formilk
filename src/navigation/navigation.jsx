import { c, css, useEffect, useRef, useProp, useState } from "atomico";
import { tokensNavigation } from "../tokens";
export { NavigationItem } from "./navigation-item";
export { NavigationDropdown } from "./navigation-dropdown";

/**
 *
 * @param {Element} target
 */
const getTargetFor = (target) => {
    while (
        target &&
        !target.hasAttribute("for") &&
        (target = target.parentElement)
    );
    return target;
};
/**
 *
 * @param {Element} target
 * @param {boolean} [value]
 */
const setDisplayed = (target, value) =>
    target[value ? "setAttribute" : "removeAttribute"](
        "displayed",
        value ? "" : null
    );
/**
 *
 * @param {import("atomico").Props<navigation.props>}  props
 */
function navigation({ columns }) {
    const refBrand = useRef();
    const refSlots = useRef();
    /**
     * @type {import("atomico").UseProp<Element[]>}
     */
    const [dropdown, setDropdown] = useProp("dropdown");
    return (
        <host
            shadowDom
            onmouseleave={(event) => {
                dropdown.forEach((el) => setDisplayed(el));
                setDropdown([]);
            }}
        >
            <div class="navigation-box">
                <slot name="brand" ref={refBrand}></slot>
                <div
                    class="navigation-nav"
                    style={{ "--columns": columns }}
                    onmouseover={(event) => {
                        const target = getTargetFor(event.target);
                        dropdown.forEach((el) => setDisplayed(el));

                        if (target) setDisplayed(target, true);
                        setDropdown(target ? [target] : []);
                    }}
                >
                    <slot ref={refSlots}></slot>
                </div>
                {dropdown && <div class="navigation-line"></div>}
            </div>
            <div class="navigation-dropdowns">
                {dropdown.map((element, index) => (
                    <div class="navigation-dropdown">
                        <slot
                            onmouseover={(event) => {
                                const target = getTargetFor(event.target);

                                dropdown
                                    .slice(index + 1)
                                    .forEach((el) => setDisplayed(el));

                                if (target) setDisplayed(target, true);

                                const beforeDropdown = dropdown.slice(
                                    0,
                                    index + 1
                                );

                                setDropdown(
                                    target
                                        ? [...beforeDropdown, target]
                                        : beforeDropdown
                                );
                            }}
                            name={element.getAttribute("for")}
                        ></slot>
                    </div>
                ))}
            </div>
        </host>
    );
}

navigation.props = {
    theme: String,
    position: String,
    columns: Number,
    dropdown: {
        type: Array,
        value: () => [],
    },
};

navigation.styles = [
    tokensNavigation,
    css`
        :host {
            display: block;
            max-width: 100%;
        }
        .navigation-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            padding: 0 var(--space-x);
            background: var(--background);
        }
        .navigation-nav {
            display: flex;
            position: relative;
            z-index: 2;
        }
        .navigation-dropdown {
            position: relative;
        }
        .navigation-dropdown-slot {
            position: relative;
        }
    `,
];

export const Navigation = c(navigation);