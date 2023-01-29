import UIButton from "./UIButton";

export default {
    title: 'UI-Kit/UIButton',
    component: UIButton
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UIButton {...args} />;

const props = {
    text: 'Next',
    onClick: () => console.log('Button click'),
    disable: false,
    theme: 'light',
    classes: ''
}

//👇 Each story then reuses that template
export const Light = Template.bind({});
Light.args = {
    ...props,
    theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
    ...props,
    theme: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    disable: true,
};