import { c, css, useHost } from "atomico";
import { useDisabled } from "@atomico/hooks/use-disabled";
import { Checkbox } from "../checkbox/checkbox";
import { useReflectEvent } from "@atomico/hooks/use-reflect-event";
import { useFormInputRadio } from "@atomico/hooks/use-form";
import customElements from "../custom-elements";

function radio({ value }) {
    const host = useHost();
    // const refInput = useCheckbox("radio");
    const disabled = useDisabled();
    const refInput = useFormInputRadio(<input value={value} />);

    useReflectEvent(host, refInput, "click");

    return (
        <host shadowDom>
            <button class="checkbox" disabled={disabled}>
                <div class="checkbox-state"></div>
            </button>
        </host>
    );
}

radio.styles = css`
    :host,
    :host([size="small"]) {
        --scale-state: 0.6 !important;
    }
    .checkbox,
    .checkbox-state {
        border-radius: 100%;
    }
`;

export const Radio = c(radio, Checkbox);

customElements.define("radio", Radio);
