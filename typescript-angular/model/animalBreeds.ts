/**
 * Animal Rescue API
 * AnimalRescue CQRS API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jlgartee@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { CatBreeds } from './catBreeds';
import { DogBreeds } from './dogBreeds';


export interface AnimalBreeds {
    catBreeds?: CatBreeds;
    dogBreeds?: DogBreeds;
}
