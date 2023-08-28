import { request, gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seats
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/cllj0nkmo1bvw01uk29i9eron/master",
    query
  );
  return result;
};
