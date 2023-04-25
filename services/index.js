import { request, gql } from "graphql-request"

const API = "https://api-us-west-2.hygraph.com/v2/clgv6idw20ias01ue3cfb1mwt/master";

export async function getPosts(){
    const query = gql `
        query MyQuery {
            postsConnection {
            edges {
                node {
                content {
                    html
                    text
                }
                cover {
                    url
                }
                slug
                title
                publishedOn
                }
            }
            }
        }
    `

    const results = await request(API, query);

    console.log(results)

    return results.postsConnection.edges
}