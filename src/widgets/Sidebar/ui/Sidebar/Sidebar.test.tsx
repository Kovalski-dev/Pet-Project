import {fireEvent, screen} from '@testing-library/react';
import Sidebar from './Sidebar';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('ButtonComponentTest', () => {
  test('test sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
