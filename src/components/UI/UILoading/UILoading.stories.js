import UiLoading from "./UiLoading";

export default {
    title: 'UI-Kit/UiLoading',
    component: UiLoading
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UiLoading {...args} />;

const props = {
    theme: 'white',
    isShadow: true,
    classes: ''
}

//👇 Each story then reuses that template
export const White = Template.bind({});
White.args = {
    ...props,
    theme: 'white',
    isShadow: true
};

export const Black = Template.bind({});
Black.args = {
    ...props,
    theme: 'black',
};

export const Blue = Template.bind({});
Blue.args = {
    ...props,
    theme: 'blue',
    isShadow: true
};