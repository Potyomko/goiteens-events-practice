import { RecipeTitle } from "./EvenS.styled"
import PropTypes from 'prop-types'

export const PageTitle = ({ title }) => {
    return <div>
        <RecipeTitle>{title}</RecipeTitle>
    </div>
}
PageTitle.propTypes = {
    RecipeTitle: PropTypes.string.isRequired,
}