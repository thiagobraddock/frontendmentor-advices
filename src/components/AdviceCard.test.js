import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import AdviceCard from './AdviceCard';

import * as ADVICEAPI from '../services/advice-api';

const adviceMock = {
  slip: {
    id: 33,
    advice: 'Don\'t let the bastards grind you down.',
  },
};

const adviceMock2 = {
  slip: {
    id: 1,
    advice: 'Não é quem você é por dentro e sim o que você faz que te define.',
  },
};

describe('<AdviceCard />', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('deve renderizar um "conselho" na tela', async () => {
    jest.spyOn(global, 'fetch')
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(adviceMock),
        ok: true,
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(adviceMock2),
        ok: true,
      });

    // jest.spyOn(ADVICEAPI, 'fetchData').mockResolvedValue(adviceMock);

    render(<AdviceCard />);
    const loading = await screen.findByText(/loading/i, {}, { timeout: 3000 });

    expect(loading).toBeInTheDocument();

    const advice = await screen.findByText(/let the bastards grind/i);

    expect(advice).toBeInTheDocument();

    const button = screen.getByRole('button');

    await act(async () => {
      userEvent.click(button);
    });

    expect(global.fetch).toHaveBeenCalledTimes(2);

    // screen.debug();
    // uma forma interessante de passar uma regex para o findByText
    const regex = new RegExp(adviceMock2.slip.advice, 'i');
    const advice2 = await screen.findByText(regex);
    expect(advice2).toBeInTheDocument();
  });

  it('deve renderizar o texto loading', async () => {
    render(<AdviceCard />);
    const loading = await screen.findByText(/loading/i);
    expect(loading).toBeInTheDocument();

    const adviceText = await screen.findByText(/ADVICE/i);
    expect(adviceText).toBeInTheDocument();
  });
});
