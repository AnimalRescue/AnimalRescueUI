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

import { AdoptionStatus } from './adoptionStatus';
import { AnimalId } from './animalId';
import { AnimalInfo } from './animalInfo';
import { AnimalType } from './animalType';
import { CatBreeds } from './catBreeds';
import { CatColors } from './catColors';
import { Gender } from './gender';
import { KennelId } from './kennelId';
import { LitterId } from './litterId';
import { MedicalHistoryId } from './medicalHistoryId';
import { NoteId } from './noteId';
import { ParNumber } from './parNumber';
import { PhotoId } from './photoId';


export interface Cat extends AnimalInfo {
    breed?: CatBreeds;
    color?: CatColors;
}
