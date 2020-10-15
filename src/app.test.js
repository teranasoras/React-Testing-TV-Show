import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import episodesData from './components/Episodes.test';

jest.mock('./api/fetchShow');


describe('App Tests', () => {

    test('renders without errors', () => {
        render(<App />)
    })

    test('fetches data and renders data', async () => {
       
        mockFetchShow.mockResolvedValue({data:episodesData})
    const { getByText, queryAllByTestId } = render(<App />)

    expect(queryAllByTestId('episode')).toHaveLength(0)

    await wait() 
    fireEvent.click(getByText(/select a season/i))
    fireEvent.click(getByText(/season 1/i))

    await wait()
    expect(queryAllByTestId('episode')).toHaveLength(6)
        

        
    })
})