import { Card } from "./card/card";
import { InputBasic } from "./input-basic/input-basic";
import { InputSwitch } from "./input-switch/input-switch";
import { InputCheckbox } from "./input-checkbox/input-checkbox";
import { InputRadio } from "./input-radio/input-radio";
import { InputColor } from "./input-color/input-color";
import { InputSelect } from "./input-select/input-select";
import { Button } from "./button/button";
import { Alert } from "./alert/alert";
import {
    Navigation,
    NavigationItem,
    NavigationDropdown,
} from "./navigation/navigation";

export { Card } from "./card/card";
export { InputBasic } from "./input-basic/input-basic";
export { InputSwitch } from "./input-switch/input-switch";
export { InputCheckbox } from "./input-checkbox/input-checkbox";
export { InputRadio } from "./input-radio/input-radio";
export { InputColor } from "./input-color/input-color";
export { InputSelect } from "./input-select/input-select";
export { Button } from "./button/button";
export { Alert } from "./alert/alert";
export {
    Navigation,
    NavigationItem,
    NavigationDropdown,
} from "./navigation/navigation";

customElements.define("fm-card", Card);
customElements.define("fm-input-basic", InputBasic);
customElements.define("fm-input-switch", InputSwitch);
customElements.define("fm-input-checkbox", InputCheckbox);
customElements.define("fm-input-radio", InputRadio);
customElements.define("fm-input-color", InputColor);
customElements.define("fm-input-select", InputSelect);
customElements.define("fm-button", Button);
customElements.define("fm-alert", Alert);
customElements.define("fm-navigation", Navigation);
customElements.define("fm-navigation-item", NavigationItem);
customElements.define("fm-navigation-dropdown", NavigationDropdown);
