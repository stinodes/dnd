/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      name
      owner
      characters {
        items {
          id
          campaignID
          name
          race
          gender
          job
          createdAt
          updatedAt
        }
        nextToken
      }
      locations {
        items {
          id
          campaignID
          parentLocationID
          name
          map
          services
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        characters {
          nextToken
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      campaignID
      parentLocationID
      name
      map
      services
      notes
      characters {
        items {
          id
          characterID
          locationID
          createdAt
          updatedAt
        }
        nextToken
      }
      parentLocation {
        id
        campaignID
        parentLocationID
        name
        map
        services
        notes
        characters {
          nextToken
        }
        parentLocation {
          id
          campaignID
          parentLocationID
          name
          map
          services
          notes
          createdAt
          updatedAt
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      locations {
        items {
          id
          campaignID
          parentLocationID
          name
          map
          services
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignID
        parentLocationID
        name
        map
        services
        notes
        characters {
          nextToken
        }
        parentLocation {
          id
          campaignID
          parentLocationID
          name
          map
          services
          notes
          createdAt
          updatedAt
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      campaignID
      name
      race
      gender
      job
      appearance {
        height
        age
        bodyType
        hairColor
        hairStyle
        features
      }
      characteristics {
        alignment
        personality
        relationships {
          opinion
        }
      }
      locations {
        items {
          id
          characterID
          locationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        campaignID
        name
        race
        gender
        job
        appearance {
          height
          age
          bodyType
          hairColor
          hairStyle
          features
        }
        characteristics {
          alignment
          personality
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
