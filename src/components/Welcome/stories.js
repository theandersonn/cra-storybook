import Welcome from '.';

const welcomeParams = {
  title: 'Welcome',
  component: Welcome
}

export const Default = (args) => <Welcome {...args} />;

Default.args = {
  title: 'CRA Storybook'
}

export default welcomeParams;