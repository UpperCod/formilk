import { Input } from "./input";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input",
};

export default md`
# Icon

${(
    <Stories
        props={{
            size: { type: "radio-groups", options: ["normal", "small"] },
        }}
    >
        <Story
            label="Default"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input"></Input>
                </div>
            )}
        ></Story>
        <Story
            label="Prefix"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input">
                        <Icon size=".8em" slot="prefix" type="avatar"></Icon>
                    </Input>
                </div>
            )}
        ></Story>
        <Story
            label="Suffix"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input">
                        <Icon size=".8em" slot="suffix" type="avatar"></Icon>
                    </Input>
                </div>
            )}
        ></Story>
        <Story
            label="Label"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input">
                        Label
                    </Input>
                </div>
            )}
        ></Story>
    </Stories>
)}

`;