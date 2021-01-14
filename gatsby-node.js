exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({
        fromPath: 'https://insightdatascience.skills.fund/*',
        toPath: 'https://skills.fund',
        isPermanent: true,
        force: true
    })
    createRedirect({
        fromPath: 'https://insight.skills.fund/*',
        toPath: 'https://skills.fund',
        isPermanent: true,
        force: true
    })
    createRedirect({
        fromPath: '/go',
        toPath: '/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure'
    })
    createRedirect({
        fromPath: '/accepted',
        toPath: '/'
    })
}