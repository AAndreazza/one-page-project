module.exports = {
    plugins:[
        'gatsby-plugin-image',
        'gatsby-plugin-postcss',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
              icon: 'src/images/logo.png',
            }
          }
    ]
}