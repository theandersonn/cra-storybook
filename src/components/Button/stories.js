import Button from '.';

const buttonParams = {
  title: 'Button',
  component: Button
}

export const Default = (args) => <Button {...args} />;

Default.args = {
  title: 'editado'
}

export default buttonParams;