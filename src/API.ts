/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCampaignInput = {
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelCampaignConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Campaign = {
  __typename: "Campaign",
  id: string,
  name: string,
  owner: string,
  characters?: ModelCharacterConnection | null,
  locations?: ModelLocationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCharacterConnection = {
  __typename: "ModelCharacterConnection",
  items:  Array<Character >,
  nextToken?: string | null,
};

export type Character = {
  __typename: "Character",
  id: string,
  campaignID: string,
  name: string,
  race?: string | null,
  gender?: string | null,
  job?: string | null,
  appearance?: Appearance | null,
  characteristics?: Characteristics | null,
  locations?: ModelCharacterLocationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Appearance = {
  __typename: "Appearance",
  height?: string | null,
  age?: string | null,
  bodyType?: string | null,
  hairColor?: string | null,
  hairStyle?: string | null,
  features?: string | null,
};

export type Characteristics = {
  __typename: "Characteristics",
  alignment?: string | null,
  personality?: string | null,
  relationships?:  Array<Relationship | null > | null,
  flaws?: string | null,
  goals?: string | null,
};

export type Relationship = {
  __typename: "Relationship",
  with?: Character | null,
  opinion?: string | null,
};

export type ModelCharacterLocationConnection = {
  __typename: "ModelCharacterLocationConnection",
  items:  Array<CharacterLocation >,
  nextToken?: string | null,
};

export type CharacterLocation = {
  __typename: "CharacterLocation",
  id: string,
  characterID: string,
  locationID: string,
  character: Character,
  location: Location,
  createdAt: string,
  updatedAt: string,
};

export type Location = {
  __typename: "Location",
  id: string,
  campaignID: string,
  parentLocationID?: string | null,
  name: string,
  map?: string | null,
  services?: Array< string | null > | null,
  notes?: Array< string | null > | null,
  characters?: ModelCharacterLocationConnection | null,
  parentLocation?: Location | null,
  locations?: ModelLocationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location >,
  nextToken?: string | null,
};

export type UpdateCampaignInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type DeleteCampaignInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  campaignID: string,
  parentLocationID?: string | null,
  name: string,
  map?: string | null,
  services?: Array< string | null > | null,
  notes?: Array< string | null > | null,
};

export type ModelLocationConditionInput = {
  campaignID?: ModelIDInput | null,
  parentLocationID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  map?: ModelStringInput | null,
  services?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLocationInput = {
  id: string,
  campaignID?: string | null,
  parentLocationID?: string | null,
  name?: string | null,
  map?: string | null,
  services?: Array< string | null > | null,
  notes?: Array< string | null > | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type CreateCharacterLocationInput = {
  id?: string | null,
  characterID: string,
  locationID: string,
};

export type ModelCharacterLocationConditionInput = {
  characterID?: ModelIDInput | null,
  locationID?: ModelIDInput | null,
  and?: Array< ModelCharacterLocationConditionInput | null > | null,
  or?: Array< ModelCharacterLocationConditionInput | null > | null,
  not?: ModelCharacterLocationConditionInput | null,
};

export type UpdateCharacterLocationInput = {
  id: string,
  characterID?: string | null,
  locationID?: string | null,
};

export type DeleteCharacterLocationInput = {
  id: string,
};

export type CreateCharacterInput = {
  id?: string | null,
  campaignID: string,
  name: string,
  race?: string | null,
  gender?: string | null,
  job?: string | null,
  appearance?: AppearanceInput | null,
  characteristics?: CharacteristicsInput | null,
};

export type AppearanceInput = {
  height?: string | null,
  age?: string | null,
  bodyType?: string | null,
  hairColor?: string | null,
  hairStyle?: string | null,
  features?: string | null,
};

export type CharacteristicsInput = {
  alignment?: string | null,
  personality?: string | null,
  relationships?: Array< RelationshipInput | null > | null,
  flaws?: string | null,
  goals?: string | null,
};

export type RelationshipInput = {
  opinion?: string | null,
};

export type ModelCharacterConditionInput = {
  campaignID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  race?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  job?: ModelStringInput | null,
  and?: Array< ModelCharacterConditionInput | null > | null,
  or?: Array< ModelCharacterConditionInput | null > | null,
  not?: ModelCharacterConditionInput | null,
};

export type UpdateCharacterInput = {
  id: string,
  campaignID?: string | null,
  name?: string | null,
  race?: string | null,
  gender?: string | null,
  job?: string | null,
  appearance?: AppearanceInput | null,
  characteristics?: CharacteristicsInput | null,
};

export type DeleteCharacterInput = {
  id: string,
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
};

export type ModelCampaignConnection = {
  __typename: "ModelCampaignConnection",
  items:  Array<Campaign >,
  nextToken?: string | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  parentLocationID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  map?: ModelStringInput | null,
  services?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelCharacterFilterInput = {
  id?: ModelIDInput | null,
  campaignID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  race?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  job?: ModelStringInput | null,
  and?: Array< ModelCharacterFilterInput | null > | null,
  or?: Array< ModelCharacterFilterInput | null > | null,
  not?: ModelCharacterFilterInput | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharacterLocationMutationVariables = {
  input: CreateCharacterLocationInput,
  condition?: ModelCharacterLocationConditionInput | null,
};

export type CreateCharacterLocationMutation = {
  createCharacterLocation?:  {
    __typename: "CharacterLocation",
    id: string,
    characterID: string,
    locationID: string,
    character:  {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    location:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharacterLocationMutationVariables = {
  input: UpdateCharacterLocationInput,
  condition?: ModelCharacterLocationConditionInput | null,
};

export type UpdateCharacterLocationMutation = {
  updateCharacterLocation?:  {
    __typename: "CharacterLocation",
    id: string,
    characterID: string,
    locationID: string,
    character:  {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    location:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharacterLocationMutationVariables = {
  input: DeleteCharacterLocationInput,
  condition?: ModelCharacterLocationConditionInput | null,
};

export type DeleteCharacterLocationMutation = {
  deleteCharacterLocation?:  {
    __typename: "CharacterLocation",
    id: string,
    characterID: string,
    locationID: string,
    character:  {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    location:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCharacterMutationVariables = {
  input: CreateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type CreateCharacterMutation = {
  createCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCharacterMutationVariables = {
  input: UpdateCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type UpdateCharacterMutation = {
  updateCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCharacterMutationVariables = {
  input: DeleteCharacterInput,
  condition?: ModelCharacterConditionInput | null,
};

export type DeleteCharacterMutation = {
  deleteCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignsQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name: string,
      owner: string,
      characters?:  {
        __typename: "ModelCharacterConnection",
        nextToken?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetCharacterQueryVariables = {
  id: string,
};

export type GetCharacterQuery = {
  getCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCharactersQueryVariables = {
  filter?: ModelCharacterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharactersQuery = {
  listCharacters?:  {
    __typename: "ModelCharacterConnection",
    items:  Array< {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    name: string,
    owner: string,
    characters?:  {
      __typename: "ModelCharacterConnection",
      items:  Array< {
        __typename: "Character",
        id: string,
        campaignID: string,
        name: string,
        race?: string | null,
        gender?: string | null,
        job?: string | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    campaignID: string,
    parentLocationID?: string | null,
    name: string,
    map?: string | null,
    services?: Array< string | null > | null,
    notes?: Array< string | null > | null,
    characters?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    parentLocation?:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterLocationSubscription = {
  onCreateCharacterLocation?:  {
    __typename: "CharacterLocation",
    id: string,
    characterID: string,
    locationID: string,
    character:  {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    location:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharacterLocationSubscription = {
  onUpdateCharacterLocation?:  {
    __typename: "CharacterLocation",
    id: string,
    characterID: string,
    locationID: string,
    character:  {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    location:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharacterLocationSubscription = {
  onDeleteCharacterLocation?:  {
    __typename: "CharacterLocation",
    id: string,
    characterID: string,
    locationID: string,
    character:  {
      __typename: "Character",
      id: string,
      campaignID: string,
      name: string,
      race?: string | null,
      gender?: string | null,
      job?: string | null,
      appearance?:  {
        __typename: "Appearance",
        height?: string | null,
        age?: string | null,
        bodyType?: string | null,
        hairColor?: string | null,
        hairStyle?: string | null,
        features?: string | null,
      } | null,
      characteristics?:  {
        __typename: "Characteristics",
        alignment?: string | null,
        personality?: string | null,
        flaws?: string | null,
        goals?: string | null,
      } | null,
      locations?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    location:  {
      __typename: "Location",
      id: string,
      campaignID: string,
      parentLocationID?: string | null,
      name: string,
      map?: string | null,
      services?: Array< string | null > | null,
      notes?: Array< string | null > | null,
      characters?:  {
        __typename: "ModelCharacterLocationConnection",
        nextToken?: string | null,
      } | null,
      parentLocation?:  {
        __typename: "Location",
        id: string,
        campaignID: string,
        parentLocationID?: string | null,
        name: string,
        map?: string | null,
        services?: Array< string | null > | null,
        notes?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCharacterSubscription = {
  onCreateCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCharacterSubscription = {
  onUpdateCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCharacterSubscription = {
  onDeleteCharacter?:  {
    __typename: "Character",
    id: string,
    campaignID: string,
    name: string,
    race?: string | null,
    gender?: string | null,
    job?: string | null,
    appearance?:  {
      __typename: "Appearance",
      height?: string | null,
      age?: string | null,
      bodyType?: string | null,
      hairColor?: string | null,
      hairStyle?: string | null,
      features?: string | null,
    } | null,
    characteristics?:  {
      __typename: "Characteristics",
      alignment?: string | null,
      personality?: string | null,
      relationships?:  Array< {
        __typename: "Relationship",
        opinion?: string | null,
      } | null > | null,
      flaws?: string | null,
      goals?: string | null,
    } | null,
    locations?:  {
      __typename: "ModelCharacterLocationConnection",
      items:  Array< {
        __typename: "CharacterLocation",
        id: string,
        characterID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
      } >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
