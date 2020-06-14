const JURISDICTIONS = require('./data')
const path = require(`path`)

/* TODO(nsahler): Use fs and basic MD and JSON files instead */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const stateTemplate = path.resolve(`./src/templates/jurisdiction.js`)
  console.log(JURISDICTIONS)
  for (var j of JURISDICTIONS) {
    createPage({
      // Path for this page — required
      path: `${j.slug}`,
      component: stateTemplate,
      context: j,
    }) 
  }
}