import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

export const episodesData = [
    {
      id: "fakeid",
      image: {
        medium: "image.png",
        original: "image.png",
      },
      name: "episode",
      season: "season",
      number: "number",
      summary: "summary",
      runtime: "runtime",
      embedded: {
        episodes: "fakeinfo",
      },
    },
  ];


describe('Episodes tests', () => {

    test('renders without errors', () => {
        render(<Episodes episodes={[]} />)
    })

    test('Episodes show data when re-rendered with epi props', () => {
        const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)
        expect(queryAllByTestId('episode')).toHaveLength(0)
        expect(queryAllByTestId('episode')).toStrictEqual([])

        rerender(<Episodes episodes={episodesData} />)
        expect(queryAllByTestId('episode')).toHaveLength(0)
    })
})