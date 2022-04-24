export const prefix = "fm";

export const tokens = {
    font: {
        size: "1rem",
        family: "unset",
    },
    border: {
        radius: ".5rem",
        width: "1px",
    },
    opacity: {
        unselect: ".25",
        unfocus: ".5",
        disabled: ".5",
    },
    size: {
        "": "4px",
        xl: "calc(@size * 10)",
        l: "calc(@size * 8)",
        m: "calc(@size * 7)",
        s: "calc(@size * 5)",
        xs: "calc(@size * 4)",
        xxs: "calc(@size * 3)",
    },
    color: {
        primary: {
            60: "#2C3A41",
            30: "transparent",
            10: "#fff",
        },
        action: {
            60: "#fff",
            30: "transparent",
            10: "@color.primary.60",
        },
        toggle: {
            60: "@color.primary.60",
            30: "@color.primary.30",
            10: "@color.primary.10",
        },
        layer: {
            60: "#fff",
            30: "transparent",
            10: "@color.primary.60",
        },
        scroll: {
            60: "transparent",
            30: "transparent",
            10: "@color.neutral.10",
        },
        input: {
            60: "@color.action.60",
            30: "@color.action.30",
            10: "@color.action.10",
        },
        button: {
            60: "@color.action.60",
            30: "@color.action.30",
            10: "@color.action.10",
        },
        success: {
            60: "#18D47C",
            30: "transparent",
            10: "#fff",
        },
        info: {
            60: "#0080FF",
            30: "transparent",
            10: "#fff",
        },
        warning: {
            60: "#F9AA33",
            30: "transparent",
            10: "#fff",
        },
        danger: {
            60: "#FF5B5B",
            30: "transparent",
            10: "#fff",
        },
        neutral: {
            60: "#D8E2EA",
            30: "transparent",
            10: "@color.primary.60",
        },
    },
    input: {
        border: {
            width: "@border.width",
            style: "solid",
            color: "@color.input.30",
        },
    },
    tab: {
        width: "100%",
        height: "100%",
        radius: "100px",
    },
    transition: {
        action: ".2s ease all",
    },
    shadow: {
        layer: "0px 12px 22px rgba(0,0,0 ,.05)",
    },
    variation: {
        [`size=small`]: {
            font: {
                size: "0.875rem",
            },
            size: {
                xl: "calc(@size * 8)",
                l: "calc(@size * 7)",
                m: "calc(@size * 5)",
                s: "calc(@size * 3.5)",
            },
        },
    },
};
