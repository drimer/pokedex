import { render } from "@testing-library/react"
import { Dashboard } from "./Dashboard"

describe('Dashboard', () => {
    it('renders without errors', () => {
        expect(() => render(<Dashboard/>)).not.toThrow()
    })

    it('renders with children', () => {
        const { queryByText } = render(<Dashboard><div>Some text</div></Dashboard>)
        expect(queryByText('Some text')).toBeInTheDocument()
    })
})
