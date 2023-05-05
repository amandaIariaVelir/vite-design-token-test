import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const HeaderTestExample = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));

    await expect(canvas.getByText('clicked')).toBeInTheDocument();
}