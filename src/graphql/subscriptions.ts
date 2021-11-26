/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateCharacterLocation = /* GraphQL */ `
  subscription OnCreateCharacterLocation {
    onCreateCharacterLocation {
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
export const onUpdateCharacterLocation = /* GraphQL */ `
  subscription OnUpdateCharacterLocation {
    onUpdateCharacterLocation {
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
export const onDeleteCharacterLocation = /* GraphQL */ `
  subscription OnDeleteCharacterLocation {
    onDeleteCharacterLocation {
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter {
    onUpdateCharacter {
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter {
    onDeleteCharacter {
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
