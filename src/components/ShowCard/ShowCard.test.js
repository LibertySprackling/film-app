/** @jest-environment jsdom */

import { screen } from '@testing-library/react';
import ShowCard from './';
import { MemoryRouter } from 'react-router-dom';

const fakeShow = {
    name: "My Little Pony: Making your Mark",
    summary: "A really good show",
    image: "",
    rating: 10
}

describe('ShowCard', () => {
    
    beforeEach(() => {
        render(    <MemoryRouter>   
                        <ShowCard 
                        name={fakeShow.name}
                        summary={fakeShow.summary}
                        image={fakeShow.image}
                        rating={fakeShow.rating}/>
                    </MemoryRouter>
                    ) 
    })

    test('Displays a heading with specific text', () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("My Little Pony: Making your Mark")
    })


})

