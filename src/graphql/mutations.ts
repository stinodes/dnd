/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createCharacterLocation = /* GraphQL */ `
  mutation CreateCharacterLocation(
    $input: CreateCharacterLocationInput!
    $condition: ModelCharacterLocationConditionInput
  ) {
    createCharacterLocation(input: $input, condition: $condition) {
      id
      characterID
      locationID
      character {
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
          flaws
          goals
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      location {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateCharacterLocation = /* GraphQL */ `
  mutation UpdateCharacterLocation(
    $input: UpdateCharacterLocationInput!
    $condition: ModelCharacterLocationConditionInput
  ) {
    updateCharacterLocation(input: $input, condition: $condition) {
      id
      characterID
      locationID
      character {
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
          flaws
          goals
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      location {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteCharacterLocation = /* GraphQL */ `
  mutation DeleteCharacterLocation(
    $input: DeleteCharacterLocationInput!
    $condition: ModelCharacterLocationConditionInput
  ) {
    deleteCharacterLocation(input: $input, condition: $condition) {
      id
      characterID
      locationID
      character {
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
          flaws
          goals
        }
        locations {
          nextToken
        }
        createdAt
        updatedAt
      }
      location {
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
      createdAt
      updatedAt
    }
  }
`;
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
        flaws
        goals
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
        flaws
        goals
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
        flaws
        goals
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
