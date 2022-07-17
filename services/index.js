import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HRAPHCMS_ENDPOINT;

export const getPosts = async()=>{
    const query =gql`
        query MyQuery {
            postsConnection(orderBy:createdAt_DESC) {
              edges {
                node {
                  author {
                    bio
                    name
                    id
                    photo {
                      url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
            }
          }
    `
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}

export const getRecentPosts = async()=>{
  const query = gql`
    query getPostDetails(){
      posts(orderBy:createdAt_DESC
        last:4
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query);
  return result.posts;
}

export const getSimilarPosts = async(categories, slug)=>{
  const query =gql`
    query getPostDetails($slug: String!, $categories:[String!]){
      posts(
        where:{slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last:3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, {categories, slug});
  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST', 
    headers:{'Content-Type':'application/json'}, 
    body: JSON.stringify(obj)
  })
  return result.json()
}


export const getComments = async(slug)=>{
  const query = gql`
    query GetComments($slug: String!) {
      comments(where:{post: {slug: $slug}}){
        name
        createdAt
        comment
      }
    }
  `
  const result = await request(graphqlAPI, query, {slug});
  return result.comments;
}
export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};